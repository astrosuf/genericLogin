import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Index from './src/index.js';

export default class genericLogin extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('genericLogin', () => genericLogin);
