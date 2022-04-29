import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faDiscord,
  faGithub,
  faFacebook,
  faYoutube,
  faDribbble,
  faTiktok,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons"

const menuItems = [
  {
    id: 1,
    displayName: 'Twitter',
    url: 'https://twitter.com/gatorverse',
    internal: false,
    icon: faTwitter
  },
  {
    id: 2,
    displayName: 'Instagram',
    url: 'https://instagram.com/clipping',
    internal: false,
    icon: faInstagram
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
  {
    id: 5,
    displayName: 'YouTube',
    url: 'https://www.youtube.com/AlexCrocker',
    internal: false,
    icon: faYoutube
  },
  {
    id: 6,
    displayName: 'Twitch',
    url: 'https://www.twitch.tv/gators',
    internal: false,
    icon: faTwitch
  },
  {
    id: 7,
    displayName: 'TikTok',
    url: 'https://tiktok.com/@jetcrocker',
    internal: false,
    icon: faTiktok
  },
]

const SocialMenu = () => {

  return (
    <nav className="flex flex-row flex-nowrap justify-end items-center mt-4">
      {menuItems.length
        ? menuItems.map((l) => (
            <a
              key={l.id}
              href={l.url}
              className="text-gray-900 dark:text-white text-xl block p-2 hover:text-primary-dark"
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
