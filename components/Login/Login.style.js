import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  search: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    backgroundColor: "#F6E8EA",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    gap: 20,
    paddingHorizontal: 40,
  },
  inputTitle: {
    alignSelf: "flex-start",
  },
  inputText: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    width: 300,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
