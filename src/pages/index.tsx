import * as React from "react"
import Hero from "../components/Hero"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <>
    <Seo title="Welcome" description="Building innovative ideas from a
unique perspective." />
      <Hero />
    </>
  )
}

export default IndexPage
