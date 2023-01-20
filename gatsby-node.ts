import type { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx" || node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "./content" });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
