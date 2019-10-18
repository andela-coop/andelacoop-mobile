import { fadeInUp as fadeInUpOrig } from "react-native-animatable/definitions/fading-entrances"

fadeInUpOrig.from.translateY = 28
export const fadeInUpTextField = fadeInUpOrig

export const swapOrigin = {
  0: {
    opacity: 0,
    translateY: 78
  },
  0.6: {
    opacity: 1,
    translateY: -10
  },
  0.75: {
    translateY: 5
  },
  0.9: {
    translateY: -3
  },
  1: {
    translateY: 0
  }
}

export const swapDestination = {
  0: {
    opacity: 0,
    translateY: -78
  },
  0.6: {
    opacity: 1,
    translateY: 10
  },
  0.75: {
    translateY: -5
  },
  0.9: {
    translateY: 3
  },
  1: {
    translateY: 0
  }
}
