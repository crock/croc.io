import React, { createContext } from 'react'
import initialState from '../initialState'
import type { User } from '@prisma/client'
import { IAction } from '../actions/'

export interface AppState {
    isAuthenticated: boolean
    user?: Partial<User>
    token?: string
}

type DispatchFunction = (action: IAction) => void

interface IContext {
	state: AppState
	dispatch: DispatchFunction
}

const defaultContext: IContext = {
	state: initialState,
	dispatch: (action: IAction) => null,
}

const context = createContext(defaultContext)

export default context