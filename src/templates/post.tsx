import * as React from "react";
import { graphql, Link } from "gatsby";
import { Wrapper } from "crockit-react/core";
import moment from 'moment'

const PostTemplate = ({ data: { mdx }, children }) => {
    const { body, excerpt, frontmatter, id } = mdx;
    const { title, publishDate } = frontmatter;
  return (
    <div className="py-10">
        <Wrapper className="mx-auto px-4 h-full max-w-5xl">
            <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-50">{title}</h1>
            <p className="my-4 text-gray-500 text-lg">Published on <time dateTime={publishDate}>{moment(publishDate, 'YYYYMMDD').format("MMMM DD, YYYY")}</time></p>
            <div className="prose dark:prose-invert prose-lg">
              {children}
            </div>
        </Wrapper>
    </div>
  );
};

export const query = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 120)
      frontmatter {
        title
        publishDate
      }
      id
      tableOfContents
    }
  }
`;

export const Head = ({ data }) => {
  const { body, excerpt, frontmatter, id } = data.mdx;
  const { title, publishDate } = frontmatter;

  return (
    <>
      <body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
      <title>{title} | Blog | Croc Studios</title>
    </>
  )
}

export default PostTemplate;
