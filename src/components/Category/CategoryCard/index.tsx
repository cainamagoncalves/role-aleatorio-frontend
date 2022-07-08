import { ImageBackground, Text, View } from "react-native";
import { ICategoryDTO } from "../../../utils/dto/ICategoryDTO";
import { CategoryNavigationProps, IRootStackParamList } from "../../../utils/routeTypes/route-types";

import { styles } from "./styles";

interface ICategoryCardProps extends CategoryNavigationProps {
  category: ICategoryDTO;
};

const categories = {
  CULTURA: {
    imageSrc: require("../../../public/images/culture.jpg"),
    navigationPath: "CultureCarousel",
  },
  NOTURNO: {
    imageSrc: require("../../../public/images/overnight.jpg"),
    navigationPath: "OvernightCarousel",
  },
  PARQUES: {
    imageSrc: require("../../../public/images/park.jpg"),
    navigationPath: "ParkCarousel",
  },
}

export function CategoryCard({ category, navigation }: ICategoryCardProps) {

  const categoryInfo = categories[category.name.toUpperCase() as keyof typeof categories];

  return (
    <View>
      {categoryInfo && (
        <ImageBackground
          source={categoryInfo.imageSrc}
          style={styles.container}
          imageStyle={styles.image}
        >
          <Text onPress={() => navigation.navigate(categoryInfo.navigationPath as keyof Pick<IRootStackParamList, "CultureCarousel" | "OvernightCarousel" | "ParkCarousel">, {
            categoryId: category.id,
          })} style={styles.text}>{category.name}</Text>
        </ImageBackground>
      )}
    </View>
  );
};
