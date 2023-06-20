import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "#F6E8EA",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignSelf: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
