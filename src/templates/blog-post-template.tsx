import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Prism from "prismjs"
import Seo from "gatsby-plugin-wpgraphql-seo"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import config from "../../gatsby-config"
import moment from "moment"
import { DotsVerticalIcon } from '@heroicons/react/solid'

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
    <article>
      {image ? <GatsbyImage image={image} alt={post.title} /> : null}
      <Seo post={post} />
      <div className="relative mt-8 md:container mx-auto overflow-hidden p-2 md:p-16 shadow-lg rounded-lg bg-[rgba(255, 255, 255, 0.3)] dark:bg-gray-800">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto dark:hidden"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            {post.categories.nodes.length > 1 ? (
              <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                {post.categories.nodes[1].name}
              </span>
            ) : null}
            <h1 className="my-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="text-xs md:text-lg flex flex-row flex-nowrap justify-center items-center text-center">
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
            className="mt-6 prose prose-primary prose-lg text-gray-500 dark:text-white mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div className="block px-2 lg:px-0 lg:mx-auto mt-16 w-full lg:w-1/2">
            <Disqus config={disqusConfig} />
          </div>
        </div>
      </div>
    </article>
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
