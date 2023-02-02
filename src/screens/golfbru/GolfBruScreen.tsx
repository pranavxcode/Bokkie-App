import { useEffect } from "react"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AppStatusBar from "../../components/global/AppStatusBar"
import ColorStrings from "../../strings/ColorStrings"
import FontFamilyNames from "../../strings/FontFamilyNames"
import FontSizes from "../../strings/FontSizes"
import ImagePathsStrings from "../../strings/ImagePathsStrings"
import CommonStyles, { dimensions } from "../../styles/CommonStyles"
import Data, { DataProps } from "./GolfBruData"

const GolfBruScreen = () => {



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
        source={ImagePathsStrings.golfbruLogo}
        style={styles.golfbruLogoStyle}
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
  golfbruLogoStyle: {
    height: dimensions.height * 0.082,
    width: dimensions.width * 0.85,
    alignSelf: "center",
    marginTop: dimensions.height * 0.025,
    marginBottom: dimensions.height * 0.053,
  },
  keyPointDiv: {
    backgroundColor: ColorStrings.primaryBackground,
    marginVertical: dimensions.height * 0.0162,
    paddingVertical: dimensions.height * 0.023,
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

export default GolfBruScreen;
