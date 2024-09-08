// @ts-check

import { glob } from "glob";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { selectAll } from "hast-util-select";
import { read } from "to-vfile";
import { join, parse, relative } from "path";
import { existsSync } from "fs";

/** @type {[string, ...string[]]} */
const ORIGINS = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];

/** @type {Set<string>} */
const existsCache = new Set();

/**
 * @param {URL} param0
 */
function exists({ pathname }) {
  pathname = decodeURIComponent(pathname);
  if (existsCache.has(pathname)) return true;
  const pathsToCheck = parse(pathname).ext
    ? [join("dist", pathname), join("dist", pathname + ".html")]
    : pathname.endsWith("/")
    ? [join("dist", pathname, "index.html")]
    : [join("dist", pathname + ".html"), join("dist", pathname, "index.html")];
  if (pathsToCheck.some(existsSync)) {
    existsCache.add(pathname);
    return true;
  } else {
    return false;
  }
}

const parser = unified().use(rehypeParse);

const paths = await glob("dist/**/*.html");
await Promise.all(paths.map((path) => read(path).then((file) => find(file))));

/**
 * @param {import("vfile").VFile} file
 */
async function find(file) {
  const hast = parser.parse(file);
  const base = new URL(relative("dist", file.path), ORIGINS[0]);
  for (const tag of selectAll("a", hast)) {
    const href = tag.properties?.href;
    if (typeof href !== "string") continue;

    const absoluteUrl = new URL(href, base);
    if (!ORIGINS.includes(absoluteUrl.origin)) continue;
    if (exists(absoluteUrl)) continue;
    if (
      tag.children.length === 1 &&
      tag.children[0].type === "text" &&
      tag.children[0].value === "English"
    )
      continue;

    const start = tag.position?.start;
    if (start)
      console.log(
        `${file.path}:${start.line}:${start.column} -> ${absoluteUrl.pathname}`
      );
    else console.log(file.path);
  }
}
