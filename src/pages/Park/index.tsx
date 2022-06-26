import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Park() {
  return (
    <SafeAreaView style={styles.container}>
      <Header isHomeScreen={false}/>
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.title}>Parque Prefeito Mário Covas</Text>
          <Image style={styles.image} source={require("../../public/images/marioCovasPark.jpg")} />
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin cursus vestibulum. Pellentesque eu dictum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tellus ut euismod auctor. Vivamus ultricies at nunc quis congue. In tempor erat faucibus, convallis lacus eget, pretium turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus gravida purus eget aliquet imperdiet. Curabitur eget leo tempor, tincidunt dolor ut, vulputate massa. Nulla et sem sit amet nisl scelerisque vehicula vitae sit amet eros. Maecenas pretium, ante ut fermentum consectetur, massa lacus porttitor mauris, sed bibendum libero ligula sed dui. Curabitur id finibus est, nec iaculis nunc. Quisque vitae congue massa. Curabitur malesuada fermentum nunc id dictum.
          </Text>
        </View>
      </ScrollView>
      <Footer isHomeScreen={false} />
    </SafeAreaView>
  );
};
