import { View } from "react-native";
import { Carousel } from "../../../components/Carousel";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { styles } from "../styles";

interface IParkCarouselProps {
  navigation: any;
}

const data = [
  { id: 0, src: require("../../../public/images/casa-das-rosas.jpg") },
  { id: 1, src: require("../../../public/images/overnight.jpg") },
  { id: 2, src: require("../../../public/images/marioCovasPark.jpg") }
];

export function ParkCarousel({ navigation }: IParkCarouselProps) {
  return (
    <View style={styles.container}>
      <Header isHomeScreen={false} />
      <Carousel data={data} navigation={navigation} category="Parque" />
      <Footer isCarouselOrHomeScreen={true}/>
    </View>
  );
};
