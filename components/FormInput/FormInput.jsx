import { TextInput, View, Text } from "react-native";
import { Txt } from "../../components/Txt/Txt.jsx";
import { s } from "./FormInput.style.js";
import { getRatingImage } from "../../services/ratings.js";

export function FormInput({ placeholder, value, setFunction }) {
  return (
    <TextInput
      style={s.inputText}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setFunction(text)}
    />
  );
}
