import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    margin: 10,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    height: 100,
    width: 350,
  },

  otherPagesContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    height: 50,
    width: 350,
  },

  image: {
    borderRadius: 9,
    resizeMode: "stretch",
    opacity: 0.5
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    opacity: 1,
    color: "#ffffff"
  },
})