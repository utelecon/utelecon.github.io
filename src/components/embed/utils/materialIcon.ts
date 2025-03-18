import type { Element, Root } from "hast";
import { createRequire } from "node:module";
import { join } from "node:path/posix";
import * as React from "react";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { read } from "to-vfile";
import * as unified from "unified";
import type { Node } from "unist";
import { visit, type BuildVisitor } from "unist-util-visit";

export type Style = "filled" | "outlined" | "round" | "sharp" | "two-tone";

export type ReactSVGAttributes = Omit<
  React.SVGAttributes<never>,
  "style" | "suppressHydrationWarning" | keyof React.DOMAttributes<any>
>;

type SVGAttributes = ReactSVGAttributes &
  Partial<{
    class: string;
  }>;

const MATERIAL_ICONS_PACKAGE = "@material-design-icons/svg";

const require = createRequire(import.meta.url);

async function resolve(spec: string): Promise<string> {
  return require.resolve(spec);
}

type SVGElement = Element & { tagName: "svg"; properties: SVGAttributes };

function isSVGElement(n: Node): n is SVGElement {
  return n.type === "element" && "tagName" in n && n.tagName === "svg";
}

type ProcessSVGOptions = {
  processor: BuildVisitor<Node, typeof isSVGElement>;
};

const processSVG: unified.Plugin<[ProcessSVGOptions, ...unknown[]], Root> =
  ({ processor }, ..._: unknown[]) =>
  (tree, _) =>
    visit(tree, isSVGElement, processor);

export async function load({
  name,
  style,
  props = {},
}: {
  name: string;
  style: Style;
  props?: ReactSVGAttributes;
}): Promise<string> {
  const bare = join(MATERIAL_ICONS_PACKAGE, style, `${name}.svg`);

  const processor = unified
    .unified()
    .use(rehypeParse, { fragment: true })
    .use(processSVG, {
      processor: (e) => {
        e.properties = { ...e.properties, ...props };
      },
    })
    .use(rehypeStringify);

  return await resolve(bare)
    .then(read)
    .then((file) => processor.process(file))
    .then(({ value }) => value.toString());
}
