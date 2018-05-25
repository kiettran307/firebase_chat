import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { Platform,StyleSheet, Text, View } from 'react-native';

export default class IM extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      parameters: this.props.navigation.state.params.parameters,
      messages: ''
    };
  }

  componentWillMount() {
  this.setState({
    messages: [
      {
        _id: 1,
        // text: 'Hello developer' ,
        text:'Hello '+ this.state.parameters.name,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
    ],
  })
}

onSend(messages = []) {
  this.setState(previousState => ({
    messages: GiftedChat.append(previousState.messages, messages),
  }))
}
render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        // messages = {text}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
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
