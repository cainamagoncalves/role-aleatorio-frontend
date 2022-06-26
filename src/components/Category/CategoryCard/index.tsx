import { ImageBackground, Text, View } from "react-native";

import { styles } from "./styles";

interface ICategoryCardProps {
  category: string;
  navigation: any;
};

const categories = {
  CULTURA: {
    imageSrc: require("../../../public/images/culture.jpg"),
    navigationPath: "Culture",
  },
  NOTURNO: {
    imageSrc: require("../../../public/images/overnight.jpg"),
    navigationPath: "Overnight",
  },
  PARQUES: {
    imageSrc: require("../../../public/images/park.jpg"),
    navigationPath: "Park",
  },
}

export function CategoryCard({ category, navigation }: ICategoryCardProps) {

  const categoryInfo = categories[category.toUpperCase() as keyof typeof categories];

  return (
    <View>
      {categoryInfo && (
        <ImageBackground
          source={categoryInfo.imageSrc}
          style={styles.container}
          imageStyle={styles.image}
        >
          <Text onPress={() => navigation.navigate(categoryInfo.navigationPath)} style={styles.text}>{category}</Text>
        </ImageBackground>
      )}
    </View>
  );
};
