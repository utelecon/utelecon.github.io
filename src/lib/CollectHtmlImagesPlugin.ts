import type { Root as HastRoot } from "hast";
import { selectAll } from "hast-util-select";
import type { Root as MdastRoot } from "mdast";
import { visit } from "unist-util-visit";
import parse from "rehype-parse";
import type { MarkdownVFile } from "@astrojs/markdown-remark";
import type { VFile } from "vfile";
import { unified } from "unified";

const ALLOWED_PREFIXES = ["/", "./", "../", "@"];

export default function collectHtmlImages() {
  const parser = unified().use(parse);

  return (node: MdastRoot, file: VFile) => {
    const imagePaths = ((file as MarkdownVFile).data.imagePaths ??= new Set());
    visit(node, "html", (html) => {
      selectAll("img", parser.parse(html.value)).forEach((img) => {
        if (typeof img.properties?.src !== "string") return;

        const src = img.properties.src;
        if (!ALLOWED_PREFIXES.some((prefix) => src.startsWith(prefix))) {
          img.properties.src = `./${src}`;
        }
        imagePaths.add(img.properties.src);
      });
    });
  };
}
