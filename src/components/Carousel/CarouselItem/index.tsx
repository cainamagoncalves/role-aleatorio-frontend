import { Image, TouchableOpacity, View } from "react-native";
import { IPlaceDTO } from "../../../utils/dto/IPlaceDTO";
import { NavigationProps } from "../../../utils/routeTypes/route-types";

import { styles } from "./styles";

interface ICarouselItemProps extends NavigationProps {
  place: IPlaceDTO;
  category: string;
};

function switchNavigationPath(category: string) {
  switch (category) {
    case "Cultura":
      return "Culture";
    case "Noturno":
      return "Overnight";
    case "Parque":
      return "Park";
    default:
      return "Park"
  };
};

export function CarouselItem({ category, place, navigation }: ICarouselItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(switchNavigationPath(category), {
        id: place.id,
        src: place.imagem,
        title: place.name,
        text: place.description,
      })}>
        <Image source={{ uri: place.imagem }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
