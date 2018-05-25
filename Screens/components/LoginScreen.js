import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
export default class LoginScreen extends Component {
 static propTypes = {
    onTapped: PropTypes.func,
}
constructor(props) {
  super(props);
  this.state = {
    text:''
  };
}

onBtnSubmitPress = (userName) => {
  this.props.onTapped(userName);
}

render() {
    return (
      <Wallpaper>
        <Logo />
        <Form onButtonPress={this.onBtnSubmitPress} screenName = 'LoginScreen'/>
        <SignupSection />
      </Wallpaper>
    );
  }
}
