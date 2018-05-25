import React, {Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	View,
	Alert
} from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
// import SecondScreen from './SecondScreen';
export default class Main extends Component {
onConfirmBtnPress = (e) => {
		 this.props.navigation.navigate("Home_screen", { parameters: { name: e, age: 28 } });
	}

  render() {
	  return (
			<LoginScreen  onTapped={this.onConfirmBtnPress}/>
	  );
	}
}