import * as React from "react"
import { Link } from "gatsby"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

const links = [
	{
		id: 1,
		title: "Get in touch!",
		href: "mailto:alex@croc.io",
		internal: false,
	},
	{
		id: 7,
		title: "Blog",
		href: "/blog",
		internal: true,
	},
	{
		id: 8,
		title: "Stuff We Love",
		href: "/uses",
		internal: true,
	},
	{
		id: 3,
		title: "Mastodon",
		rel: "me",
		href: "https://mastodon.social/@croc",
		internal: false,
	},
	{
		id: 5,
		title: "GitHub",
		href: "https://github.com/crock",
		internal: false,
	},
	{
		id: 6,
		title: "Dribbble",
		href: "https://dribbble.com/croc",
		internal: false,
	},
	{
		id: 7,
		title: "Glass Photo 📷",
		href: "https://glass.photo/crocker",
		internal: false,
	},
	{
		id: 7,
		title: "Pixelfed 📷",
		href: "https://pixelfed.social/croc",
		internal: false,
	},
]

const MyLinks = () => {
	return (
		<div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg w-full h-auto mb-2">
			<h2 className="font-semibold uppercase text-lg text-gray-400 dark:text-gray-300 mb-2">
				My Links
			</h2>
			<ul>
				{links.length &&
					links.map((link) => (
						<li key={link.id} className="mb-2">
							{link.internal ? (
								<Link
									to={link.href}
									className="text-primary hover:text-primary-light"
								>
									{link.title}
								</Link>
							) : (
								<a
									target={`_blank`}
									rel={link.rel}
									href={link.href}
									className="text-primary hover:text-primary-light flex flex-row flex-nowrap"
								>
									{link.title}
									<ArrowTopRightOnSquareIcon
										width={16}
										className="ml-2"
									/>
								</a>
							)}
						</li>
					))}
			</ul>
		</div>
	)
}

export default MyLinks
