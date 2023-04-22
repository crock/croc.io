import * as React from "react"
import ProjectsList from "../components/ProjectsList"

const IndexPage = () => {
	return (
		<>
			<ProjectsList />
			<div className="hidden" dangerouslySetInnerHTML={{__html: `
				OMG.LOL Proofs:
				proven.lol/9bdb6f (404.page)
				proven.lol/5f07d2 (croc.io)
			`}}></div>
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
		</>
	)
}

export default IndexPage
