import React, { Component } from "react"
import {
  View,
  Text
} from "react-native"
import { connect } from "react-redux"

const ROOT = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

class LandingPage extends Component {

  render() {
    return (
	    <View
	      style={ROOT}
	    >
		    <Text>Hello</Text>
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
