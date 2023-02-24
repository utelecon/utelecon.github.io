import type { Plugin } from "unified";
import type { Node } from "unist";
import type { Root, Content, Text } from "mdast";

interface Attribute {
  type: "#" | ".";
  ident: string;
}

interface MdastData {
  id?: string;
  hProperties?: HProperties;
}

interface HProperties {
  id?: string;
  className?: string[];
}

export default function blockIALPlugin() {
  function findAttributes(node: Content): Attribute[] | undefined {
    if (node.type !== "paragraph") return undefined;

    const text = node.children.find((c): c is Text => c.type === "text");
    const match = text?.value.trim().match(/^\{:\s*(?:([#\.][\w-]+)\s*)+\}$/);
    if (!match) return undefined;

    const [, ...attributes] = match;
    return attributes
      .map((a) => ({ type: a[0], ident: a.slice(1) }))
      .filter((a): a is Attribute => ["#", "."].includes(a.type));
  }

  function setAttribute(node: Content & Node<MdastData>, attribute: Attribute) {
    const { type, ident } = attribute;

    node.data ??= {};
    node.data.hProperties ??= {};
    node.data.hProperties.className ??= [];
    switch (type) {
      case "#": {
        node.data.id = ident;
        node.data.hProperties.id = ident;
        return;
      }
      case ".": {
        node.data.hProperties.className.push(ident);
        return;
      }
    }
  }

  return function (tree: Root) {
    let i = 1;
    while (i < tree.children.length) {
      const attributes = findAttributes(tree.children[i]);
      if (!attributes) {
        i++;
        continue;
      }

      for (const attribute of attributes) {
        setAttribute(tree.children[i - 1], attribute);
      }

      tree.children.splice(i, 1);
      // no need to i++ because we removed the current node
    }
  };
}
