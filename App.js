import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'
import AuthProvider from './src/contexts/auth';

export default class App extends Component {

  render() {
    return (
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer>
          <AuthProvider>
            <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})