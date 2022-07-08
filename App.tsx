import { useFonts, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/pages/Home';
import { Culture } from './src/pages/Culture';
import { Park } from './src/pages/Park';
import { Overnight } from './src/pages/Overnight';
import { CultureCarousel } from './src/pages/Culture/CultureCarousel';
import { ParkCarousel } from './src/pages/Park/ParkCarousel';
import { OvernightCarousel } from './src/pages/Overnight/OvernightCarousel';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular
  });

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Início" }}></Stack.Screen>
        <Stack.Screen name="Culture" component={Culture} options={{ title: "Cultura" }}></Stack.Screen>
        <Stack.Screen name="CultureCarousel" component={CultureCarousel} options={{ title: "Cultura" }}></Stack.Screen>
        <Stack.Screen name="Park" component={Park} options={{ title: "Parques" }}></Stack.Screen>
        <Stack.Screen name="ParkCarousel" component={ParkCarousel} options={{ title: "Parques" }}></Stack.Screen>
        <Stack.Screen name="Overnight" component={Overnight} options={{ title: "Noturno" }}></Stack.Screen>
        <Stack.Screen name="OvernightCarousel" component={OvernightCarousel} options={{ title: "Noturno" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
