import 'react-native-gesture-handler';
import { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'
import AuthProvider from './src/contexts/auth';

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})