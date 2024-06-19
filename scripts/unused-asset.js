// @ts-check

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { extname, parse, relative, join } from "node:path";
import { glob } from "glob";
import { selectAll } from "hast-util-select";
import rehypeParse from "rehype-parse";
import { read } from "to-vfile";
import { unified } from "unified";

/** @type {[string, ...string[]]} */
const ORIGINS = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];

/** @type {string[]} */
const DOCUMENT_EXTS = [".md", ".markdown", ".mdx", ".astro", ".html"];

/** @type {string[]} */
const IMAGE_EXTS = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
].flatMap((ext) => [ext, ext.toUpperCase()]);

/** @type {Set<string>} */
const assets = new Set();

/** @type {Set<string>} */
const usedAssets = new Set();

const parser = unified().use(rehypeParse);

const [dists, srcs, optimizedImgs] = await Promise.all([
  glob("dist/**/*.html"),
  // Files whose extension is not in DOCUMENT_EXTS and not starting with "_"
  // e.g. `src/pages/en/meet/img/meet.png`
  glob("src/pages/**/!(_)*", {
    ignore: `src/pages/**/*{${DOCUMENT_EXTS.join(",")}}`,
    nodir: true,
  }),

  // Images that are optimized by Astro
  // e.g. `(hash).foo.webp`
  glob(`**/*{${IMAGE_EXTS.join(",")}}`, {
    cwd: "dist/_astro",
    nodir: true,
  }),
]);

await Promise.all([
  ...dists.map((dist) => read(dist).then((file) => searchDist(file))),
  ...srcs.map(async (src) => searchSrc(src)),
]);

const diff = new Set([...assets].filter((asset) => !usedAssets.has(asset)));
console.log(`${diff.size} unused assets found:\n`);
for (const asset of diff) {
  console.log(join("src/pages", asset));
}

/**
 * @param {import("vfile").VFile} file
 * @returns {Promise<void>}
 */
async function searchDist(file) {
  const hast = parser.parse(file);
  const base = new URL(relative("dist", file.path), ORIGINS[0]);
  for (const tag of selectAll("a", hast)) {
    const href = tag.properties?.href;
    if (typeof href !== "string") continue;

    const absoluteUrl = new URL(href, base);
    if (!ORIGINS.includes(absoluteUrl.origin)) continue;
    const assetPath = decodeURI(absoluteUrl.pathname);
    if (parse(assetPath).ext === ".html") continue;
    if (parse(assetPath).ext) {
      usedAssets.add(assetPath);
    }
  }
}

/**
 * @param {string} src
 * @returns {Promise<void>}
 */
async function searchSrc(src) {
  const assetPath = decodeURI(
    new URL(relative("src/pages", src), ORIGINS[0]).pathname,
  );

  // If an image is optimized by Astro, it's not copied to `dist` so we need to
  // check it and add it to `usedAssets` here.
  if (IMAGE_EXTS.includes(extname(src)) && (await isImgOptimized(src))) {
    usedAssets.add(assetPath);
  }
  assets.add(assetPath);
}

/**
 * @param {string} src
 * @returns {Promise<boolean>}
 */
async function isImgOptimized(src) {
  const buffer = await readFile(src);
  const sum = await getHash(buffer);
  return optimizedImgs.some((optimizedImg) => optimizedImg.startsWith(sum));
}

/**
 * @param {import("node:crypto").BinaryLike} buffer
 * @returns {Promise<string>}
 */
async function getHash(buffer) {
  return new Promise((resolve) => {
    resolve(createHash("sha1").update(buffer).digest("base64url").slice(0, 8));
  });
}
