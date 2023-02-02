import { StatusBar } from "react-native"

const AppStatusBar = ({ backgroundColor = "transparent", translucent = true }) => {
    return (
        <StatusBar
            backgroundColor={backgroundColor}
            translucent={translucent}
            barStyle={"dark-content"}
        />
    )
}

export default AppStatusBar
