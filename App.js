import { s } from "./App.style.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { BooksList } from "./pages/BooksList/BooksList";
import { BookDetails } from "./pages/BookDetails/BookDetails";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
import { useContext } from "react";
const Stack = createNativeStackNavigator();
const navTheme = {
  colors: { backgroundColor: "transparent" },
};

export default function App() {
  return (
    <LoadingProvider>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "fade" }}
          initialRouteName="Home"
        >
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={BooksList} name="BooksList" />
          <Stack.Screen component={BookDetails} name="BookDetails" />
        </Stack.Navigator>
      </NavigationContainer>
    </LoadingProvider>
  );
}
