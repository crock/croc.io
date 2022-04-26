import React from 'react'
import Navigation from './Navigation'

export default function Header() {
	
	return (
		<header className="p-4 w-full h-auto flex flex-row flex-nowrap justify-between items-center shadow-lg rounded-lg" style={{backgroundColor: `rgba(255, 255, 255, 0.3)`}}>
			<div className="flex flex-col justify-start items-start">
				<strong className="font-black text-2xl md:text-5xl text-gray-800 mb-1">croc.io</strong>
				<small className="font-semibold text-gray-400 text-2xl"></small>
			</div>
			<Navigation />
		</header>
	)
}