import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColourPalette from './screens/ColourPalette';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColourPalette" component={ColourPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App