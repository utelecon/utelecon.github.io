import type { VFile } from "vfile";
import type { Node } from "unist";
import { join, relative } from "path";
import type { MarkdownAstroData } from "@astrojs/markdown-remark";

interface Options {
  layout: string;
}

/**
 * https://github.com/withastro/astro/issues/397#issuecomment-1236231783
 */
export default function defaultFrontmatterPlugin({ layout }: Options) {
  return function (_: Node, file: VFile) {
    const astro = file.data.astro as MarkdownAstroData;
    const path = relative(join(file.cwd, "src", "pages"), file.path);
    astro.frontmatter.layout ??= layout;
    astro.frontmatter.lang ??= path.startsWith("en") ? "en" : "ja";
  };
}
