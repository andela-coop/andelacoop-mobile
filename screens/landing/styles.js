import images from '../../theme/images';

const { backgroundImage, logoWithText } = images;
const andelaBlue = '#3359DB';

export default {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
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
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
    width: 347,
    textAlign: 'center',
    marginBottom: 30
  },
  btn: {
    borderColor: andelaBlue,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopLeftRadius: 19,
    borderBottomRightRadius: 19,
  },
  btnText: {
    color: andelaBlue,
    letterSpacing: 3,
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
    fontVariant: ['small-caps'],
    fontWeight: "300",
    fontSize: 13,
    paddingHorizontal: 60,
    paddingVertical: 20,
    lineHeight: 19,
  },
  slideParent: {
    height: 381,
    width: '100%',
    marginBottom: 50
  },
  slide: {
    backgroundColor: 'red',
    flex: 1,
  },
  slideItem: {
    backgroundColor: 'blue',
    flex: 1,
  },
  slideItem2: {
    backgroundColor: 'green',
    width: '100%'
  },
  slideItem3: {
    backgroundColor: 'yellow',
    width: '100%'
  }
};
