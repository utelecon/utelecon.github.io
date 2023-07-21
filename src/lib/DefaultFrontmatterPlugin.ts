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
export default function defaultFrontmatterPlugin() {
  return function (_: Node, file: VFile) {
    const astro = file.data.astro as MarkdownAstroData;
    if (astro.frontmatter.redirect_to) {
      astro.frontmatter.layout = "@layouts/Redirect.astro";
      return;
    }
    const path = relative(join(file.cwd, "src", "pages"), file.path);
    astro.frontmatter.layout ??= "@layouts/Layout.astro";
    astro.frontmatter.lang ??= path.startsWith("en") ? "en" : "ja";
  };
}
