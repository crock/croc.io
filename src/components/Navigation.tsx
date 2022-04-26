import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      menu: wpMenu(name: { eq: "navigation" }) {
        menuItems {
          nodes {
            id
            url
            label
            order
          }
        }
      }
    }
  `)

  const links = data.menu.menuItems.nodes

  return (
    <nav className="font-semibold text-sm md:text-xl">
      {links.length
        ? links.map((l) => {
            const isExternal = l.url.startsWith("http")

            return !isExternal ? (
              <Link
                key={l.id}
                to={l.url}
                className="py-2 px-3 text-gray-900 dark:text-white"
                activeClassName="text-primary-light"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.id}
                href={l.url}
                className="py-2 px-3 text-gray-900 dark:text-white"
              >
                {l.label}
              </a>
            )
          })
        : null}
    </nav>
  )
}

export default Navigation
