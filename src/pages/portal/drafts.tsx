import React, { useState } from 'react';
import { Portal } from '../../layouts/';
import axios from 'axios'

const Drafts = () => {

    return (
        <Portal>
            my drafts
        </Portal>
    )
}

export const Head = () => {
	return (
		<>
			<html lang="en" className="h-full bg-gray-100" />
            <body className="h-full" />
			<title>My Drafts | Croc Studios</title>
			<meta name="description" content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses." />
		</>
	)
}


export default Drafts