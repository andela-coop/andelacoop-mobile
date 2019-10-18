import * as React from "react"
import { connect } from "react-redux"

import {
  createReduxContainer,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers"

import { RootNavigator } from "./root-navigator"

export const navReducer = createNavigationReducer(RootNavigator)

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
export const middleware = createReactNavigationReduxMiddleware(
  (state) => state.nav
)

const App = createReduxContainer(RootNavigator)

const mapStateToProps = (state) => ({
  state: state.nav
})

export const AppWithNavigationState = connect(mapStateToProps)(App)
