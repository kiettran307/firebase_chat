import React from 'react';
import {StackNavigator} from 'react-navigation';
import LoginScreen from './Screens/components/Main';
import IM from './Screens/IM';

import Home3 from './Screens/Home3';
export function getCurrentRoute (state, callback){
    state.index !== undefined ? getCurrentRoute(state.routes[state.index]) : state.routeName
    console.log("state.routeName: ", state.routeName);
    if(callback)
    {
        callback(state.routeName)
    }
    
}
export const HomeStack = StackNavigator({
    Login_screen: {
        screen:  LoginScreen,
        navigationOptions:{
            title: "Login"
        }
    },
    Home_screen: {
        screen: Home3,
         navigationOptions:{
            // headerLeft: null,
            title: "User List"
        }
    },
    IM_Screen:{
        screen: IM,
        navigationOptions:{
            title: "IM"
    }
}
})
