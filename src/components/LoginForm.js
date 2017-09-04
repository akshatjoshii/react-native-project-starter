/**
 * Created by Akshat on 05-09-2017.
 */
import React, {Component} from 'React';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';

import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component{
    constructor(props){
        super(props);
    }
    onLogin(){
        console.log('logging in');
        this.props.loginUser(this.props.email, this.props.password)
    }
    render(){
        return (
            <View>
                <FormLabel>Username</FormLabel>
                <FormInput onChangeText={this.props.emailChanged.bind(this)} value={this.props.email}/>
                <FormValidationMessage>Error message</FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput  onChangeText={this.props.passwordChanged.bind(this)} value={this.props.password} secureTextEntry={true}/>
                <FormValidationMessage>Error message</FormValidationMessage>

                <Button backgroundColor="#397af8"
                        onPress={this.onLogin.bind(this)}
                    title='Login' />
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps)=>{
     return {
        email: state.auth.email,
        password: state.auth.password
    }
};
export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);