import {
  CLEAR_USER,
  SET_USER,
} from "./user.types"

const INITIAL_STATE = {
  loading: false,
}

export function userReducer(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }

    case CLEAR_USER:
      return INITIAL_STATE

    default:
      return state
  }
}
