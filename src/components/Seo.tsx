import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

type HeadMetaItem = {
  name?: string
  property?: string
  content: string
}

interface IHead {
  title: string
  description?: string
  lang?: string
  meta?: [HeadMetaItem]
}

const Seo: React.FC<IHead> = ({
  description,
  lang = "en",
  meta = [],
  title,
}) => {
  const { siteTitle, tagline, author } = useSiteMetadata()

  const metaDescription = description || tagline

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
