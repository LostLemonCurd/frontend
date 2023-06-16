import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  back_btn: {
    width: 30,
  },
  headerTxt: {
    flex: 1,
    alignItems: "center",
    marginRight: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
