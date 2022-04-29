import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Prism from "prismjs"
import Seo from "gatsby-plugin-wpgraphql-seo"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import config from "../../gatsby-config"
import moment from "moment"
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { HomeLayout } from "../layouts/"

export default function BlogPostTemplate({ data, pageContext }) {
  const post = data.wpPost

  let disqusConfig = {
    url: post.uri,
    identifier: post.databaseId.toString(),
    title: post.title,
  }

  const image = post.featuredImage
    ? getImage(post.featuredImage.node.localFile)
    : null

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <HomeLayout>
    <article>
      {image ? <GatsbyImage image={image} alt={post.title} /> : null}
      <Seo post={post} postSchema={post.seo.schema.raw} />
      <div className="relative mt-4 p-4">
          <div className="text-lg text-left max-w-prose">
            {post.categories.nodes.length > 1 ? (
              <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                {post.categories.nodes[1].name}
              </span>
            ) : null}
            <h1 className="mb-2 block text-2xl lg:text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <div className="text-xs md:text-lg flex flex-row flex-nowrap">
              <span>
                <span className="font-semibold text-gray-500">Written by</span>
                {` `}
                <span className="text-primary font-bold">
                  {post.author.node.name}
                </span>
              </span>
              <DotsVerticalIcon className="mx-2 w-3" />
              <span>
                <span className="font-semibold text-gray-500">
                  Published on
                </span>
                {` `}
                <time dateTime={post.date} className="text-primary font-bold">
                  {moment(post.date).format("MMMM DD, YYYY")}
                </time>
              </span>
              <DotsVerticalIcon className="mx-2 w-3" />
              <span className="font-semibold text-primary">
                <CommentCount config={disqusConfig} placeholder={"..."} />
              </span>
            </div>
          </div>
          <div
            className="mt-6 prose prose-primary prose-lg text-gray-500 dark:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div className="block px-2 lg:px-0 lg:mx-auto mt-16 w-full lg:w-1/2">
            <Disqus config={disqusConfig} />
          </div>
      </div>
    </article>
    </HomeLayout>
  )
}

export const query = graphql`
  query BlogPostQuery($databaseId: Int!) {
    wpPost(databaseId: { eq: $databaseId }) {
      nodeType
      content
      excerpt
      date
      modified
      slug
      uri
      title
      id
      databaseId
      featuredImage {
        node {
          ...FeaturedImageFragment
        }
      }
      author {
        node {
          ...AuthorMeta
        }
      }
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
      categories {
        nodes {
          slug
          name
          description
          id
        }
      }
      tags {
        nodes {
          slug
          name
          description
          id
        }
      }
    }
  }
`
