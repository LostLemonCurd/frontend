import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  back_btn: {
    width: 30,
  },
  headerTxt: {
    flex: 1,
    alignItems: "center",
    marginRight: 30,
  },
  subtitle: {
    fontSize: 14,
  },
  forecastList: {
    marginTop: 50,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
