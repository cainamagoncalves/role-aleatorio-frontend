import React from "react";
import { SafeAreaView } from "react-native";
import { CategoryContent } from "../../components/Category/CategoryContent";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useChangeView } from "../../hooks/useChangeView";

import { styles } from "./styles";

interface ICultureProps {
  route: any;
};

export function Culture({ route }: ICultureProps) {

  const { showInfo, setShowInfo } = useChangeView();

  return (
    <SafeAreaView style={styles.container}>
      <Header isHomeScreen={false} />
      <CategoryContent route={route} showInfo={showInfo} />
      <Footer isCarouselOrHomeScreen={false} setShowImage={() => setShowInfo(false)} setShowInfo={() => setShowInfo(true)} />
    </SafeAreaView>
  );
};