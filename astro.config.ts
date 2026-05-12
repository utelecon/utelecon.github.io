import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import remarkAttributeList from "remark-attribute-list";
import assetColocation from "./integrations/asset-colocation/index.js";
import ignoreAssets from "./integrations/ignore-assets/index.js";
import redirect from "./integrations/redirect.js";
import remarkImageClasslist from "./integrations/remark-image-classlist.js";
import remarkDefaultFrontmatter from "./integrations/remark-default-frontmatter.js";
import remarkCjkFriendly from "remark-cjk-friendly";
import remarkCjkFriendlyGfmStrikethrough from "remark-cjk-friendly-gfm-strikethrough";

const ASSET_EXTENSIONS = [
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
];

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
  },
  build: {
    format: "directory",
  },
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [
      [remarkDefaultFrontmatter, { layout: "@layouts/Layout.astro" }],
      [
        remarkAttributeList,
        {
          allowNoSpaceBeforeName: true,
          allowUnderscoreInId: true,
          allowNoPosition: true,
        },
      ],
      remarkImageClasslist,
      remarkCjkFriendly,
      remarkCjkFriendlyGfmStrikethrough,
    ],
    remarkRehype: {
      footnoteLabelProperties: { className: ["visually-hidden"] },
      footnoteLabelTagName: "b",
    },
    shikiConfig: {
      theme: "min-light",
    },
  },
  scopedStyleStrategy: "where",
  integrations: [
    mdx(),
    react(),
    redirect(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    ignoreAssets(ASSET_EXTENSIONS),
    assetColocation(ASSET_EXTENSIONS),
  ],
  site: "https://utelecon.adm.u-tokyo.ac.jp",
});
