

type Nullable<T> = T | null

export const SET_USER = "SET_USER"
export const CLEAR_USER = "CLEAR_USER"

type SetUserAction = {
  type: typeof SET_USER
  payload
}

type ClearUserAction = {
  type: typeof CLEAR_USER
}

export type IUserWallet = {
  balance: number
}

export type IUserDetails = {
  u_edu_institution: number
  first_name: string
  u_id: number
  u_image: string
  wallet_balance: IUserWallet
  phone: string
}

export type UserState = {
  access_token: Nullable<string>
  institution_id: Nullable<number>
  institution_name: Nullable<number>
  user_details: Nullable<IUserDetails>
  user_pic_url: Nullable<string>
  user_pic_url_100: Nullable<string>
  user_pic_url_200: Nullable<string>
  loading: boolean
}

export const UPDATE_USER = "UPDATE_USER"
type UpdateUser = {
  type: typeof UPDATE_USER,
  payload
}

export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE"
type UpdateUserFailure = {
  type: typeof UPDATE_USER_FAILURE,
  payload
}

export const CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER"
type ChangePhoneNumber = {
  type: typeof CHANGE_PHONE_NUMBER,
}

export const CHANGE_PHONE_NUMBER_FAILURE = "CHANGE_PHONE_NUMBER_FAILURE"
type ChangePhoneNumberFailure = {
  type: typeof CHANGE_PHONE_NUMBER_FAILURE,
}

export const CHANGE_PHONE_NUMBER_SUCCESS = "CHANGE_PHONE_NUMBER_SUCCESS"
type ChangePhoneNumberSuccess = {
  type: typeof CHANGE_PHONE_NUMBER_SUCCESS,
}

export const CHANGE_PASSWORD = "CHANGE_PASSWORD"
type ChangePassword = {
  type: typeof  CHANGE_PASSWORD,
}

export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE"
type ChangePasswordFailure = {
  type: typeof CHANGE_PASSWORD_FAILURE,
}

export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS"
type ChangePasswordSuccess = {
  type: typeof CHANGE_PASSWORD_SUCCESS,
}

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
type UpdateUserSuccess = {
  type: typeof UPDATE_USER_SUCCESS,
}

export type UserAction = SetUserAction
  | ClearUserAction
  | UpdateUser
  | UpdateUserFailure
  | UpdateUserSuccess
  | ChangePhoneNumber
  | ChangePhoneNumberFailure
  | ChangePhoneNumberSuccess
  | ChangePassword
  | ChangePasswordFailure
  | ChangePasswordSuccess
