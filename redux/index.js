import { combineReducers } from "redux"
import { userReducer as user } from "./user/index"
import { navReducer } from "../navigation/redux-navigation"

export const appReducer = combineReducers({
  nav: navReducer,
  user,
})
