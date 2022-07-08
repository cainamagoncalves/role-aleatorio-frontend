import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { CategoryContent } from "../../components/Category/CategoryContent";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useChangeView } from "../../hooks/useChangeView";
import { handleRatePlace } from "../../utils/handle/handleRatePlaces";
import { IRootStackParamList } from "../../utils/routeTypes/route-types";

import { styles } from "./styles";

type OvernightNavigatorProps = NativeStackScreenProps<IRootStackParamList, "Overnight">;

interface IOvernightProps extends OvernightNavigatorProps {};

export function Overnight({ route }: IOvernightProps) {

  const { id } = route.params;
  const { showInfo, setShowInfo } = useChangeView();

  return (
    <SafeAreaView style={styles.container}>
      <Header isHomeScreen={false} />
      <CategoryContent route={route} showInfo={showInfo} />
      <Footer isCarouselOrHomeScreen={false} setShowImage={() => setShowInfo(false)} setShowInfo={() => setShowInfo(true)} handleRatePlace={() => handleRatePlace(id)} />
    </SafeAreaView>
  );
};
