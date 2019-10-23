import React, { Component } from "react"
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native"
import { connect } from "react-redux"
import images from '../../theme/images';
import styles from './styles';

const { backgroundImage, logoWithText } = images;

class LandingPage extends Component {

  render() {
    return (
	    <View style={styles.container}>
		    <Image style={styles.image} source={logoWithText}/>
        <Text style={styles.headline}>save better &amp; get access to exclusive cooperate deals</Text>
        <View style={styles.slideParent}>
          <ScrollView horizontal={true} style={styles.slide}>
            <View style={styles.slideItem}><Text>okok</Text></View>
            {/* <View style={styles.slideItem2}><Text>okok</Text></View>
            <View style={styles.slideItem3}><Text>okok</Text></View> */}
          </ScrollView>
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
