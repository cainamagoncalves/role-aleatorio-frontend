import { default as SnapCarousel } from "react-native-snap-carousel";
import { Dimensions, StatusBar, View } from "react-native";
import { CarouselItem } from "./CarouselItem";
import { styles } from "./styles";

interface ICarouselProps {
  data: {
    id: number;
    src: number;
    title: string;
    text: string;
  }[];
  navigation: any;
  category: string;
};


export function Carousel({ category, data, navigation }: ICarouselProps) {
  const { width } = Dimensions.get("screen");

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SnapCarousel
        layout={"default"}
        sliderWidth={width}
        itemWidth={width * 0.8}
        useScrollView={true}
        data={data}
        renderItem={({ item }) => {
          return <CarouselItem item={item} navigation={navigation} category={category} />
        }}
      />
    </View>
  );
};