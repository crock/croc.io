import * as React from "react"
import { Wrapper } from 'crockit-react/core/'
import { Slice } from "gatsby"
import ProjectsList from "../components/ProjectsList"

const IndexPage = () => {
  return (
    <>
      <ProjectsList />
    </>
  )
}

export const Head = () => {

  return (
    <>
      <body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
      <title>Alex Crocker</title>
    </>
  )
}

export default IndexPage
