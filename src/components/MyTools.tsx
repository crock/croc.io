import * as React from "react"
import { Link } from "gatsby"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

const links = [
	{
		id: 1,
		title: "Password Generator",
		href: "/tools/password-generator",
		internal: true,
	},
	{
		id: 2,
		title: "Webhook Sender",
		href: "/tools/webhook-sender",
		internal: true,
	},
	{
		id: 3,
		title: "CSR Detector",
		href: "/tools/csr-detector",
		internal: true,
	},
	{
		id: 4,
		title: "Dropfilter",
		href: "https://dropfilter.app",
		internal: false,
	},
	{
		id: 5,
		title: "Lead Generator",
		href: "https://outbounds.org",
		internal: false,
	},
]

const MyTools = () => {
	return (
		<div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg w-full h-auto mb-2">
			<h4 className="font-semibold uppercase text-lg text-gray-400 dark:text-gray-300 mb-2">
				My Tools
			</h4>
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

export default MyTools
