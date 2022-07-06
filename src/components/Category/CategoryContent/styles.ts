import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../theme";

const { width } = Dimensions.get("screen");

const imageW = width * 0.80;
const imageH = imageW * 1.54;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 10
  },

  imageWithContent: {
    borderRadius: 5,
    resizeMode: "stretch",
    margin: 10,
    width: width * 0.80,
    height: width * 0.80
  },

  imageWithoutContent: {
    borderRadius: 5,
    resizeMode: "stretch",
    margin: 10,
    width: imageW,
    height: imageH,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    opacity: 1,
    textAlign: "center",
    color: "#ffffff"
  },

  paragraph: {
    fontSize: 18,
    opacity: 1,
    textAlign: "center",
    color: "#ffffff"
  },
});