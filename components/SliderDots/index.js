import React from "react"
import { View } from "react-native"

const andelaBlue = '#3359DB';
const inactiveGrey = '#DAE1E7';
/**
 * Renders slider dots
 *
 * @param length The number of dots to render
 * @param activeDot The active slide
 * @param continuous This decides if only the active dot is displayed as active or
 * if all dots before and incluing the active dot is displayed as active
 */
export default ({ length, activeDot, continuous }) => {
  const fauxArray = new Array(length).fill('');
  const containerStyle = {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between'
  };
  const dotStyle = {
    height: 10,
    width: 10,
    borderRadius: 50,
    marginBottom: 50
  };
  
  return <View style={containerStyle}>
    {fauxArray.map((item, index) => <View
      style={{
        ...dotStyle,
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
