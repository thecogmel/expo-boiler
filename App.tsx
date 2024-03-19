import React from 'react';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { config } from './src/config/gluestack-ui.config';
import Home from './src/screens/Home';
import StackScreen from './src/screens/StackScreen';

const App = () => {
  const colors = config.tokens.colors;
  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="light" backgroundColor={colors.primary500} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="StackScreen" component={StackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
