import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from "react-native"
import { connect } from "react-redux"
import { images } from '../../theme';
import styles from './styles';

const {
  logoWithText, homeSliderImage1, homeSliderImage2, homeSliderImage3
} = images;

const sliderImages = [{
  uri: homeSliderImage1,
  text: 'Andela Cooperative helps you to unlock your financial smartness'
}, {
  uri: homeSliderImage2,
  text: 'Andela Cooperative helps you meet your financial goals'
}, {
  uri: homeSliderImage3,
  text: 'Andela Cooperative lets you apply for a loan from any where, at any time'
}];

class LandingPage extends Component {
  state= {
    currentSlide: 0
  }

  handleScroll = (e) => {
    const { width } = Dimensions.get('window');
    const scrollPosition = e.nativeEvent.contentOffset.x;
    if (scrollPosition === 0) {
      this.setState({ currentSlide: 0 });
    } else if (scrollPosition === width) {
      this.setState({ currentSlide: 1 });
    } else if (scrollPosition === width * 2) {
      this.setState({ currentSlide: 2 });
    }
  }
  
  render() {
    const { currentSlide } = this.state;
    return (
	    <View style={styles.container}>
		    <Image style={styles.image} source={logoWithText}/>
        <Text style={styles.headline}>
          save better &amp; get access to exclusive cooperate deals
        </Text>

        <View style={styles.slideContainer}>
          <ScrollView
            scrollEnabled
            horizontal
            pagingEnabled
            style={styles.slide}
            showsHorizontalScrollIndicator={false}
            onScroll={this.handleScroll}
            scrollEventThrottle={1000}
          >
          {
            sliderImages.map((image) =>
            <View key={image.uri} style={styles.slideItem}>
              <Image style={styles.slideImage} source={image.uri}/>
              <Text style={styles.imageText}>{image.text}</Text>
            </View>
            )
          }
          </ScrollView>
        </View>
        <View style={{
          flexDirection: 'row',
          width: 70,
          justifyContent: 'space-between'
        }}>
          {sliderImages.map((image, index) => <View style={{
            backgroundColor: currentSlide === index ? '#3359DB' : '#DAE1E7',
            height: 10,
            width: 10,
            borderRadius: 50,
            marginBottom: 50
          }} key={image.uri} />
          )}
        </View>
        <TouchableHighlight style={styles.btn}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableHighlight>
	    </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

})

const mapStateToProps = (state) => ({

})

export const LandingScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage)
