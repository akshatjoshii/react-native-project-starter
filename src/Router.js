import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import LoginForm from './components/loginComponents/LoginForm';
import SignUp from './components/loginComponents/SignUp';
import ForgotPassword from './components/loginComponents/ForgotPassword';
import Welcome from './components/Welcome';

import * as theme from './styles/colors';

const RouterComponent=()=>{
    return (
        <Router
            titleStyle={{color:theme.default.fontColor}}
            navigationBarStyle={{backgroundColor: theme.default.primary}} style={{ paddingTop:58, flex:1  }}>
            <Scene key="welcome" component={Welcome} title="Login or Register" initial />
            <Scene key="login" component={LoginForm} title="Login"  />
            <Scene key="signup" component={SignUp} title="Registration"  />
            <Scene key="forgotPassword" component={ForgotPassword} title="Forgot Password"  />
        </Router>
    )
};

export default RouterComponent;