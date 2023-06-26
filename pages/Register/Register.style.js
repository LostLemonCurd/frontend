import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  search: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6E8EA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
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
  back_btn: {
    width: 30,
  },
  form: {
    marginVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  inputText: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    width: 300,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  buttonOpen: {
    backgroundColor: "#5ee863",
  },
  buttonClose: {
    backgroundColor: "#e03b28",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
