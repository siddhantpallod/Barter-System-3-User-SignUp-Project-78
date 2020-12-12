import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
  }
}

const AppContainer = createAppContainer({
  LoginScreen : {screen : LoginScreen}
})



