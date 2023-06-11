import { ActivityIndicator, View } from "react-native";
import React from "react";
import { s } from "./Loading.style";
import { Txt } from "../Txt/Txt";

export function Loading({}) {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Txt>Chargement...</Txt>
    </View>
  );
}
