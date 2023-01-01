import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from "nativewind";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({
  default: "native",
})
export default function App() {


  const [fontsLoaded] = useFonts({

    'Urbanist': require('./assets/fonts/Urbanist.otf'),
  })

  if (!fontsLoaded) {
    return (
      <View />
    )
  } else {

  return (
    <NavigationContainer>
      {/* Screens */}
     <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>

      </NavigationContainer>
  )
}}
