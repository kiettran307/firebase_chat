import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'
import styles from '../styles'
const logo = require('../images/kiet.jpg')
const logo1 = require('../images/1.png')
const logo2= require('../images/2.png')
const logo3 = require('../images/3.png')
// const logo = require('../../images/default-portrait.png')

export default class Example extends PureComponent {
  constructor(props) {
    super(props)
    // this.state = {
    //   logo: '../../images/default-portrait.png'
    // }
  }

  renderElement(){
    if(this.props.item == 'Kiet')
       return <Thumbnail square source={logo} style={styles.thumb} />;
    if(this.props.item == 'Tom')
       return <Thumbnail square source={logo1} style={styles.thumb} />;
    if(this.props.item == 'Kenvin')
       return <Thumbnail square source={logo2} style={styles.thumb} />;
    if(this.props.item == 'Kathy')
       return <Thumbnail square source={logo3} style={styles.thumb} />;
    return null;
 }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <ListItem thumbnail>
        <Left>
          {/* <Thumbnail square source={this.props.item.logo} style={styles.thumb} /> */}
          {this.renderElement()}
        </Left>
        <Body style={{ borderBottomWidth: 0 }}>
        <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('chat', rowID, rowData)}
              style={styles.rightBtn}
            >
          {/* <Text>RowID: {rowID}</Text> */}
          <Text style = {{color :"red"}}>{rowData}</Text>
          </Button>
        </Body>
        <Right style={{ borderBottomWidth: 0 }}>
          <View style={styles.rightBtnGroup}>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('chat', rowID, rowData)}
              style={styles.rightBtn}
            >
              <Icon name="chatbubbles" style={styles.rightBtnIcon} />
            </Button>
          </View>
        </Right>
      </ListItem>
    )
  }
}
