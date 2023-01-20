import * as React from "react";
import { graphql, PageProps } from "gatsby";

export default function MarkdownPage({
  data: { markdownRemark },
  children,
}: PageProps<{ markdownRemark: Queries.MarkdownRemark }>) {
  return (
    <div>
      <h1>{markdownRemark.frontmatter?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html || "" }} />
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`;
