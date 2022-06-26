import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 10
  },

  image: {
    borderRadius: 5,
    resizeMode: "stretch",
    margin: 10,
    width: 300,
    height: 200
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