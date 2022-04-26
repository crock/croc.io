import { graphql } from "gatsby"

export const AuthorMeta = graphql`
  fragment AuthorMeta on WpUser {
    id
    uri
    name
    lastName
    firstName
  }
`

export const AvatarImageFragment = graphql`
  fragment AvatarImageFragment on File {
    childImageSharp {
      gatsbyImageData(
        width: 128
        height: 128
        layout: FIXED
        placeholder: BLURRED
        formats: [WEBP, AVIF, PNG]
      )
    }
  }
`

export const FeaturedImageFragment = graphql`
  fragment FeaturedImageFragment on WpMediaItem {
    localFile {
      childImageSharp {
        gatsbyImageData(
          width: 2560
          height: 500
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [WEBP, AVIF, PNG]
        )
      }
    }
  }
`
