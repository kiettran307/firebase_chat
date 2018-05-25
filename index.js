// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// import Main from './src/components/Main';

// export default class firebase_chat extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Main />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });

// AppRegistry.registerComponent('firebase_chat', () => firebase_chat);

// import './shim.js'
import { AppRegistry } from 'react-native'
import App from './App'
AppRegistry.registerComponent('firebase_chat', () => App);
