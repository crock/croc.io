import * as React from "react"

const NotFoundPage = () => {
	return <>404 - page not found.</>
}

export const Head = () => {
	return (
		<>
			<body className="bg-white dark:bg-black text-black dark:text-white" />
			<title>Page Not Found | Croc Studios</title>
		</>
	)
}

export default NotFoundPage
