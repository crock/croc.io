import React, { useState } from 'react';
import { Portal } from '../../layouts/';
import axios from 'axios'

const PortalHome = () => {

    return (
        <Portal>
            test
        </Portal>
    )
}

export const Head = () => {
	return (
		<>
			<html lang="en" className="h-full bg-gray-100" />
            <body className="h-full" />
			<title>Draft Portal</title>
			<meta name="description" content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses." />
		</>
	)
}


export default PortalHome