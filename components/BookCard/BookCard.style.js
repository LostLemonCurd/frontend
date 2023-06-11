import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 128,
    height: 190,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "#4F6272",
  },
  author: {
    fontSize: 14,
    color: "#4F6272",
    fontWeight: "bold",
  },
});
