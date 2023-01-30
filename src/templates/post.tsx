import * as React from "react"
import { graphql, Link } from "gatsby"
import { Wrapper } from "crockit-react/core"
import moment from "moment"

const PostTemplate = ({ data: { mdx }, children }) => {
	const { body, excerpt, frontmatter, id } = mdx
	const { title, publishDate, author, type } = frontmatter

	

	const Attribution = () => {
		const authorName = author || "Alex Crocker"
		
		return (
			<p className="text-gray-500 text-lg inline-block ml-1">
				by
				{' '}
				<span>
					<span className="text-primary">{authorName}</span>
					{ authorName !== "Alex Crocker" ? <span className="py-2 px-3 bg-yellow-500 text-white rounded-sm font-semibold text-sm uppercase ml-2">Guest Post</span> : null }
				</span>
			</p>
		)
	}

	return (
		<div className="py-10">
			<Wrapper className="mx-auto px-4 h-full max-w-5xl">
				<h1 className="font-bold text-4xl text-gray-900 dark:text-gray-50 mb-3">
					{title}
				</h1>
				{ type != "project" ? (
					<p className="mb-4 text-gray-500 text-lg">
						Published on{" "}
						<time dateTime={publishDate} className="text-primary">
							{moment(publishDate, "YYYYMMDD").format(
								"MMMM DD, YYYY"
							)}
						</time>
						<Attribution />
					</p>
				) : null }
				<div className="prose dark:prose-invert prose-lg">
					{children}
				</div>
			</Wrapper>
		</div>
	)
}

export const query = graphql`
	query PostQuery($id: String!) {
		mdx(id: { eq: $id }) {
			body
			excerpt(pruneLength: 120)
			frontmatter {
				title
				publishDate
				author
				type
			}
			id
			tableOfContents
		}
	}
`

export const Head = ({ data }) => {
	const { body, excerpt, frontmatter, id } = data.mdx
	const { title, publishDate, type } = frontmatter

	const subpage = type === "project" ? "Projects" : "Blog"

	return (
		<>
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>{title} | {subpage} | Croc Studios</title>
			<meta name="description" content={excerpt} />
		</>
	)
}

export default PostTemplate
