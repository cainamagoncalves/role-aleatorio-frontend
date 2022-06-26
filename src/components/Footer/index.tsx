import { Image, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles";

interface IFooterProps {
  isHomeScreen: boolean;
}

export function Footer({ isHomeScreen }: IFooterProps) {
  return (
    <>
      {isHomeScreen ? (
        <View style={styles.homeContainer}>
          <Image source={require("../../public/images/univespLogo.png")} style={styles.image} />
        </View>
      ) : (
        <View style={styles.otherPagesContainer}>
          <FontAwesome name="location-arrow" size={30} color="white"/>
          <FontAwesome name="book" size={30} color="white"/>
          <FontAwesome name="star" size={30} color="white"/>
          <FontAwesome name="money" size={30} color="white"/>
        </View>
      )}
    </>
  )
}