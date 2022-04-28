import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/Seo"
import Pagination from "../components/Pagination"
import { HomeLayout } from "../layouts/"

const BlogList = ({ data, pageContext }) => {
  const posts = data.allWpPost.edges.map((edge) => edge.node)

  return (
    <HomeLayout>
      <Seo title={`Blog`} />
      <div className="p-4">
        <h1 className="text-black dark:text-white font-black text-4xl md:text-6xl mb-8">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.length
            ? posts.map((post) => (
                <div
                  key={post.id}
                  className="relative bg-white dark:bg-gray-800 rounded shadow p-4 h-auto min-h-[300px]"
                >
                  <h3 className="font-heading text-2xl mb-2">{post.title}</h3>
                  <p
                    className="font-body leading-8"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></p>
                  <Link
                    to={post.uri}
                    className="bg-primary-light hover:bg-primary text-white py-2 px-3 text-lg font-semibold uppercase rounded-sm mt-4 absolute bottom-4"
                  >
                    Read More
                  </Link>
                </div>
              ))
            : null}
        </div>
        <Pagination {...pageContext} />
      </div>
    </HomeLayout>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          slug
          uri
          date
          excerpt
          author {
            node {
              name
            }
          }
        }
      }
    }

    wp {
      seo {
        contentTypes {
          post {
            schema {
              raw
            }
          }
        }
      }
    }
  }
`

export default BlogList
