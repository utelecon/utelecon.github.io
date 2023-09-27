// @ts-check

import { glob } from "glob";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { selectAll } from "hast-util-select";
import { read } from "to-vfile";
import { relative } from "path";
import { parseArgs } from "util";

/** @type {[string, ...string[]]} */
const ORIGINS = [
  "https://utelecon.adm.u-tokyo.ac.jp",
  "https://utelecon.github.io",
];
const TRAILINGS = ["/", "/index.html"];

const { positionals } = parseArgs({
  allowPositionals: true,
});
let target = positionals[0];
if (!target) {
  throw new Error("Usage: node src/lib/find-link.js <path>");
}
target = removeTrailing(target);
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
    if (removeTrailing(absoluteUrl.pathname) !== target) continue;

    const start = tag.position?.start;
    if (start) console.log(`${file.path}:${start.line}:${start.column}`);
    else console.log(file.path);
  }
}

/**
 * @param {string} path
 */
function removeTrailing(path) {
  for (const trailing of TRAILINGS) {
    if (path.endsWith(trailing)) return path.slice(0, -trailing.length);
  }
  return path;
}
