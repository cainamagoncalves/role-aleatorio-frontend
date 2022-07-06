import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const imageW = width * 0.8;
const imageH = imageW * 1.54;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  
  text: {
    fontWeight: "bold",
    fontSize: 20,
    opacity: 1,
    color: "#ffffff"
  },
});