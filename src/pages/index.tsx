import * as React from "react"
import Seo from "../components/Seo"
import SocialMenu from "../components/SocialMenu"

const IndexPage = () => {
  return (
    <>
      <Seo title="Welcome!" />
      <div className="flex flex-col justify-center items-center place-content-center w-full h-screen">
        <h1 className="text-6xl font-black text-gray-900 dark:text-gray-50 mb-4">croc.io</h1>
        <p className="font-semibold text-gray-500 dark:text-gray-50 text-sm uppercase tracking-widest">Entrepreneur Life</p>
        <SocialMenu />
      </div>
    </>
  )
}

export default IndexPage
