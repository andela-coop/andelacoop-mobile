import React from "react"
import { View } from "react-native"
import styles from './styles'

const andelaBlue = '#3359DB';
const inactiveGrey = '#DAE1E7';
/**
 * Renders slider dots
 *
 * @param length The number of dots to render
 * @param activeDot The active dot
 * @param continuous This decides if only the active dot is displayed as active or
 * if all dots before and incluing the active dot is displayed as active
 */
export default ({ length, activeDot, continuous }) => {
  const fauxArray = new Array(length).fill('');
  
  return <View style={styles.containerStyle}>
    {fauxArray.map((item, index) => <View
      style={{
        ...styles.dotStyle,
        backgroundColor:
          continuous
            ? activeDot >= index
              ? andelaBlue : inactiveGrey : activeDot === index
                ? andelaBlue : inactiveGrey
      }}
      key={index}
      />
    )}
  </View>;
};
