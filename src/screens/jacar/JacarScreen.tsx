import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AppStatusBar from "../../components/global/AppStatusBar"
import ColorStrings from "../../strings/ColorStrings"
import FontFamilyNames from "../../strings/FontFamilyNames"
import FontSizes from "../../strings/FontSizes"
import ImagePathsStrings from "../../strings/ImagePathsStrings"
import CommonStyles, { dimensions } from "../../styles/CommonStyles"
import Data, { DataProps } from "./JacarData"

const JacarScreen = () => {

  const renderPoints = ({ item }: { item: DataProps, index: number }) => {
    return <View style={styles.keyPointDiv}>
      <Image
        style={styles.keyPointLogo}
        source={item.image} />
      <View>
        <Text style={styles.keyPointHeading}>
          {item.heading}
        </Text>
        <Text style={styles.keyPointSubtitle}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  }

  return (
    <View style={[styles.screenStyle, styles.homeScreen]}>
      <Image
        source={ImagePathsStrings.jacarLogo}
        style={styles.jacarLogoStyle}
        resizeMode="contain" />
      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={renderPoints}
          keyExtractor={(item: DataProps, index: number) => index.toString()}
          bounces={false}
        />
      </View>
      <View style={styles.termsAndConditionBar}>
        <Text style={styles.termsAndConditionbarText}>
          Visit our
        </Text>
        <TouchableOpacity>
          <Text style={[styles.termsAndConditionbarText, styles.websiteButton]}>
            {`${" website "}`}
          </Text>
        </TouchableOpacity>
        <Text style={styles.termsAndConditionbarText}>
          for tems and conditions
        </Text>
      </View>
      <AppStatusBar backgroundColor={ColorStrings.primaryBackground} />
    </View>
  )
}

const styles = StyleSheet.create({
  ...CommonStyles,
  homeScreen: {
    flex: 1,
    justifyContent: "center",
  },
  jacarLogoStyle: {
    height: dimensions.height * 0.115,
    width: dimensions.width * 0.7,
    alignSelf: "center",
    marginTop: dimensions.height * 0.01,
    marginBottom: dimensions.height * 0.035,
  },
  keyPointDiv: {
    backgroundColor: ColorStrings.primaryBackground,
    marginVertical: dimensions.height * 0.0185,
    paddingVertical: dimensions.height * 0.021,
    marginHorizontal: 25,
    borderRadius: 9,
    shadowColor: ColorStrings.secondaryColor,
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    flexDirection: "row",
    elevation: 8,
    alignItems: "center"
  },
  keyPointHeading: {
    fontFamily: FontFamilyNames.primaryFontBold,
    fontSize: FontSizes.medium,
    paddingVertical: 2,
    color: ColorStrings.secondaryColor
  },
  keyPointSubtitle: {
    fontFamily: FontFamilyNames.primaryFontRegular,
    fontSize: FontSizes.small,
    paddingVertical: 0.5,
    color: ColorStrings.secondaryColorLight
  },
  keyPointLogo: {
    height: 45,
    width: 45,
    marginHorizontal: 15
  }
})

export default JacarScreen;
