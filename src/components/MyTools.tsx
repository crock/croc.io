import * as React from 'react';
import { Link } from 'gatsby';

const links = [
    {
        id: 1,
        title: 'Password Generator',
        href: '/tools/password-generator'
    },
    {
        id: 2,
        title: 'Webhook Sender',
        href: '/tools/webhook-sender'
    },
    {
        id: 3,
        title: 'CSR Detector',
        href: '/tools/csr-detector'
    },
]

const MyTools = () => {

    return (
        <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg w-full h-auto mb-2">
            <h3 className="font-semibold uppercase text-lg text-gray-400 dark:text-gray-300 mb-2">My Tools</h3>
            <ul>
                { links.length && links.map(link => (
                    <li key={link.id} className="mb-2">
                        <Link to={link.href} className="text-primary hover:text-primary-light">{link.title}</Link>
                    </li>
                )) }
            </ul>
        </div>
    )

}

export default MyTools