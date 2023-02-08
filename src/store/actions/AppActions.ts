import { AppState } from "../context/"
import initialState from "../initialState"
import type { User } from '@prisma/client'

export enum AppActionTypes {
	reset = "reset",
	login = "login",
	logout = "logout",
	setToken = "setToken",
	setUserProfile = "setUserProfile"
}

export interface IAction {
	type: AppActionTypes
	payload?: any
}

type IActionHandler = (state: AppState, payload?: any) => AppState

const actions: Record<AppActionTypes, IActionHandler> = {
	reset: () => initialState,
	login: (state: AppState) => ({ ...state, isAuthenticated: !state.isAuthenticated }),
	logout: () => ({ isAuthenticated: false }),
	setToken: (state: AppState, payload: string) => ({ ...state, token: payload }),
	setUserProfile: (state: AppState, payload: Partial<User>) => ({ ...state, user: { ...state.user, ...payload }  })
}

export default actions
