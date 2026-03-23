import type { AstroIntegration } from "astro";
import type { Root as MdastRoot } from "mdast";
import type { Root as HastRoot } from "hast";
import type { VFile } from "vfile";
import { selectAll } from "hast-util-select";
import { visit as unistVisit } from "unist-util-visit";
import { visit as estreeVisit } from "estree-util-visit";
import rehypeRaw from "rehype-raw";
import "mdast-util-mdx";
import path from "node:path";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

/** @type {[string, ...string[]]} */
const ORIGINS = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];

/**
 * 画像などのアセットを src/pages 配下のページ自体と同居させるための処理を行う一連の機能群．
 * 詳しくは {@link ./README.md} を参照．
 */
export default function assetColocation(
  extensions: string[],
): AstroIntegration {
  const usedImages = new Set<string>();
  const referredPaths = new Set<string>();

  return {
    name: "asset-colocation",
    hooks: {
      "astro:config:setup"({ updateConfig }) {
        updateConfig({
          markdown: {
            remarkPlugins: [
              [collectImagePaths, { usedImages }],
              [collectReferredPaths, { referredPaths }],
            ],
            rehypePlugins: [
              rehypeRaw,
              [rehypeCollectImagePaths, { usedImages }],
              [rehypeCollectReferredPaths, { referredPaths }],
            ],
          },
        });
      },
      async "astro:build:done"() {
        const files = await glob("**/!(_)*", {
          cwd: "src/pages",
          ignore: ["**/*.{md,markdown,mdx,html,astro}"],
          nodir: true,
          absolute: false,
        });
        const assets = new Set(
          files
            .filter((file) => extensions.includes(path.extname(file)))
            .map((file) => "/" + file),
        );
        for (const asset of assets) {
          if (!usedImages.has(asset) && !referredPaths.has(asset)) {
            console.warn(
              `[asset-colocation] Warning: Asset "${asset}" is not used in any page and will be ignored.`,
            );
          }
        }

        const copyFiles: { from: string; to: string }[] = [];
        for (const referredPath of referredPaths) {
          if (!extensions.includes(path.extname(referredPath))) continue;
          if (assets.has(referredPath)) {
            const from = path.resolve("src/pages", "." + referredPath);
            const to = path.resolve("dist", "." + referredPath);
            copyFiles.push({ from, to });
          } else {
            if (existsSync(`src/pages${referredPath}.md`)) continue; // redirect file
            console.warn(
              `[asset-colocation] Warning: Referred asset "${referredPath}" does not exist in src/pages.`,
            );
          }
        }

        await Promise.all(
          copyFiles.map(async ({ from, to }) => {
            await mkdir(path.dirname(to), { recursive: true });
            await copyFile(from, to);
          }),
        );
      },
    },
  };
}

const ALLOWED_PREFIXES = ["http:", "https:", "/", "./", "../", "@"];

function createFixAndCollect(usedImages: Set<string>, file: VFile) {
  const imagePaths = new Set(file.data.astro!.localImagePaths);
  const basePath = "/" + path.dirname(path.relative("src/pages", file.path));
  function fixAndCollect(p: string) {
    if (!ALLOWED_PREFIXES.some((prefix) => p.startsWith(prefix))) {
      p = `./${p}`;
    }
    if (p.startsWith(".")) imagePaths.add(p);
    const resolvedPath = path.resolve(basePath, p);
    usedImages.add(resolvedPath);
    return p;
  }
  return Object.assign(fixAndCollect, {
    [Symbol.dispose]() {
      file.data.astro!.localImagePaths = Array.from(imagePaths);
    },
  });
}

function collectImagePaths({ usedImages }: { usedImages: Set<string> }) {
  return (root: MdastRoot, file: VFile) => {
    using fixAndCollect = createFixAndCollect(usedImages, file);

    // For MDX (remark-images-to-components)
    unistVisit(root, "mdxjsEsm", (node) => {
      if (!node.data?.estree) return;

      estreeVisit(node.data.estree, (node) => {
        if (node.type !== "ImportDeclaration") return;
        if (node.specifiers[0]?.type !== "ImportDefaultSpecifier") return;

        if (typeof node.source.value !== "string") return;
        node.source.value = fixAndCollect(node.source.value);
      });
    });

    // For md
    unistVisit(root, "image", (node) => {
      node.url = fixAndCollect(node.url);
    });
  };
}

function rehypeCollectImagePaths({ usedImages }: { usedImages: Set<string> }) {
  return (root: HastRoot, file: VFile) => {
    using fixAndCollect = createFixAndCollect(usedImages, file);

    selectAll("img", root).forEach((img) => {
      if (typeof img.properties.src !== "string") return;
      img.properties.src = fixAndCollect(img.properties.src);
    });
  };
}

function createCollectReferredPaths(referredPaths: Set<string>, file: VFile) {
  const baseUrl = new URL(path.relative("src/pages", file.path), ORIGINS[0]);
  if (path.parse(file.path).name !== "index") baseUrl.pathname += "/";
  return function collect(p: string) {
    const url = new URL(p, baseUrl);
    if (!ORIGINS.includes(url.origin)) return;
    referredPaths.add(fileURLToPath(new URL(url.pathname, "file:///")));
  };
}

function collectReferredPaths({
  referredPaths,
}: {
  referredPaths: Set<string>;
}) {
  return (root: MdastRoot, file: VFile) => {
    const collect = createCollectReferredPaths(referredPaths, file);

    unistVisit(root, "mdxJsxFlowElement", (node) => {
      if (node.data?.hName !== "a") return;
      if (typeof node.data.hProperties?.href !== "string") return;
      collect(node.data.hProperties.href);
    });

    unistVisit(root, "mdxJsxTextElement", (node) => {
      if (node.data?.hName !== "a") return;
      if (typeof node.data.hProperties?.href !== "string") return;
      collect(node.data.hProperties.href);
    });

    unistVisit(root, "link", (node) => {
      collect(node.url);
    });
  };
}

function rehypeCollectReferredPaths({
  referredPaths,
}: {
  referredPaths: Set<string>;
}) {
  return (root: HastRoot, file: VFile) => {
    const collect = createCollectReferredPaths(referredPaths, file);

    selectAll("a", root).forEach((a) => {
      if (typeof a.properties.href !== "string") return;
      collect(a.properties.href);
    });
  };
}
