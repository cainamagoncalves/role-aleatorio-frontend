import { ImageBackground, Text, View } from "react-native";

import { styles } from "./styles"

interface IHeaderProps {
  isHomeScreen: boolean;
}

export function Header({ isHomeScreen }: IHeaderProps) {
  return (
    <>
      {isHomeScreen ? (
        <View>
          <ImageBackground
            source={require("../../public/images/headerImage.jpg")}
            style={styles.homeContainer}
            imageStyle={styles.image}
          >
            <Text style={styles.text}>Rolé Aleatório</Text>
          </ImageBackground>
        </View>
      ) : (
        <View>
          <ImageBackground
            source={require("../../public/images/headerImage.jpg")}
            style={styles.otherPagesContainer}
            imageStyle={styles.image}
          >
            <Text style={styles.text}>Rolé Aleatório</Text>
          </ImageBackground>
        </View>
      )}
    </>
  );
};
