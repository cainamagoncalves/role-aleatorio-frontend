import { useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { Carousel } from "../../../components/Carousel";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { useFetch } from "../../../hooks/useCategory";
import { ICategoryDTO } from "../../../utils/dto/ICategoryDTO";
import { CategoryRouteProps, NavigationProps } from "../../../utils/routeTypes/route-types";
import { styles } from "../styles";

interface ICultureCarouselProps extends NavigationProps, CategoryRouteProps { };

export function CultureCarousel({ navigation, route }: ICultureCarouselProps) {

  const { categoryId } = route.params;
  const { data: category, isFetching, error } = useFetch<ICategoryDTO>(`/category/${categoryId}`)
  
  useEffect(() => {
    if (error) {
      Alert.alert("Ocorreu um erro ao consultar uma categoria!")
    }
  }, [Alert, error])

  return (
    <View style={styles.container}>
      <Header isHomeScreen={false} />
      {isFetching ? (
        <Text style={{ flex: 1, color: "#fff" }}>Carregando...</Text>
      ) : (
        category ? (
          <Carousel places={category.places} navigation={navigation} category="Cultura" />
        ) : (
          null
        )
      )}
      <Footer isCarouselOrHomeScreen={true} />
    </View>
  );
};
