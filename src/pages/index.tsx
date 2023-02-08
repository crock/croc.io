import * as React from "react"
import ProjectsList from "../components/ProjectsList"
import { Layout } from "../layouts/"

const IndexPage = () => {
	return (
		<Layout>
			<ProjectsList />
		</Layout>
	)
}

export const Head = () => {
	return (
		<>
			<html lang="en" />
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>Croc Studios</title>
			<meta name="description" content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses." />
		</>
	)
}

export default IndexPage
