import React from 'react'
import Navigation from './Navigation'

export default function Header() {
	
	return (
		<header className="flex flex-col justify-start items-start p-4">
			<strong className="font-black text-2xl md:text-5xl text-gray-800 dark:text-white mb-2">croc.io</strong>
			<Navigation className="-ml-3" />
		</header>
	)
}