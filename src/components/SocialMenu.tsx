import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faDribbble,
  faMastodon
} from "@fortawesome/free-brands-svg-icons"

const menuItems = [
  {
    id: 1,
    displayName: 'Mastodon',
    url: 'https://mastodon.social/@croc',
    internal: false,
    rel: "me",
    icon: faMastodon
  },
  {
    id: 3,
    displayName: 'GitHub',
    url: 'https://github.com/crock',
    internal: false,
    icon: faGithub
  },
  {
    id: 4,
    displayName: 'Dribbble',
    url: 'https://dribbble.com/croc',
    internal: false,
    icon: faDribbble
  },
]

const SocialMenu = () => {

  return (
    <nav className="flex flex-row flex-nowrap justify-end items-center">
      {menuItems.length
        ? menuItems.map((l) => (
            <a
              key={l.id}
              href={l.url}
              rel={l.rel}
              className="text-xl block p-2 text-gray-900  dark:text-gray-50  hover:text-gray-500 hover:dark:text-white"
            >
              <FontAwesomeIcon icon={l.icon} size="1x" />
              <span className="sr-only">{l.displayName}</span>
            </a>
          ))
        : null}
    </nav>
  )
}

export default SocialMenu
