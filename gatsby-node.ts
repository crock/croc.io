import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({ actions }) => {
    actions.setBabelPlugin({
        name: "babel-plugin-prismjs",
        options: {
            languages: [
                "javascript",
                "css",
                "html",
                "python",
                "yaml",
                "bash",
                "jsx",
                "php",
                "tsx",
                "typescript",
            ],
            plugins: ["show-language", "line-numbers"],
            theme: "okaidia",
            css: true,
        },
    })
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ getConfig, actions }) => {
    if (getConfig().mode === "production") {
        actions.setWebpackConfig({
            devtool: false,
        })
    }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const { createRedirect, createPage } = actions

    createRedirect({
        fromPath: "/crocolytics.js",
        toPath: "https://cdn.splitbee.io/sb.js",
        statusCode: 200,
    })

    createRedirect({
        fromPath: "/_croc/*",
        toPath: "https://hive.splitbee.io/:splat",
        statusCode: 200,
    })

    const { errors, data } = await graphql(
        `
          {
            allWpPost(
              sort: { fields: date, order: DESC }
              filter: { status: { eq: "publish" } }
            ) {
              edges {
                node {
                  id
                  databaseId
                  slug
                  uri
                }
              }
            }
          }
        `
    )

    if (errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    if (data) {
        const posts = data.allWpPost.edges.map((edge) => edge.node)

        // Create blog-list pages
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blog-list-template.tsx"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    totalPosts: posts.length,
                },
            })
        })

        // Creste post pages
        const postTemplate = path.resolve("./src/templates/blog-post-template.tsx")
        posts.forEach((post) => {

            createPage({
                path: post.uri,
                component: postTemplate,
                context: {
                    databaseId: post.databaseId,
                    pagePath: post.uri,
                },
            })
        })
    }


}
