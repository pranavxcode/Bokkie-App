import Intercom from "@intercom/intercom-react-native"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, NativeModules } from "react-native"
import AppStatusBar from "../../components/global/AppStatusBar"
import ColorStrings from "../../strings/ColorStrings"
import FontFamilyNames from "../../strings/FontFamilyNames"
import FontSizes from "../../strings/FontSizes"
import ImagePathsStrings from "../../strings/ImagePathsStrings"
import Data, { DataProps } from "./BookieData"

export const dimensions = Dimensions.get("screen");
export const StatusBarHeight = NativeModules.StatusBarManager.HEIGHT;

const HomeScreen = () => {

  const openCarousel = async (carouselId: string) => {
    await Intercom.displayCarousel(carouselId);
  }

  const openMessanger = async () => {
    await Intercom.displayMessenger();
  }

  const renderPoints = (
    { item, index }: {
      item: DataProps,
      index: number
    }) => {
    return (
      <TouchableOpacity onPress={
        index == 0 ?
          openMessanger
          : openCarousel.bind(this, item.carouselId)
      }
        style={styles.keyPointDiv} >
        <Image
          style={[styles.keyPointLogo,index==1&&{
            height: dimensions.width*0.105,
            width: dimensions.width*0.19,
            marginHorizontal: 0
          }]}
          source={item.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.keyPointHeading}>
            {item.heading}
          </Text>
          <Text style={styles.keyPointSubtitle}>
            {item.subtitle}
          </Text>
        </View>
      </TouchableOpacity >
    )
  }

  return (
    <View style={[styles.screenStyle, styles.homeScreen]}>
      <Image
        source={ImagePathsStrings.bookieLogo}
        style={styles.bookieLogoStyle}
        resizeMode="contain" />
      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={renderPoints}
          keyExtractor={
            (
              item: DataProps,
              index: number
            ) => index.toString()}
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
          for Terms & Conditions
        </Text>
      </View>
      <AppStatusBar backgroundColor={ColorStrings.primaryBackground} />
    </View>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: ColorStrings.primaryBackground,
    paddingTop: StatusBarHeight
  },
  container: {
    flex: 1
  },
  termsAndConditionBar: {
    alignSelf: "center",
    marginBottom: 28,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  termsAndConditionbarText: {
    fontSize: FontSizes.small,
    fontFamily: FontFamilyNames.primaryFontRegular,
    color: ColorStrings.secondaryColorLight,
  },
  websiteButton: {
    fontSize: FontSizes.small,
    fontFamily: FontFamilyNames.primaryFontBold,
  },
  homeScreen: {
    flex: 1,
    justifyContent: "center",
  },
  bookieLogoStyle: {
    height: 57,
    width: dimensions.width * 0.88,
    alignSelf: "center",
    marginTop: dimensions.height * 0.035,
    marginBottom: dimensions.height * 0.04
  },
  keyPointDiv: {
    backgroundColor: ColorStrings.primaryBackground,
    marginVertical: dimensions.height * 0.0185,
    paddingVertical: dimensions.height * 0.022,
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
    width:dimensions.width*0.65,
    color: ColorStrings.secondaryColor
  },
  keyPointSubtitle: {
    fontFamily: FontFamilyNames.primaryFontRegular,
    fontSize: FontSizes.small,
    paddingVertical: 0.5,
    width:dimensions.width*0.65,
    color: ColorStrings.secondaryColorLight
  },
  keyPointLogo: {
    height: dimensions.width*0.105,
    width: dimensions.width*0.105,
    marginHorizontal: dimensions.width*0.045
  }
})

export default HomeScreen;
