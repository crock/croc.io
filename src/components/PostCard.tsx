import * as React from "react"
import { PostCardProps } from "../types"
import moment from "moment"
import { Link } from "gatsby"
import classNames from "classnames"

const PostCard: React.FC<PostCardProps> = ({
	title,
	author,
	date,
	permalink,
	excerpt,
	category,
	tags,
}) => {
	const primaryCategory = category || "Uncategorized"

	const TagsDisplay = () => {
		if (tags && tags.length) {
			return (
				<div className="flex flex-wrap -mx-1.5 mt-4">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="mt-2 px-1.5 py-0.5 mr-1 rounded-full text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
						>
							#{tag}
						</span>
					))}
				</div>
			)
		}
		return null
	}

	const ExcerptDisplay = () => {
		const excerptText = excerpt
			.replace(/<a.*?>(.*?)<\/a>/g, "$1")
			.replace("Continue reading", "")
			.replace(`"${title}"`, "...")

		return (
			<div
				className="font-light text-sm leading-8 text-black dark:text-white"
				dangerouslySetInnerHTML={{ __html: excerptText }}
			/>
		)
	}

	return (
		<article
			className={`relative bg-white dark:bg-gray-800 rounded shadow w-full h-auto p-4 flex flex-col justify-between items-start`}
		>
			<span
				className={classNames(
					"p-2 uppercase bg-gray-300 text-black font-semibold text-xs rounded-sm mb-2",
					{
						"bg-yellow-500": primaryCategory === "Guest Post",
					}
				)}
			>
				{primaryCategory}
			</span>
			<h3 className="font-bold text-xl text-black dark:text-white mb-1">
				{title}
			</h3>
			<div className="flex flex-col flex-nowrap justify-start items-start mb-2 text-black dark:text-white">
				{primaryCategory === "Guest Post" ? (
					<div className="font-normal">
						Written by{" "}
						<span className="text-primary">{author}</span>
					</div>
				) : null}
				<div className="font-normal">
					Published on{" "}
					<span className="text-primary">
						<time dateTime={date}>
							{moment(date, "YYYYMMDD").format("MMMM DD, YYYY")}
						</time>
					</span>
				</div>
			</div>
			<ExcerptDisplay />
			<Link
				to={permalink}
				className="bg-primary-light hover:bg-primary text-white py-2 px-3 text-lg font-semibold uppercase rounded-sm mt-4"
			>
				Read More
			</Link>
			<TagsDisplay />
		</article>
	)
}

export default PostCard
