import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { wp, site } = useStaticQuery(
    graphql`
      query SITE_SETTINGS_QUERY {
        wp {
          generalSettings {
            title
            description
          }
        }

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

  const siteTitle = wp.generalSettings.title || site.siteMetadata.title
  const tagline =
    wp.generalSettings.description || site.siteMetadata.description

  return {
    siteTitle,
    tagline,
    siteUrl: site.siteMetadata.siteUrl,
    author: site.siteMetadata.author,
  }
}

export default useSiteMetadata
