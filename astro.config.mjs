import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import blockIALPlugin from "./src/lib/BlockIALPlugin.mjs";
import defaultFrontmatterPlugin from "./src/lib/DefaultFrontmatterPlugin.mjs";
import insertTocPlugin from "./src/lib/InsertTocPlugin.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultFrontmatterPlugin, { layout: "@layouts/Layout.astro" }],
      blockIALPlugin,
      insertTocPlugin,
    ],
  },
  integrations: [mdx(), react()],
});
