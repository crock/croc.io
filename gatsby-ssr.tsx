import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { AppProvider } from './src/store/'
import { Root } from "./src/layouts/"
import "./src/styles/globals.css"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
	<Root>{element}</Root>
)

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({
	element,
}) => <AppProvider>{element}</AppProvider>