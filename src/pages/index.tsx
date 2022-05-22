import * as React from "react"
import Seo from "../components/Seo"
import SocialMenu from "../components/SocialMenu"

const IndexPage = () => {
  return (
    <>
      <Seo title="Coming Soon" />
      <div className="flex flex-col justify-center items-center place-content-center w-full h-screen">
        <h1 className="text-6xl font-black text-gray-900 dark:text-gray-50 mb-4">croc.io</h1>
        <p className="font-semibold text-gray-900 dark:text-gray-50 text-3xl">Coming Soon</p>
        <p className="font-normal leading-relaxed text-gray-900 dark:text-gray-50 text-xl">Tweet at Alex to let him know what you think should go here!</p>
        <SocialMenu />
      </div>
    </>
  )
}

export default IndexPage
