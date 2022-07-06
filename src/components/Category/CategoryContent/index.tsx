import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";

interface ICategoryContentProps {
  route: any;
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
              <Image style={styles.imageWithContent} source={src} />
              <Text style={styles.paragraph}>
                {text}
              </Text>
            </>
          ) : (
            <Image style={styles.imageWithoutContent} source={src} />
          )}
        </View>
      </ScrollView>
    </>
  );
};