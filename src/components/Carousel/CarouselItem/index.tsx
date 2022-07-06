import { Image, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ICarouselItemProps {
  item: {
    src: number;
    title: string;
    text: string;
  };
  navigation: any;
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
  };
};

export function CarouselItem({ category, item, navigation }: ICarouselItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(switchNavigationPath(category), {
        src: item.src,
        title: item.title,
        text: item.text,
      })}>
        <Image source={item.src} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};
