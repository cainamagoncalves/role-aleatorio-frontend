import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Alert, SafeAreaView } from "react-native";
import { CategoryContent } from "../../components/Category/CategoryContent";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useChangeView } from "../../hooks/useChangeView";
import { api } from "../../service/implementationn/api";
import { handleRatePlace } from "../../utils/handle/handleRatePlaces";
import { IRootStackParamList } from "../../utils/routeTypes/route-types";

import { styles } from "./styles";

type OvernightRouteProps = NativeStackScreenProps<IRootStackParamList, "Culture">;

interface ICultureProps extends OvernightRouteProps { };

export function Culture({ route }: ICultureProps) {

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