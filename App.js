import { s } from "./App.style.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { BooksList } from "./pages/BooksList/BooksList";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: { backgroundColor: "transparent" },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
        initialRouteName="Home"
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={BooksList} name="BooksList" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
