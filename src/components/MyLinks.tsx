import * as React from 'react';

const links = [
    {
        id: 1,
        title: 'Get in touch!',
        href: 'mailto:alex@croc.io'
    },
    {
        id: 2,
        title: 'Join Domaincord',
        href: 'https://discord.gg/domains'
    },
    {
        id: 3,
        title: 'Mastodon',
        rel: 'me',
        href: 'https://mastodon.social/@croc'
    },
    {
        id: 4,
        title: 'Pixelfed',
        href: 'https://pixelfed.social/croc'
    },
    {
        id: 5,
        title: 'GitHub',
        href: 'https://github.com/crock'
    },
    {
        id: 6,
        title: 'Dribbble',
        href: 'https://dribbble.com/croc'
    }
]

const MyLinks = () => {

    return (
        <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg w-full h-auto mb-2">
            <h3 className="font-semibold uppercase text-lg text-gray-400 dark:text-gray-300 mb-2">My Links</h3>
            <ul>
                { links.length && links.map(link => (
                    <li key={link.id} className="mb-2">
                        <a target={`_blank`} rel={link.rel} href={link.href} className="text-primary hover:text-primary-light">{link.title}</a>
                    </li>
                )) }
            </ul>
        </div>
    )

}

export default MyLinks