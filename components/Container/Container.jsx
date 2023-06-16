import { ImageBackground, Text, View } from "react-native";
import { s } from "./Container.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as React from "react";

export function Container({ children, style }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[s.container, style]}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}
