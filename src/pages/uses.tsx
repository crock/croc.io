import * as React from 'react';

const usesCategories = {
    hardware: [
        {
            id: 1,
            title: "Apple MacBook Pro 16-inch M2 Max",
        },
        {
            id: 2,
            title: "Apple iPhone 13 mini",
        },
        {
            id: 3,
            title: "Samsung Galaxy S22 Ultra",
        },
    ],
    software: [
        {
            id: 1,
            title: "Visual Studio Code",
            href: "https://code.visualstudio.com/",
            internal: false,
        },
        {
            id: 2,
            title: "DBngin",
            href: "https://dbngin.com/",
            internal: false,
        },
        {
            id: 3,
            title: "Table Plus",
            href: "https://tableplus.com/",
            internal: false,
        },
        {
            id: 4,
            title: "Bear Notes App",
            href: "https://bear.app/",
            internal: false,
        }
    ],
    services: [
        {
            id: 1,
            title: "Netlify",
            href: "https://netlify.com",
            internal: false,
        },
        {
            id: 2,
            title: "Discord",
            href: "https://discord.com",
            internal: false,
        },
        {
            id: 3,
            title: "Notion",
            href: "https://notion.com",
            internal: false,
        },
    ],
    frameworks: [
        {
            id: 1,
            title: "Gatsby",
            href: "https://gatsbyjs.org",
            internal: false,
        },
        {
            id: 2,
            title: "Next",
            href: "https://nextjs.org",
            internal: false,
        },
        {
            id: 3,
            title: "Remix",
            href: "https://remix.run",
            internal: false,
        },
    ],
    books: [
        {
            id: 1,
            title: "Build APIs You Won\'t Hate - Phil Sturgeon",
            href: "https://apisyouwonthate.com/books/build-apis-you-wont-hate",
            internal: false,
        }
    ],
    podcasts: [
        {
            id: 1,
            title: "Syntax",
            href: "https://syntax.fm",
            internal: false,
        },
        {
            id: 2,
            title: "Accidental Tech Podcast",
            href: "https://atp.fm",
            internal: false,
        },
        {
            id: 3,
            title: "The CultCast",
            href: "https://overcast.fm/itunes503494956/the-cultcast",
            internal: false,
        },
    ],
    creators: [
        {
            id: 1,
            title: "MKBHD",
            href: "https://www.youtube.com/mkbhd",
            internal: false,
        },
        {
            id: 2,
            title: "iJustine",
            href: "https://www.youtube.com/ijustine",
            internal: false,
        }
    ],
    extensions: [
        {
            id: 1,
            title: "Pesticide CSS",
            href: "https://chrome.google.com/webstore/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi",
            internal: false,
        },
        {
            id: 2,
            title: "The Magic Highlighter",
            href: "https://themagichighlighter.com",
            internal: false,
        },
    ],
}

const UsesPage = () => {

    return (
        <>
            <h1 className="text-4xl font-black mb-8">
                Stuff We Love
                <span role="img" aria-label="heart" className="ml-2">❤️</span>
            </h1>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Hardware</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.hardware.length && usesCategories.hardware.map((item) => (
                        <li key={item.id}>
                            { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Software</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.software.length && usesCategories.software.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Services</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.services.length && usesCategories.services.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Frameworks</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.frameworks.length && usesCategories.frameworks.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Books</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.books.length && usesCategories.books.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Podcasts</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.podcasts.length && usesCategories.podcasts.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Content Creators</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.creators.length && usesCategories.creators.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
            <section className="mb-4">
                <h2 className="text-2xl font-black">Browser Extensions</h2>
                <ul className="list-inside list-disc">
                    { usesCategories.extensions.length && usesCategories.extensions.map((item) => (
                        <li key={item.id}>
                             { item.href ? <a rel="nofollow" target={`_blank`} className="text-primary hover:text-primary-light" href={item.href}>{item.title}</a> : item.title }
                        </li>
                    )) }
                </ul>
            </section>
        </>
    )
}

export const Head = () => {
	return (
		<>
            <html lang="en" />
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>❤️ Stuff We Love | Croc Studios</title>
            <meta name="description" content="The stuff we use and love everyday." />
		</>
	)
}

export default UsesPage