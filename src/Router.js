import React, {Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';

const RouterComponent=()=>{
    return (
        <Router style={{ paddingTop:58 }}>
            <Scene key="login" component={LoginForm} title="Login" initial />
        </Router>
    )
}

export default RouterComponent;