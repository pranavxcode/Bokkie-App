// import { useEffect } from "react"
// import { Alert } from "react-native"
// import messaging from "@react-native-firebase/messaging"
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"

const App = () => {

  // useEffect(() => {

  // getDeviceToken();

  // const unsubscribe = messaging().onMessage(async remoteMessage => {
  //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  // });

  // return unsubscribe;

  // }, [])

  // const getDeviceToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log("tokenn\n\n");
  //   console.log(token)
  // }

  return (
    <HomeScreen />
  )
}

export default App
