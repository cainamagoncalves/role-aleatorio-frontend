import { Image, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles";

interface IFooterProps {
  isCarouselOrHomeScreen: boolean;
  setShowInfo?: () => void;
  setShowImage?: () => void;
  handleRatePlace?: () => Promise<void>;
}

export function Footer({ isCarouselOrHomeScreen, setShowInfo, setShowImage, handleRatePlace }: IFooterProps) {
  return (
    <>
      {isCarouselOrHomeScreen ? (
        <View style={styles.homeContainer}>
          <Image source={require("../../public/images/univespLogo.png")} style={styles.image} />
        </View>
      ) : (
        <View style={styles.otherPagesContainer}>
          <FontAwesome onPress={setShowImage} name="location-arrow" size={30} color="white"/>
          <FontAwesome onPress={setShowInfo} name="book" size={30} color="white"/>
          <FontAwesome onPress={handleRatePlace} name="star" size={30} color="white"/>
          <FontAwesome name="money" size={30} color="white"/>
        </View>
      )}
    </>
  )
}