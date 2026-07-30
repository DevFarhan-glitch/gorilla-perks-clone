import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRoutes } from "./App";

export { PRERENDER_ROUTES } from "./routes-list";

export function render(url: string, helmetContext: Record<string, any> = {}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return html;
}
