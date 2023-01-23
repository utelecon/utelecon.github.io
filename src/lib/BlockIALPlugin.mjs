/**
 * replaces Block Inline Attribute Lists from kramdown
 * @type {import('unified').Plugin<[], import('mdast').Root>}
 */
export default function blockIALPlugin() {
  /**
   * @typedef Attribute
   * @property {'#' | '.'} type
   * @property {string} ident
   */

  /**
   * @param {import('mdast').Content} node
   * @returns {{ type: '#' | '.'; ident: string }[] | undefined}
   */
  function findAttributes(node) {
    if (node.type !== "paragraph") return undefined;

    /**
     * @type {import('mdast').Text | undefined}
     */
    const text = node.children.find((c) => c.type === "text");
    const match = text?.value.trim().match(/^\{:\s*(?:([#\.][\w-]+)\s*)+\}$/);
    if (!match) return undefined;

    const [, ...attributes] = match;
    return attributes.map((a) => ({
      type: a[0],
      ident: a.slice(1),
    }));
  }

  /**
   *
   * @param {import('mdast').Content} node
   * @param {Attribute} attribute
   */
  function setAttribute(node, attribute) {
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

  return function (tree) {
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
