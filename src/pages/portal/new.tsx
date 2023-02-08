import React, { useState } from 'react';
import { Portal } from '../../layouts/';
import axios from 'axios'

const NewDraft = () => {

    return (
        <Portal>
            <form>
            <div className="flex flex-col mb-2">
            <label htmlFor="title" className="text-black mb-2">Suggested Post Title</label>
            <input type="text" name="title" id="title" className="form-input" />
        </div>
        <div className="flex flex-col mb-2">
            <label htmlFor="body" className="text-black mb-2">Markdown Body</label>
            <textarea name="body" id="body" rows={10} className="form-textarea"></textarea>
        </div>
        <input type="submit" value="Submit" className="bg-green-500 hover:bg-green-400 font-semibold text-sm uppercase text-white py-2 px-3 rounded-sm shadow-sm mt-3" />
            </form>
        </Portal>
    )
}

export const Head = () => {
	return (
		<>
			<html lang="en" className="h-full bg-gray-100" />
            <body className="h-full" />
			<title>New Draft</title>
			<meta name="description" content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses." />
		</>
	)
}


export default NewDraft