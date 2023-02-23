import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link, Slice, Script } from "gatsby"
import { Wrapper } from "crockit-react/core/"
import { Helmet } from 'react-helmet'

const shortcodes = { Link }

interface ILayout {
	children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {

	return (
		<MDXProvider components={shortcodes}>
			<Slice alias="header" />
			<div className="py-10">
				<Wrapper className="mx-auto h-full max-w-5xl px-4 flex justify-between items-center">
					<div className="w-full grid grid-cols-12 gap-4">
						<div className="col-span-12 lg:col-span-9">
							<main data-pagefind-body>{children}</main>
						</div>
						<div className="col-span-12 lg:col-span-3">
							<div className="mb-4">
								<div id="search"></div>
							</div>
							<Slice alias="links" />
							<Slice alias="tools" />
							<Slice alias="recent-posts" allowEmpty />
						</div>
					</div>
				</Wrapper>
			</div>
			{/* <Helmet>
				<link rel="stylesheet" href="/_pagefind/pagefind-ui.css" />
			</Helmet>
			<Script src="/_pagefind/pagefind-ui.js" type="text/javascript" />
			<Script src="/custom.js" type="text/javascript" /> */}
		</MDXProvider>
	)
}

export default Layout
