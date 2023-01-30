import type { GatsbyNode } from 'gatsby'
import path from 'path'
import slugify from 'slugify'

const slugifyOptions = {
  replacement: '-',  // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: true,      // convert to lower case, defaults to `false`
  strict: true,     // strip special characters except replacement, defaults to `false`
  locale: 'en',       // language code of the locale to use
  trim: true         // trim leading and trailing replacement chars, defaults to `true`
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createRedirect, createPage, createSlice } = actions

  const result = await graphql(`
        {
        allMdx {
          edges {
            node {
              body
              excerpt(pruneLength: 120)
              frontmatter {
                title
                publishDate
                customSlug
                type
              }
              internal {
                contentFilePath
              }
              id
              tableOfContents
            }
          }
          pageInfo {
            totalCount
            perPage
            pageCount
            itemCount
            hasPreviousPage
            hasNextPage
            currentPage
          }
          totalCount
        }
      }
    `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.edges
    .map(edge => edge.node)
    .filter(post => post.frontmatter.type != 'project')
    .sort((a, b) => {
      const aDate = new Date(a.frontmatter.publishDate)
      const bDate = new Date(b.frontmatter.publishDate)

      return bDate.getTime() - aDate.getTime()
    })

  const projects = result.data.allMdx.edges
    .map(edge => edge.node)
    .filter(post => post.frontmatter.type === 'project')
    .sort((a, b) => {
      const aDate = new Date(a.frontmatter.publishDate)
      const bDate = new Date(b.frontmatter.publishDate)

      return bDate.getTime() - aDate.getTime()
    })

  createSlice({
    id: `header`,
    component: path.resolve(`./src/components/Header.tsx`),
  })

  createSlice({
    id: `links`,
    component: path.resolve(`./src/components/MyLinks.tsx`),
  })

  createSlice({
    id: `tools`,
    component: path.resolve(`./src/components/MyTools.tsx`),
  })

  createSlice({
    id: `recent-posts`,
    component: path.resolve(`./src/components/RecentPosts.tsx`),
    context: {
      posts: posts.slice(0, 3),
    }
  })

  const postTemplate = path.resolve(`./src/templates/post.tsx`)

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const slug = post.frontmatter.customSlug || slugify(post.frontmatter.title, slugifyOptions)

      createPage({
        path: `/posts/${slug}`,
        component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
        }
      })
    })
  }

  if (projects.length > 0) {
    projects.forEach((post, index) => {
      const slug = post.frontmatter.customSlug || slugify(post.frontmatter.title, slugifyOptions)

      createPage({
        path: `/posts/${slug}`,
        component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
        }
      })
    })
  }

  // Create blog index pages
  const postsPerPage = 8
  const totalPosts = posts.length
  const numPages = Math.ceil(totalPosts / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-index.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        totalPosts,
      },
    })
  })
}
