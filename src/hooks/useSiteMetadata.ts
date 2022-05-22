import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { wp, site } = useStaticQuery(
    graphql`
      query SITE_SETTINGS_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
  )

  const siteTitle = site.siteMetadata.title
  const metaDescription = site.siteMetadata.description

  return {
    siteTitle,
    metaDescription,
    siteUrl: site.siteMetadata.siteUrl,
    author: site.siteMetadata.author,
  }
}

export default useSiteMetadata
