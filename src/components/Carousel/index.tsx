import { default as SnapCarousel } from "react-native-snap-carousel";
import { Dimensions, StatusBar, View } from "react-native";
import { CarouselItem } from "./CarouselItem";
import { styles } from "./styles";
import { NavigationProps } from "../../utils/routeTypes/route-types";
import { IPlaceDTO } from "../../utils/dto/IPlaceDTO";

interface ICarouselProps extends NavigationProps {
  places: IPlaceDTO[];
  category: string;
};


export function Carousel({ category, places, navigation }: ICarouselProps) {
  const { width } = Dimensions.get("screen");

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SnapCarousel
        layout={"default"}
        sliderWidth={width}
        itemWidth={width * 0.8}
        useScrollView={true}
        data={places}
        renderItem={({ item }) => {
          return <CarouselItem place={item} navigation={navigation} category={category} />
        }}
      />
    </View>
  );
};