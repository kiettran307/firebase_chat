/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {HomeStack} from './Router'
import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {

  render() {
    return (
      <HomeStack />
    );
    // return (
    //   <View style={styles.container}>
    //     <Button title='Connect' onPress={this.connect} />
    //     <Text style={styles.welcome}>Status:</Text>
    //     <Text style={styles.instructions}>{status}</Text>
    //     <Text style={styles.welcome}>Message:</Text>
    //     <Text style={styles.instructions}>{message}</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
