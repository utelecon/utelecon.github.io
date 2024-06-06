import type { AstroIntegration } from "astro";

import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname, relative } from "node:path";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeCollectAssets from "./CollectAssetsPlugin.js";
import stringify from "rehype-stringify";
import { read } from "to-vfile";

export default function CopyAssetIntegration(): AstroIntegration {
  const processor = unified()
    .use(parse)
    .use(rehypeCollectAssets)
    .use(stringify);
  return {
    name: "copy-asset",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        await Promise.all(
          routes.map(async ({ pathname, component }) => {
            if (!pathname) return;
            const path =
              pathname === "/404"
                ? join(fileURLToPath(dir), "404.html")
                : join(fileURLToPath(dir), pathname, "index.html");
            const source = await read(path);
            const processed = await processor.process(source);
            const assets = processed.data.assets;
            if (!assets) return;

            const assetPaths = assets.map((assetFile) =>
              assetFile.startsWith("/")
                ? decodeURI(assetFile)
                : decodeURI(
                    join(relative("src/pages", dirname(component)), assetFile),
                  ),
            );

            // copy from "src/pages/assetPath" to "dist/assetPath"
            // create directory if it doesn't exist
            assetPaths.map((assetPath) => {
              const sourcePath = join(process.cwd(), "src", "pages", assetPath);
              const destinationPath = join(fileURLToPath(dir), assetPath);
              if (!existsSync(sourcePath)) {
                if (!existsSync(`${sourcePath}.md`)) {
                  console.warn(
                    `Asset file ${sourcePath} not found: referenced in ${component}`,
                  );
                }
              } else {
                if (!existsSync(dirname(destinationPath))) {
                  mkdirSync(dirname(destinationPath), { recursive: true });
                }
                copyFileSync(sourcePath, destinationPath);
              }
            });
          }),
        );
      },
    },
  };
}
