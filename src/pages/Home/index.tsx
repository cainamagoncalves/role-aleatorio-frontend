import React from "react";
import { View } from "react-native";
import { CategoryCard } from "../../components/Category/CategoryCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { styles } from "./styles"

export function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header isHomeScreen={true}/>
      <CategoryCard category="Cultura" navigation={navigation} />
      <CategoryCard category="Parques" navigation={navigation} />
      <CategoryCard category="Noturno" navigation={navigation} />
      <Footer isCarouselOrHomeScreen={true} />
    </View>
  );
}