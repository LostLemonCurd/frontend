import { View, Text, Pressable, Modal, TextInput } from "react-native";
import { Txt } from "../Txt/Txt.jsx";
import { s } from "./Login.style.js";
import { Searchbar } from "../../components/Searchbar/Searchbar.jsx";
import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

export function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigation();

  function handleLogin() {
    console.log("Login");
    console.log(username);
    console.log(password);
  }

  function goToRegister() {
    console.log("Register");
    nav.navigate("Register");
    setModalVisible(false);
  }

  return (
    <View style={s.container}>
      <Pressable
        style={[s.button, s.buttonClose]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={s.textStyle}>Se connecter / S'inscrire</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={s.centeredView}>
          <Txt style={s.inputTitle}>Nom d'utilisateur</Txt>
          <TextInput
            style={s.inputText}
            placeholder={"Username"}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Txt style={s.inputTitle}>Mot de Passe</Txt>
          <TextInput
            style={s.inputText}
            placeholder={"Mot de Passe"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Pressable style={[s.buttonOpen, s.button]} onPress={handleLogin}>
            <Text style={{ color: "black", fontWeight: "bold" }}>Login</Text>
          </Pressable>
          <Pressable
            style={[s.buttonClose, s.button]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
          </Pressable>
          <Text style={s.modalText}>Pas encore de compte?</Text>
          <Pressable onPress={goToRegister} style={[s.buttonOpen, s.button]}>
            <Text>S'enregistrer</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
