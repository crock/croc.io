import * as React from "react"
import { Wrapper } from "crockit-react/core/"
import SocialMenu from "./SocialMenu"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const links = [
	{
		name: "Home",
		url: "/",
		internal: true,
	},
	{
		name: "Blog",
		url: "/blog",
		internal: true,
	},
	{
		name: "Stuff We Love",
		url: "/uses",
		internal: true,
	},
]

const Header = () => {
	return (
		<>
			<header className="w-full h-20 bg-gray-200 dark:bg-gray-800">
				<Wrapper className="mx-auto px-4 h-full max-w-5xl flex justify-between items-center">
					<div className="flex flex-row justify-start items-center">
						<Link to="/" className="mr-2">
							<StaticImage
								src="../images/CS_LOGO.png"
								alt="CROC BUZZ STUDIOS"
								layout={`constrained`}
								placeholder={`none`}
								width={100}
							/>
							<span className="sr-only">Croc Studios</span>
						</Link>
						<nav className="hidden lg:inline-flex">
							<ul className="flex flex-row ml-4">
								{links.length &&
									links.map((link, index) => (
										<li key={index} className="ml-4">
											{link.internal ? (
												<Link
													to={link.url}
													className="text-gray-900  dark:text-gray-50  hover:text-gray-500 hover:dark:text-white font-normal text-base"
												>
													{link.name}
												</Link>
											) : (
												<a
													href={link.url}
													className="text-gray-900 dark:text-gray-50  hover:text-gray-500 hover:dark:text-white font-normal text-base"
												>
													{link.name}
												</a>
											)}
										</li>
									))}
							</ul>
						</nav>
					</div>
					<SocialMenu />
				</Wrapper>
			</header>
		</>
	)
}

export default Header
