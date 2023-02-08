import { Reducer } from "react"
import { AppState } from "../context/"
import { IAction } from "../actions/"
import actions from "../actions/AppActions"

const reducer: Reducer<AppState, IAction> = (state, action) => {
	const newState = actions[action.type](state, action.payload)
	return newState
}

export default reducer