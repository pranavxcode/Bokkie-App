import { useEffect } from "react"
import { AppState } from "react-native"
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import Intercom from "@intercom/intercom-react-native"

const App = () => {

  useEffect(() => {
    const intercomListner = AppState.addEventListener(
      'change',
      (nextAppState) =>
        nextAppState === 'active' && Intercom.handlePushMessage()
    );
    return () => intercomListner.remove();
  }
  , [])

  const registerUser = async () => {
    await Intercom.loginUnidentifiedUser()
  }

  useEffect(() => {
    registerUser();
  }, [])

  return (
    <HomeScreen />
  )
}

export default App
