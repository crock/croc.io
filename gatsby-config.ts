import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `croc.io`,
    description: `Domain Name Investor`,
    siteUrl: `https://croc.io`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-EEH3043D9R",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-105760658-5",
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "ca-pub-3627563344348929",
        head: true,
      },
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
        name: "postImages",
        path: `${__dirname}/content/assets/`
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "posts",
        path: `${__dirname}/content/`
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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