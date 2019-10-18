import {
  SET_USER,
  CLEAR_USER,
  UPDATE_USER,
} from "./user.types"

export const setUser = (user) => ({ type: SET_USER, payload: user })
export const clearUser = () => ({ type: CLEAR_USER })

export const updateUser = () => ({
  type: UPDATE_USER
})

