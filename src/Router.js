import React, {Component} from 'react';
import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux';

import LoginForm from './components/loginComponents/LoginForm';
import SignUp from './components/loginComponents/SignUp';
import ForgotPassword from './components/loginComponents/ForgotPassword';
import Welcome from './components/Welcome';

import Dashboard from './components/dash/Dashboard';

import storage from './common/storage';



import * as theme from './styles/colors';

const RouterComponent=()=>{
    // load
    storage.load({
        key: 'loginState',
    }).then(data => {
        console.log(data);
        if(data.current_user.uid){
            Actions.main();
        }
    }).catch(err => {
        // any exception including data not found
        // goes to catch()
        console.log(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    });



    return (
        <Router
            titleStyle={{color:theme.default.fontColor}}
            navigationBarStyle={{backgroundColor: theme.default.primary}}  style={{  flex:1  }}>
            <Scene key="auth" initial>
                <Scene key="welcome" component={Welcome} title="Login or Register"  initial />
                <Scene key="login" component={LoginForm} title="Login"  />
                <Scene key="signup" component={SignUp} title="Registration"  />
                <Scene key="forgotPassword" component={ForgotPassword} title="Forgot Password"  />
            </Scene>

            <Scene key="main" type={ActionConst.RESET}>
                <Scene key="dash" component={Dashboard} title="Dashboard"   />
            </Scene>
        </Router>
    )
};

export default RouterComponent;