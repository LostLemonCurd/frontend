import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  image: {
    width: 128,
    height: 190,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  author: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  detailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
  },
  category: {
    alignSelf: "center",
    backgroundColor: "#C54444",
    color: "white",
    fontWeight: "bold",
    padding: 8,
    fontSize: 14,
    borderRadius: 10,
    overflow: "hidden",
  },
  detail: {
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  online: {
    alignSelf: "center",
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    borderColor: "black",
    borderWidth: 2,
  },
  description: {
    marginHorizontal: 20,
  },
});
