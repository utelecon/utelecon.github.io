import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import redirect from "./src/lib/RedirectIntegration.js";
import blockIALPlugin from "./src/lib/BlockIALPlugin.js";
import defaultFrontmatterPlugin from "./src/lib/DefaultFrontmatterPlugin.js";
import simpleAttentionPlugin from "./src/lib/SimpleAttentionPlugin.js";
import externalLinks from "./src/lib/ExternalLinksIntegration.js";
import trailingSlash from "./src/lib/TrailingSlashIntegration.js";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
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
      simpleAttentionPlugin,
    ],
  },
  publicDir: "src/pages",
  integrations: [
    mdx(),
    react(),
    redirect(),
    externalLinks({ target: "_blank", rel: ["noopener", "noreferrer"] }),
    trailingSlash(),
  ],
  site: "https://utelecon.adm.u-tokyo.ac.jp",
});
