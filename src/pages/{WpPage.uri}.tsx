import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from "gatsby-plugin-wpgraphql-seo"
import { HomeLayout  } from '../layouts';

export default function WpPageTemplate({ data }) {
    const page = data.wpPage


    return (
        <HomeLayout>
            <Seo post={page} postSchema={page.seo.schema.raw} />
            <div className="relative mt-4 p-4">
                <h1 className="mb-2 text-center block text-2xl lg:text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {page.title}
                </h1>
                <div
            className="my-6 prose prose-lg mx-auto text-gray-500 dark:text-white"
            dangerouslySetInnerHTML={{ __html: page.content }}
          ></div>
            </div>
            
        </HomeLayout>
    )
}

export const query = graphql`
   query WpPageQuery($id: String) {
  wpPage(id: {eq: $id}) {
    nodeType
    content
    date
    modified
    slug
    uri
    title
    id
    databaseId
    seo {
      title
      metaDesc
      focuskw
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphTitle
      opengraphDescription
      opengraphImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 512
              height: 512
              layout: CONSTRAINED
              placeholder: NONE
              formats: [WEBP, AVIF]
            )
          }
        }
      }
      twitterTitle
      twitterDescription
      twitterImage {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 512
              height: 512
              layout: CONSTRAINED
              placeholder: NONE
              formats: [WEBP, AVIF]
            )
          }
        }
      }
      canonical
      cornerstone
      schema {
        articleType
        pageType
        raw
      }
    }
  }
}
`