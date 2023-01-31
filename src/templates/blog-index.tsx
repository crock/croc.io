import React from "react"
import { graphql, HeadProps } from "gatsby"
import Pagination from "../components/Pagination"
import PostCard from "../components/PostCard"
import slugify from "slugify"

const slugifyOptions = {
	replacement: "-", // replace spaces with replacement character, defaults to `-`
	remove: undefined, // remove characters that match regex, defaults to `undefined`
	lower: true, // convert to lower case, defaults to `false`
	strict: true, // strip special characters except replacement, defaults to `false`
	locale: "en", // language code of the locale to use
	trim: true, // trim leading and trailing replacement chars, defaults to `true`
}

const BlogList = ({ data, pageContext }) => {
	const posts = data.allMdx.edges.map((edge) => edge.node)

	return (
		<>
			<h1 className="text-4xl font-black mb-8">
                Blog
                <span role="img" aria-label="heart" className="ml-2">📖</span>
            </h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{posts.length
					? posts.map((post: any) => {
							const { id, excerpt, frontmatter } = post
							const {
								title,
								customSlug,
								publishDate,
								author,
								tags,
								category,
								description,
							} = frontmatter

							const slug =
								customSlug || slugify(title, slugifyOptions)

							return (
								<PostCard
									key={id}
									title={title}
									excerpt={excerpt}
									date={publishDate}
									permalink={`/posts/${slug}`}
									author={author || "Alex Crocker"}
									category={category}
									tags={tags}
								/>
							)
					  })
					: null}
			</div>
			<Pagination pagination={pageContext} pathPrefix={"blog"} />
		</>
	)
}

export const Head: React.FC<HeadProps> = ({
	location,
	params,
	data,
	pageContext,
}) => {
	const { totalPosts } = pageContext

	return (
		<>
			<html lang="en" />
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>Blog | Croc Studios</title>
			<meta
				name="description"
				content={`Browse a total of ${totalPosts} posts on the site.`}
			/>
		</>
	)
}

export const query = graphql`
	query BlogListQuery($skip: Int!, $limit: Int!) {
		allMdx(
			limit: $limit
			skip: $skip
			filter: { frontmatter: { type: { ne: "project" } } }
			sort: { frontmatter: { publishDate: DESC } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 120)
					frontmatter {
						title
						customSlug
						publishDate
						author
						tags
						category
						description
					}
				}
			}
		}
	}
`

export default BlogList
