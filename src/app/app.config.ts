import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideFileRouter, requestContextInterceptor } from "@analogjs/router";
import { provideContent, withMarkdownRenderer } from "@analogjs/content";
import { withPrismHighlighter } from "@analogjs/content/prism-highlighter";
import { withInMemoryScrolling } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFileRouter(
      withInMemoryScrolling({
        scrollPositionRestoration: "top",
        anchorScrolling: "enabled",
      }),
    ),
    provideHttpClient(withInterceptors([requestContextInterceptor])),
    provideClientHydration(withEventReplay()),
    provideContent(
      withMarkdownRenderer({
        loadMermaid: () => import("mermaid"),
      }),
      withPrismHighlighter(),
    ),
  ],
};
