import { createSwitchNavigator } from "react-navigation"
import { LandingScreen } from '../screens/landing'

export const MainNavigator = createSwitchNavigator({
  landing: {
    screen: LandingScreen,
    navigationOptions: {
      header: null
    }
  },
}, {
  // ...DEFAULT_STACK_NAVIGATOR_CONFIG,
})
