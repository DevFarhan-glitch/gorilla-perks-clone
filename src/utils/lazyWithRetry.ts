import { ComponentType, lazy, LazyExoticComponent } from "react";

/**
 * Enhanced lazy loader that handles dynamic import & chunk loading failures
 * (e.g. after a new deployment when Vite chunk hashes change on the server).
 * 
 * 1. Attempts to load the component dynamically.
 * 2. If it fails (transient network glitch), retries once automatically.
 * 3. If it fails due to a stale chunk (new deploy), reloads the page seamlessly
 *    so the client picks up the newest HTML and chunk hashes without showing an error.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): LazyExoticComponent<T> {
  return lazy(async () => {
    const sessionStorageKey = "chunk_retry_timestamp";
    const lastRetry = typeof window !== "undefined" ? sessionStorage.getItem(sessionStorageKey) : null;
    const now = Date.now();
    // Allow auto-reload once every 10 seconds to avoid infinite reload loops
    const canAutoReload = !lastRetry || now - parseInt(lastRetry, 10) > 10000;

    try {
      return await componentImport();
    } catch (error: any) {
      console.warn("Initial chunk load failed, retrying in 300ms...", error);

      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return await componentImport();
      } catch (retryError: any) {
        console.error("Chunk load retry failed:", retryError);

        const errorMessage = (retryError?.message || "").toLowerCase();
        const isChunkOrNetworkError =
          errorMessage.includes("failed to fetch dynamically imported module") ||
          errorMessage.includes("importing a module script failed") ||
          errorMessage.includes("loading chunk") ||
          errorMessage.includes("unexpected token '<'") ||
          retryError?.name === "ChunkLoadError" ||
          (retryError instanceof TypeError);

        if (canAutoReload && isChunkOrNetworkError && typeof window !== "undefined") {
          sessionStorage.setItem(sessionStorageKey, now.toString());
          window.location.reload();
          // Return pending promise so React waits for the reload without crashing
          return new Promise<{ default: T }>(() => {});
        }

        throw retryError;
      }
    }
  });
}

export default lazyWithRetry;
