import { StyleSheet } from 'react-native';
import { fonts } from '../../theme';

const { roboto } = fonts;
const andelaBlue = '#3359DB';

export default StyleSheet.create({
  btn: {
    borderColor: andelaBlue,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopLeftRadius: 19,
    borderBottomRightRadius: 19,
  },
  btnText: {
    letterSpacing: 3,
    // fontFamily: roboto,
    textTransform: 'uppercase',
    fontWeight: '300',
    fontSize: 13,
    paddingHorizontal: 60,
    paddingVertical: 20,
    lineHeight: 19,
  },
})
