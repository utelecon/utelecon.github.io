import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import remarkAttributeList from "remark-attribute-list";
import redirect from "./src/lib/RedirectIntegration.js";
import defaultFrontmatterPlugin from "./src/lib/DefaultFrontmatterPlugin.js";
import dotSlashPlugin from "./src/lib/DotSlashPlugin.js";
import simpleAttentionPlugin from "./src/lib/SimpleAttentionPlugin.js";
import { cleanup } from "./src/lib/CleanupIntegration.js";
import collectHtmlImages from "./src/lib/CollectHtmlImagesPlugin.js";
import copyAsset from "./src/lib/CopyAssetIntegration.js";
import assetFileNames from "./src/lib/AssetFileNames.js";
import ignoreAssets from "./src/lib/ignoreassets";
import rehypeRaw from "rehype-raw";
import remarkImageClasslist from "./src/lib/remark-image-classlist.js";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()],
    resolve: {
      alias: {
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
    server: {
      watch: { usePolling: Boolean(process.env.USE_POLLING) },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames,
        },
      },
    },
  },
  build: {
    format: "directory",
  },
  markdown: {
    remarkPlugins: [
      dotSlashPlugin,
      [defaultFrontmatterPlugin, { layout: "@layouts/Layout.astro" }],
      simpleAttentionPlugin,
      [
        remarkAttributeList,
        {
          allowNoSpaceBeforeName: true,
          allowUnderscoreInId: true,
          allowNoPosition: true,
        },
      ],
      remarkImageClasslist,
    ],
    remarkRehype: {
      footnoteLabelProperties: { className: ["visually-hidden"] },
      footnoteLabelTagName: "b",
    },
    rehypePlugins: [rehypeRaw, collectHtmlImages],
    shikiConfig: {
      theme: "min-light",
    },
  },
  scopedStyleStrategy: "where",
  integrations: [
    mdx({ rehypePlugins: [] }),
    react(),
    redirect(),
    cleanup(),
    copyAsset(),
    partytown({
      config: {
        forward: ["dataLayer.push", "clarity"],
      },
    }),
    ignoreAssets([
      ".avif",
      ".docx",
      ".gif",
      ".jpg",
      ".jpeg",
      ".mp4",
      ".png",
      ".pdf",
      ".pptx",
      ".svg",
      ".txt",
      ".webp",
      ".xlsx",
      ".JPG",
      ".PNG",
      ".bat",
      ".sh",
    ]),
  ],
  site: "https://utelecon.adm.u-tokyo.ac.jp",
});
