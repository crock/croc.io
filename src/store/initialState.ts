import { defaultUser } from "../utils/constants"
import { AppState } from "./context/"

const initialState: AppState = {
    isAuthenticated: false,
    user: defaultUser
}

export default initialState