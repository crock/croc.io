import * as React from 'react'
import { Author } from '../types'


const AuthorBlock = ({ name, bio, avatarUrl, url, cta }: Author) => {

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full h-auto p-6 mt-4">
            <div className="grid grid-cols-2 gap-4">
                { avatarUrl ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <img src={avatarUrl} alt={name} width={250} height={250} />
                    </div>
                ) : null }
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-bold text-gray-900 dark:text-gray-50 text-lg mb-2">
                        {name} <span className="sr-only">(Author)</span>
                    </h2>
                    { bio ? <p className="leading-relaxed font-normal text-black dark:text-white text-base">
                        {bio}
                    </p> : null }
                    { url && cta ? <a className="py-2 px-4 bg-primary hover:bg-primary-light text-sm font-semibold uppercase mt-3" rel="ugc" href={url}>{cta}</a> : null }
                </div>
            </div>
        </div>
    )
}

export default AuthorBlock