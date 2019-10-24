import React from "react";
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const andelaBlue = '#3359DB';

/**
 * Renders the default application button
 *
 * @param text The text to be displayed in the button.
 * @param onPress The event handler for when this button is pressed
 * @param type The type that determines the style of the button
 */
export default ({ text, onPress, type }) => {
  const customBtnStyle = {};
  const customTextStyle = { color: andelaBlue };
  switch (type) {
    case 'btn_blue':
      customBtnStyle.backgroundColor = andelaBlue;
      customTextStyle.color = '#FFF';
      break;
    default:
      break;
  }
  return (
    <TouchableHighlight style={[styles.btn, customBtnStyle]} onPress={onPress ? onPress : () => {}}>
      <Text style={[styles.btnText, customTextStyle]}>
        {text ? text : 'insert text'}
      </Text>
    </TouchableHighlight>
  );
}
