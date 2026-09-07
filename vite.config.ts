/// <reference types="vitest" />

import { defineConfig } from "vite";
import analog from "@analogjs/platform";
import * as fs from "fs";

const lectures = fs.readdirSync("./src/content/lectures");
const coursework = fs.readdirSync("./src/content/coursework");

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * The Prism highlighter installs `marked-highlight`, whose `code` renderer is
 * registered last and therefore replaces the one Analog uses to turn
 * ```mermaid fences into `<pre class="mermaid">` (the element mermaid.run()
 * looks for). A block level extension is tokenized before the fence tokenizer
 * runs, so the diagrams survive the highlighter.
 */
const mermaidExtension = {
  extensions: [
    {
      name: "mermaid",
      level: "block" as const,
      start: (src: string) => src.match(/^```mermaid/m)?.index,
      tokenizer(src: string) {
        const match =
          /^```mermaid[^\S\r\n]*\r?\n([\s\S]*?)\r?\n?```(?:\r?\n|$)/.exec(src);

        return match
          ? { type: "mermaid", raw: match[0], text: match[1] }
          : undefined;
      },
      renderer: (token: { text: string }) =>
        `<pre class="mermaid">${escapeHtml(token.text)}</pre>`,
    },
  ],
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: "src/assets",
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    analog({
      content: {
        highlighter: "prism",
        markedOptions: {
          extensions: [mermaidExtension],
        },
      },
      prerender: {
        routes: async () => [
          "/",
          "/lectures",
          ...lectures.map((post) => `/lectures/${post.replace(".md", "")}`),
          ...coursework.map((post) => `/work/${post.replace(".md", "")}`),
          "/work",
          "/team",
          "/resources",
        ],
        sitemap: {
          host: "https://cscd01.com",
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/test-setup.ts"],
    include: ["**/*.spec.ts"],
    reporters: ["default"],
  },
  define: {
    "import.meta.vitest": mode !== "production",
  },
}));
