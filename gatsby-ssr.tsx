import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { Layout } from './src/layouts/'
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./src/styles/globals.css"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => <Layout>{element}</Layout>