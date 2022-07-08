import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { CategoryCard } from "../../components/Category/CategoryCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../service/implementationn/api";
import { ICategoryDTO } from "../../utils/dto/ICategoryDTO";
import { CategoryNavigationProps } from "../../utils/routeTypes/route-types";
import { styles } from "./styles"

interface IHomeProps extends CategoryNavigationProps { };

export function Home({ navigation }: IHomeProps) {
  const [categories, setCategories] = useState<ICategoryDTO[]>([])

  useEffect(() => {
    async function setCategoriesEffect() {
      const categories = await api.get<ICategoryDTO[]>("/category");
      setCategories(categories);
    }

    setCategoriesEffect();
  }, [])

  return (
    <View style={styles.container}>
      <Header isHomeScreen={true} />
      {categories.map(category => (
        <CategoryCard key={String(category.id)} category={category} navigation={navigation} />
        ))}
      <Footer isCarouselOrHomeScreen={true} />
    </View>
  );
}