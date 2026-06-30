import { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <Routes />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})