import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../../theme";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center"
  },
});