// @ts-check
import { read, write } from "to-vfile";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRemoveComments from "rehype-remove-comments";
import rehypeRemoveEmptyAttribute from "rehype-remove-empty-attribute";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";
import { select, matches } from "hast-util-select";
import { remove } from "unist-util-remove";
import { visit } from "unist-util-visit";
import { glob } from "glob";
import { format } from "prettier";

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 */

const processor = unified()
  .use(rehypeParse)
  .use(rehypePrediff)
  .use(rehypeRemoveComments)
  .use(rehypeRemoveEmptyAttribute)
  .use(rehypeMinifyWhitespace)
  .use(rehypeStringify);

const paths = await glob("dist-*/**/*.html");
await Promise.all(
  paths.map(async (path) => {
    const input = await read(path);
    const output = await processor.process(input);
    output.value = await format(output.value.toString(), {
      parser: "html",
      printWidth: 65535,
    });
    output.value = normalize(output.value);
    await write(output);
  })
);

/**
 * @type {import('unified').Plugin<[], Root, Element>}
 */
function rehypePrediff() {
  return (tree) => {
    let main = select("main", tree);
    if (!main) return;

    visit(main, "element", (node) => {
      const className = node.properties?.className;
      if (Array.isArray(className)) {
        const index = className.findIndex(
          (name) => typeof name === "string" && name.startsWith("astro-")
        );
        if (index >= 0) className.splice(index, 1);
      }
    });
    remove(
      main,
      (node, _, parent) => matches("dif,p", parent) && isEmptyText(node)
    );

    return main;
  };
}

/**
 * @param {ElementContent} node
 */
function isEmptyText(node) {
  return node.type === "text" && node.value.trim() === "";
}

/**
 * @param {string | Buffer} value
 * @returns {string}
 */
function normalize(value) {
  return value.toString().normalize().replace(/“|”/g, '"');
}
