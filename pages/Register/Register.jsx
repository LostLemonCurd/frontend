import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./Register.style.js";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Container/Container.jsx";

export function Register() {
  const nav = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={s.header}>
      {backButton}
      <View style={s.headerTxt}>
        <Txt style={s.title}>S'inscrire</Txt>
      </View>
    </View>
  );

  function handleLogin() {
    console.log("Register");
    console.log(username);
    console.log(password);
    console.log(firstname);
    console.log(lastname);
    console.log(age);
  }

  return (
    <Container>
      <View style={s.container}>
        {header}
        <View style={s.form}>
          <TextInput
            style={s.inputText}
            placeholder={"Username"}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={s.inputText}
            placeholder={"Mot de Passe"}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={s.inputText}
            placeholder={"Prénom"}
            value={firstname}
            onChangeText={(text) => setFirstname(text)}
          />
          <TextInput
            style={s.inputText}
            placeholder={"Nom"}
            value={lastname}
            onChangeText={(text) => setLastname(text)}
          />
          <TextInput
            style={s.inputText}
            placeholder={"Age"}
            value={age}
            onChangeText={(text) => setAge(text)}
          />
        </View>
        <Pressable style={[s.buttonOpen, s.button]} onPress={handleLogin}>
          <Text style={{ color: "black", fontWeight: "bold" }}>Register</Text>
        </Pressable>
      </View>
    </Container>
  );
}
