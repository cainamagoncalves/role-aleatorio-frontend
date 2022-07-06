import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

const imageW = width * 0.8;
const imageH = imageW * 1.54;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  
  image: {
    width: imageW,
    height: imageH,
    resizeMode: "cover",
    borderRadius: 16,
  },
});