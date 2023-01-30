import * as React from "react"
import { Link } from 'gatsby'

const NotFoundPage = () => {
	return (
		<>
			<h1 className="text-4xl font-black mb-8">
                Page Not Found
                <span role="img" aria-label="skull" className="ml-2">💀</span>
            </h1>
			<p className="leading-loose font-light text-lg text-gray-900 dark:text-gray-200">
				The page you are looking for does not exist. Please check the URL and try again. Why not go back <Link to="/" className="text-primary hover:text-primary-light">home</Link>?
			</p>
		</>
	)
}

export const Head = () => {
	return (
		<>
			<html lang="en" />
			<body className="bg-white dark:bg-black text-black dark:text-white" />
			<title>Page Not Found | Croc Studios</title>
			<meta name="description" content="The page you are looking for does not exist. Please check the URL and try again." />
		</>
	)
}

export default NotFoundPage
