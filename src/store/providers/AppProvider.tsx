import React, { useReducer } from 'react'
import initialState from '../initialState'
import { AppReducer } from "../reducers/"
import { AppContext } from "../context/"

const init = (initial: any) => {
	return initial
}

interface IProvider {
	children: React.ReactNode
}

const AppProvider = ({ children }: IProvider) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, init)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider