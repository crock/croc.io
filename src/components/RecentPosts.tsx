import * as React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

const slugifyOptions = {
	replacement: "-", // replace spaces with replacement character, defaults to `-`
	remove: undefined, // remove characters that match regex, defaults to `undefined`
	lower: true, // convert to lower case, defaults to `false`
	strict: true, // strip special characters except replacement, defaults to `false`
	locale: "en", // language code of the locale to use
	trim: true, // trim leading and trailing replacement chars, defaults to `true`
}

const RecentPosts = ({ sliceContext }) => {
	const { posts } = sliceContext

	return (
		<div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg w-full h-auto mb-2">
			<h2 className="font-semibold uppercase text-lg text-gray-400 dark:text-gray-300 mb-2">
				Recent Posts
			</h2>
			<ul className="list-disc list-inside">
				{posts.length &&
					posts.map((post) => {
						const slug =
							post.frontmatter.customSlug ||
							slugify(post.frontmatter.title, slugifyOptions)

						return (
							<li key={post.id} className="mb-2">
								<Link
									to={`/posts/${slug}`}
									className="text-primary hover:text-primary-light"
								>
									{post.frontmatter.title}
								</Link>
							</li>
						)
					})}
			</ul>
		</div>
	)
}

export default RecentPosts
