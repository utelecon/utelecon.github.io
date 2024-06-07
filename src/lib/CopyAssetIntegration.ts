import type { AstroIntegration } from "astro";

import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { selectAll } from "hast-util-select";
import parse from "rehype-parse";
import { read } from "to-vfile";
import { unified } from "unified";

export default function CopyAssetIntegration(): AstroIntegration {
  const parser = unified().use(parse);

  return {
    name: "copy-asset",
    hooks: {
      "astro:build:done": async ({ dir, routes }) => {
        let collectedPaths: string[] = [];

        await Promise.all(
          routes.map(async ({ pathname, component }) => {
            if (!pathname) return;
            const path =
              pathname === "/404"
                ? join(fileURLToPath(dir), "404.html")
                : join(fileURLToPath(dir), pathname, "index.html");

            const source = await read(path);
            const hast = parser.parse(source);
            const ASSETS_PATTERN =
              /^(?!http|javascript:|mailto:|tel:).*\.(?!html|png|jpg|jpeg)[a-zA-Z0-9]+$/;
            const assets: string[] = [];

            for (const node of selectAll("a", hast)) {
              const href = node.properties?.href?.toString();
              if (href && ASSETS_PATTERN.test(href)) {
                assets.push(href);
              }
            }

            const paths = assets.map((assetFile) =>
              decodeURI(
                resolve(
                  "/",
                  relative("src/pages", dirname(component)),
                  assetFile,
                ),
              ),
            );

            collectedPaths = collectedPaths.concat(paths);
          }),
        );

        const assetPaths = [...new Set(collectedPaths)];

        await Promise.all(
          assetPaths.map(async (assetPath) => {
            const srcPath = resolve(join("src/pages", assetPath));
            const destPath = join(fileURLToPath(dir), assetPath);
            if (!existsSync(srcPath)) {
              if (!existsSync(`${srcPath}.md`)) {
                console.warn(`Asset file ${srcPath} not found`);
              }
              return;
            }
            if (!existsSync(dirname(destPath))) {
              await mkdir(dirname(destPath), { recursive: true });
            }
            await copyFile(srcPath, destPath);
          }),
        );
      },
    },
  };
}
