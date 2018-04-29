import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import MyItems from './MyItems';

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                  <Scene key="login" component={LoginScreen} title="Login"  initial={true}/>
                  <Scene key="signup" component={SignUpScreen} title="Register"/>
                  <Scene key="myitems" component= {MyItems} title="My Items"/>
                </Stack>
             </Router>
            )
    }
}