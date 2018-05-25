import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'
import styles from '../styles'
const logo = require('../images/kiet.jpg')
const logo1 = require('../images/1.png')
const logo2= require('../images/2.png')
const logo3 = require('../images/3.png')
// const logo = require('../../images/default-portrait.png')

const { width, height } = Dimensions.get('window')
export default class Example extends PureComponent {
  constructor(props) {
    super(props)
  }
  renderElement(){
    if(this.props.item == 'Kiet')
       return <Thumbnail square source={logo} style={styles.gridThumb} />;
    if(this.props.item == 'Tom')
       return <Thumbnail square source={logo1} style={styles.gridThumb} />;
    if(this.props.item == 'Kenvin')
       return <Thumbnail square source={logo2} style={styles.gridThumb} />;
    if(this.props.item == 'Kathy')
       return <Thumbnail square source={logo3} style={styles.gridThumb} />;
    return null;
 }
  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <TouchableOpacity onPress={() => this.props.onPress('GridView', rowID, rowData)}>
        <View style={{ margin: 0.5, width: width / 3, paddingBottom: 15 }}>
        {this.renderElement()}
          {/* <Thumbnail square source={logo} style={styles.gridThumb} /> */}
          {/* <Text style={styles.gridText}>ID: {rowID}</Text> */}
          <Text  style={ styles.gridText}>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
