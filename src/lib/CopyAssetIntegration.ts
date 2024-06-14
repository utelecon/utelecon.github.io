import type { AstroIntegration } from "astro";

import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, parse, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { selectAll } from "hast-util-select";
import rehypeParse from "rehype-parse";
import { read } from "to-vfile";
import { unified } from "unified";

const ORIGINS = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];

const assetPathsCache = new Set<string>();

export default function CopyAssetIntegration(): AstroIntegration {
  const parser = unified().use(rehypeParse);

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
            const hast = parser.parse(source);

            for (const tag of selectAll("a", hast)) {
              const base = new URL(
                relative("src/pages", dirname(component)),
                ORIGINS[0],
              );
              const href = tag.properties?.href;
              if (typeof href !== "string") continue;
              const absoluteUrl = new URL(
                URL.canParse(href)
                  ? href
                  : resolve(
                      "/",
                      relative("src/pages", dirname(component)),
                      href,
                    ),
                base,
              );

              if (!ORIGINS.includes(absoluteUrl.origin)) continue;
              const assetPath = decodeURI(absoluteUrl.pathname);
              if (parse(assetPath).ext) {
                assetPathsCache.add(assetPath);
              }
            }
          }),
        );

        const assetPaths = [...assetPathsCache];

        await Promise.all(
          assetPaths.map(async (assetPath) => {
            const srcPath = resolve(join("src/pages", assetPath));
            const destPath = join(fileURLToPath(dir), assetPath);
            const srcPattern = [`${srcPath}.md`];
            const destPattern = [
              destPath,
              join(dirname(destPath), parse(destPath).name, "index.html"),
            ];
            if (!existsSync(srcPath)) {
              if (
                !srcPattern.some(existsSync) &&
                !destPattern.some(existsSync)
              ) {
                console.warn(`Asset file ${srcPath} not found.`);
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
