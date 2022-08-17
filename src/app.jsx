import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Landing } from "./screen";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
export const App = () => {
  const [fontsLoaded] = useFonts({
    "Pacifico-Regular": require("../assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Please Wait</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
