import { View } from "react-native";
import { Carousel } from "../../../components/Carousel";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { styles } from "../styles";

interface ICultureCarouselProps {
  navigation: any;
}

const data = [
  { id: 0, src: require("../../../public/images/casa-das-rosas.jpg"), title: "Casa das Rosas", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin cursus vestibulum. Pellentesque eu dictum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tellus ut euismod auctor. Vivamus ultricies at nunc quis congue. In tempor erat faucibus, convallis lacus eget, pretium turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus gravida purus eget aliquet imperdiet. Curabitur eget leo tempor, tincidunt dolor ut, vulputate massa. Nulla et sem sit amet nisl scelerisque vehicula vitae sit amet eros. Maecenas pretium, ante ut fermentum consectetur, massa lacus porttitor mauris, sed bibendum libero ligula sed dui. Curabitur id finibus est, nec iaculis nunc. Quisque vitae congue massa. Curabitur malesuada fermentum nunc id dictum." },
  { id: 1, src: require("../../../public/images/overnight.jpg"), title: "Parque noturno", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin cursus vestibulum. Pellentesque eu dictum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tellus ut euismod auctor. Vivamus ultricies at nunc quis congue. In tempor erat faucibus, convallis lacus eget, pretium turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus gravida purus eget aliquet imperdiet. Curabitur eget leo tempor, tincidunt dolor ut, vulputate massa. Nulla et sem sit amet nisl scelerisque vehicula vitae sit amet eros. Maecenas pretium, ante ut fermentum consectetur, massa lacus porttitor mauris, sed bibendum libero ligula sed dui. Curabitur id finibus est, nec iaculis nunc. Quisque vitae congue massa. Curabitur malesuada fermentum nunc id dictum."  },
  { id: 2, src: require("../../../public/images/marioCovasPark.jpg"), title: "Parque Mario Covas", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin cursus vestibulum. Pellentesque eu dictum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tellus ut euismod auctor. Vivamus ultricies at nunc quis congue. In tempor erat faucibus, convallis lacus eget, pretium turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus gravida purus eget aliquet imperdiet. Curabitur eget leo tempor, tincidunt dolor ut, vulputate massa. Nulla et sem sit amet nisl scelerisque vehicula vitae sit amet eros. Maecenas pretium, ante ut fermentum consectetur, massa lacus porttitor mauris, sed bibendum libero ligula sed dui. Curabitur id finibus est, nec iaculis nunc. Quisque vitae congue massa. Curabitur malesuada fermentum nunc id dictum."  }
];

export function CultureCarousel({ navigation }: ICultureCarouselProps) {
  return (
    <View style={styles.container}>
      <Header isHomeScreen={false} />
      <Carousel data={data} navigation={navigation} category="Cultura" />
      <Footer isCarouselOrHomeScreen={true}/>
    </View>
  );
};
