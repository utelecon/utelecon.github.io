// Prepends "./" to image paths so that it can be imported as a relative path.

import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import { z } from "zod";

const ALLOWED_PREFIXES = ["http:", "https:", "/", "./", "../"];

const nodeSchema = z.object({
  type: z.literal("mdxjsEsm"),
  value: z.literal(""),
  data: z.object({
    estree: z.object({
      type: z.literal("Program"),
      sourceType: z.literal("module"),
      body: z.array(
        z.object({
          type: z.literal("ImportDeclaration"),
          source: z.object({ type: z.literal("Literal"), value: z.string(), raw: z.string() }),
          specifiers: z.array(z.object({
            type: z.literal("ImportDefaultSpecifier"),
            local: z.object({ type: z.literal("Identifier"), name: z.string() })
          }))
        })
      )
    })
  })
});

export default function dotSlashPlugin() {
  return (root: Root) => {
    // For MDX (remark-images-components)
    const importStatements = root
      .children
      .flatMap(child => {
        const parseResult = nodeSchema.safeParse(child);
        if (!parseResult.success) return [];

        const imageImport = child as unknown as typeof parseResult.data;
        return imageImport.data.estree.body;
      });
    importStatements.forEach(node => {
      const { value, raw } = node.source;
      if (!ALLOWED_PREFIXES.some((prefix) => value.startsWith(prefix))) {
        node.source.value = `./${value}`;
        node.source.raw = JSON.stringify(`./${JSON.parse(raw)}`);
      }
    });

    // For md
    visit(root, "image", (node) => {
      if (!ALLOWED_PREFIXES.some((prefix) => node.url.startsWith(prefix))) {
        node.url = `./${node.url}`;
      }
    })
  };
}
