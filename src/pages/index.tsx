import * as React from "react"
import { Wrapper } from "crockit-react/core/"
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
			<html lang="en" />
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>Croc Studios</title>
			<meta name="description" content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses." />
			<link href="/_pagefind/pagefind-ui.css" rel="stylesheet" />
		</>
	)
}

export default IndexPage
