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
import { FormInput } from "../../components/FormInput/FormInput.jsx";

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
          <FormInput
            placeholder={"Username"}
            value={username}
            setFunction={setUsername}
          />
          <FormInput
            placeholder={"Mot de Passe"}
            value={password}
            setFunction={setPassword}
          />
          <FormInput
            placeholder={"Prénom"}
            value={firstname}
            setFunction={setFirstname}
          />
          <FormInput
            placeholder={"Nom"}
            value={lastname}
            setFunction={setLastname}
          />
          <FormInput placeholder={"Age"} value={age} setFunction={setAge} />
        </View>
        <Pressable style={[s.buttonOpen, s.button]} onPress={handleLogin}>
          <Text style={{ color: "black", fontWeight: "bold" }}>Register</Text>
        </Pressable>
      </View>
    </Container>
  );
}
