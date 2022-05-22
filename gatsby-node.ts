import type { GatsbyNode } from 'gatsby'
import path from 'path'

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ getConfig, actions }) => {
    if (getConfig().mode === "production") {
        actions.setWebpackConfig({
            devtool: false,
        })
    }
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const { createRedirect, createPage } = actions

    createRedirect({
        fromPath: "/crocolytics.js",
        toPath: "https://cdn.splitbee.io/sb.js",
        statusCode: 200,
    })

    createRedirect({
        fromPath: "/_croc/*",
        toPath: "https://hive.splitbee.io/:splat",
        statusCode: 200,
    })

    createRedirect({
        fromPath: "/blog/the-state-of-ada-compliance-in-the-workplace-2022/",
        toPath: "https://admintuts.com/blog/2022/04/26/the-state-of-ada-compliance-in-the-workplace-2022/",
        statusCode: 301,
    })


}
