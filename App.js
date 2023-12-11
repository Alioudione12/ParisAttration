import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home";
import AttrationDetail from './src/screens/AttrationDetail';
import Gallery from './src/screens/Gallery';
import colors from './src/constantes/colors';
import Map from './src/screens/Map';



const Stack = createStackNavigator();
const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:colors.white,
  },
};

const App =()=> {
  return (
    <NavigationContainer theme={appTheme}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AttrationDetail" component={AttrationDetail} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Map" component={Map} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

