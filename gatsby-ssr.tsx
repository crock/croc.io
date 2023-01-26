import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { Layout } from './src/layouts/'
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./src/styles/globals.css"
import "prismjs/themes/prism-solarizedlight.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => <Layout>{element}</Layout>