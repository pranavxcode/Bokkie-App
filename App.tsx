import { useEffect } from "react"
import { AppState, Platform } from "react-native"
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import Intercom from "@intercom/intercom-react-native"
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    Platform.OS == "android" && SplashScreen.hide();
    registerUser();
    const intercomListner = AppState.addEventListener(
      'change',
      (nextAppState) =>
        nextAppState === 'active' && Intercom.handlePushMessage()
    );
    return () => intercomListner.remove();
  }, [])

  const registerUser = async () => {
    try {
      await Intercom.registerUnidentifiedUser()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomeScreen />
  )
}

export default App
