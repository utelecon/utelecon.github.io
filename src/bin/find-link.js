// @ts-check

import { glob } from "glob";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { selectAll } from "hast-util-select";
import { read } from "to-vfile";
import { dirname, resolve } from "path";

const arg = process.argv[2];
if (!arg) {
  throw new Error("Usage: node src/lib/find-link.js <path>");
}
const target = resolve("dist", arg.slice(1));
console.log(target);
const parser = unified().use(rehypeParse);

const paths = await glob("dist/**/*.html");
await Promise.all(paths.map((path) => read(path).then((file) => find(file))));

/**
 * @param {import("vfile").VFile} file
 */
async function find(file) {
  const hast = parser.parse(file);
  for (const tag of selectAll("a", hast)) {
    const href = tag.properties?.href;
    if (typeof href !== "string") continue;

    /** @type {string} */
    let path;
    if (
      href.startsWith("https://utelecon.adm.u-tokyo.ac.jp") ||
      href.startsWith("https://utelecon.github.io")
    ) {
      const url = new URL(href);
      path = resolve("dist", url.pathname.slice(1));
    } else if (href.startsWith("/")) {
      path = resolve("dist", href.slice(1));
    } else if (href.startsWith(".")) {
      path = resolve(dirname(file.path), href);
    } else continue;
    if (path !== target) continue;

    const start = tag.position?.start;
    if (start) console.log(`${file.path}:${start.line}:${start.column}`);
    else console.log(file.path);
  }
}
