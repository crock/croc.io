import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import { Layout } from "./src/layouts/"
import "@fortawesome/fontawesome-pro/css/all.css"
import "./src/styles/globals.css"
import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
	element,
}) => <Layout>{element}</Layout>
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
	element,
}) => <>{element}</>
