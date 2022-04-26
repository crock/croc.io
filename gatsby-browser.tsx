import * as React from "react"
import type { GatsbyBrowser } from 'gatsby'
import { Layout } from './src/layouts/'
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./src/styles/globals.css"
import splitbee from "@splitbee/web"

splitbee.init({
  scriptUrl: "/crocolytics.js",
  apiUrl: "/_croc",
})

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({element}) => <Layout>{element}</Layout>
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({element}) => <>{element}</>