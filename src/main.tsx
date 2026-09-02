import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Catch Vite dynamic chunk loading errors (e.g. after a new deployment when old chunk hashes are replaced)
if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (event) => {
    console.warn("Vite chunk preload error detected (stale build hashes). Reloading page...", event);
    window.location.reload();
  });
}

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(<App />);

