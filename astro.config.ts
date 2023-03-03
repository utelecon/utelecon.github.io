import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import blockIALPlugin from "./src/lib/BlockIALPlugin.js";
import defaultFrontmatterPlugin from "./src/lib/DefaultFrontmatterPlugin.js";
import insertTocPlugin from "./src/lib/InsertTocPlugin.js";

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
      insertTocPlugin,
    ],
  },
  publicDir: "src/pages",
  integrations: [mdx(), react()],
});
