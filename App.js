import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Provider} from 'react-native-paper';
import {theme} from './src/theme';
import Btn from './src/component/basic/Btn';
import TInput from './src/component/basic/TInput';
import Heading from './src/component/basic/Heading';
import Paragraph from './src/component/basic/Paragraph';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './src/auth/GetStarted';
import Login from './src/auth/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GetStarted"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
