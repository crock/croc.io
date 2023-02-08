import React from "react"

interface ILayout {
	children: React.ReactNode
}

const Root = ({ children }: ILayout) => {
	return (
        <>
		{children}
        </>
	)
}

export default Root
