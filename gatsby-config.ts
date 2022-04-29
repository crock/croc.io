import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Croc.io`,
    description: `Inspiring those that think different to build their own products to live the life they want to live and educating companies on how to best help their neurodivergent employees be successful in the workplace.`,
    author: `@gatorverse`,
    siteUrl: `https://croc.io`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-105760658-5"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/"
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: "https://x.croc.io/graphql",
        html: {
          useGatsbyImage: true,
        },
        verbose: true,
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `croc`
      }
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://croc.io",
        sitemap: "https://croc.io/sitemap/sitemap-index.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-netlify",
  ]
};

export default config;