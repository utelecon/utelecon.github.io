import type { AstroIntegration, IntegrationResolvedRoute } from "astro";

import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, parse, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { selectAll } from "hast-util-select";
import rehypeParse from "rehype-parse";
import { read } from "to-vfile";
import { unified } from "unified";
import { getDistFilePath } from "./util";

const ORIGINS = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];

const assetPathsCache = new Set<string>();

export default function CopyAssetIntegration(): AstroIntegration {
  const parser = unified().use(rehypeParse);
  let routes: IntegrationResolvedRoute[] = [];

  return {
    name: "copy-asset",
    hooks: {
      "astro:routes:resolved": (params) => {
        routes = params.routes;
      },
      "astro:build:done": async ({ dir }) => {
        await Promise.all(
          routes.map(async ({ pathname, entrypoint }) => {
            if (!pathname || pathname.endsWith("/rss.xml")) return;
            const path = getDistFilePath(dir, pathname, entrypoint);
            const source = await read(path);
            const hast = parser.parse(source);

            const base = new URL(
              join(relative("src/pages", dirname(entrypoint)), sep),
              ORIGINS[0],
            );

            for (const tag of selectAll("a", hast)) {
              const href = tag.properties?.href;
              if (typeof href !== "string") continue;
              const absoluteUrl = new URL(href, base);

              if (!ORIGINS.includes(absoluteUrl.origin)) continue;
              const assetPath = decodeURI(absoluteUrl.pathname);
              if (parse(assetPath).ext) {
                assetPathsCache.add(assetPath);
              }
            }
          }),
        );

        await Promise.all(
          Array.from(assetPathsCache, async (assetPath) => {
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
