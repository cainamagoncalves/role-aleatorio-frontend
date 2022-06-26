import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 9,
    height: 50,
    width: 200,
    padding: 10,
    margin: 10,
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
});