import React from 'react';

import HomeScreen from './Components/HomeScreen';
import { BooksDataProvider } from './Context/BooksData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import BookScreen from './Components/BookScreen';

const Stack = createNativeStackNavigator();
function App() {

  return (
    <BooksDataProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="BookScreen" options={{ headerBackVisible: true, }} component={BookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BooksDataProvider>

  );
}


export default App;
