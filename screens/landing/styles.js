import { fonts } from '../../theme';
import { Dimensions, StyleSheet } from 'react-native';

const { lato, roboto } = fonts;
const andelaBlue = '#3359DB';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 250,
    resizeMode: 'contain',
    marginBottom: 40
  },
  headline: {
    color: andelaBlue,
    fontSize: 18,
    // fontFamily: lato,
    textTransform: 'capitalize',
    width: 347,
    textAlign: 'center',
    marginBottom: 10
  },
  slideContainer: {
    height: 370,
    marginBottom: 20
  },
  slide: {
    flex: 1,
  },
  slideItem: {
    width,
    paddingHorizontal: 35,
  },
  slideImage: {
    resizeMode: 'contain',
    flex: 1,
    width: '100%',
    height: 'auto',
  },
  imageText: {
    textAlign: 'center',
    fontWeight: '300',
    color: '#606F7B',
    // fontFamily: roboto,
  }
});
