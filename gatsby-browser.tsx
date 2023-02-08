import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import { AppProvider } from './src/store/'
import { Root } from "./src/layouts/"
import "./src/styles/globals.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
	element,
}) => <Root>{element}</Root>

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
	element,
}) => <AppProvider>{element}</AppProvider>
