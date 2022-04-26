import React from 'react'
import SocialMenu from './SocialMenu'

export default function Hero() {

    return (
        <div className="w-full h-[500px] flex flex-col place-content-center items-center">
            <h1 className="font-semibold text-center text-xl md:text-4xl mb-4 text-gray-900 dark:text-white"><strong className="font-bold italic">Neurodivergent</strong> developer, designer, and visionary.</h1>
            <div className="p-4 w-full md:w-2/3 h-auto flex flex-row flex-nowrap justify-between items-center shadow-lg rounded-lg bg-[rgba(255, 255, 255, 0.3)] dark:bg-gray-800">
                <p className="leading-6 font-normal text-xl text-center">I invest my time across a variety of areas in order to not only build a better life for myself and my family, but to enlighten others to be able to do the same and live the life they want to live.</p>
            </div>
            <SocialMenu />
        </div>
    )
}