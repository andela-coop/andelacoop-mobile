import React from "react"
import { Platform, StatusBar, Text, View } from "react-native"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import * as Font from "expo-font"
import { useScreens } from "react-native-screens"
import { Asset } from 'expo-asset'

import DebugConfig from "./config/debug-config"
import { AppWithNavigationState } from "./navigation/redux-navigation"
import configureStore from "./redux/create-store"
import { Root } from "native-base";

useScreens()

export const { store, persistor } = configureStore()

class App extends React.Component {
	state = {
		isLoadingComplete: false
	}
	
	componentDidMount() {
		this.loadResourcesAsync()
	}
	
	render() {
		if (!this.state.isLoadingComplete) return null
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={<Text> Loading... </Text>}>
					<View style={{ flex: 1 }}>
						{
							Platform.OS === "ios"
								? <StatusBar barStyle="default" />
								: <StatusBar barStyle={"light-content"} translucent backgroundColor={'transparent'} />
						}
						<Root>
							<AppWithNavigationState />
						</Root>
					</View>
				</PersistGate>
			</Provider>
		)
	}
	
	loadResourcesAsync = async () => {
		await Promise.all([
			Asset.loadAsync([
			
			]),
			Font.loadAsync({
			
			}),
		])
		
		this.setState({ isLoadingComplete: true })
	}
	
	_handleLoadingError = (error) => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error)
	}
	
	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true })
	}
}

// allow reactotron overlay for fast design in dev mode
//@ts-ignore
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
