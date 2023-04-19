import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import redirect from "./src/lib/RedirectIntegration.js";
import blockIALPlugin from "./src/lib/BlockIALPlugin.js";
import defaultFrontmatterPlugin from "./src/lib/DefaultFrontmatterPlugin.js";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@styles": "src/styles",
      },
    },
  },
  markdown: {
    remarkPlugins: [
      [defaultFrontmatterPlugin, { layout: "@layouts/Layout.astro" }],
      blockIALPlugin,
    ],
  },
  publicDir: "src/pages",
  integrations: [mdx(), react(), redirect()],
});
