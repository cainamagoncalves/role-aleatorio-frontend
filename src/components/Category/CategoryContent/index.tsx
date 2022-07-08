import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RouteProps } from "../../../utils/routeTypes/route-types";

import { styles } from "./styles";

interface ICategoryContentProps extends RouteProps {
  showInfo: boolean;
}

export function CategoryContent({ route, showInfo }: ICategoryContentProps) {

  const { src, title, text } = route.params;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {showInfo ? (
            <>
              <Text style={styles.title}>{title}</Text>
              <Image style={styles.imageWithContent} source={{ uri: src }} />
              <Text style={styles.paragraph}>
                {text}
              </Text>
            </>
          ) : (
            <Image style={styles.imageWithoutContent} source={{ uri: src }} />
          )}
        </View>
      </ScrollView>
    </>
  );
};