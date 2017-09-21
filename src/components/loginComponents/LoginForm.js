/**
 * Created by Akshat on 05-09-2017.
 */
import React, {Component} from 'React';
import {View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Actions} from 'react-native-router-flux';

import {connect} from 'react-redux';
import _ from 'lodash';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';

import * as aks from '../../actions/methods';
import storage from '../../common/storage';

import { emailChanged, passwordChanged, loginUser } from '../../actions'
import Section from '../../common/Section';
import * as stylesheet from '../../styles/colors';


class LoginForm extends Component{
    constructor(props){
        super(props);
     }
    onLogin(){
        const {email, password} = this.props;
        console.log('logging in');
        this.props.loginUser({email, password}, (response, error)=>{
            if(response){
                console.log(response);
                storage.save({
                    key: 'loginState',   // Note: Do not use underscore("_") in key!
                    data: {
                        csrf_token: response.csrf_token,
                        current_user: response.current_user,
                        logout_token: response.logout_token

                    },
                    // if not specified, the defaultExpires will be applied instead.
                    // if set to null, then it will never expire.
                    expires: null
                });
                Actions.main();
            }
            if(error){

            }
        });
    }


    inputError(input){
        const {validateEmail, validatePassword} = aks.default;
        switch (input.type){
            case "email":
                if(validateEmail(input.value)){
                    return;
                }else if(_.trim(input.value).length>0){
                    return (<FormValidationMessage>Invalid Email</FormValidationMessage>)
                }
                break;
            case "password":
                if(validatePassword(input.value)){
                    return
                }else if(_.trim(input.value).length<0){
                    console.log('true');
                    return (<FormValidationMessage>Invalid Password</FormValidationMessage>)
                }
                break;
            default:
                break;
        }

    }

    render(){
        const {emailChanged, passwordChanged, email, password, loading, error} = this.props;
        const {forgotPasswordTextStyle} = style;

        const onRequestError = ()=>{
            console.log(error);
            return (<FormValidationMessage>{error.message}</FormValidationMessage>)
        };
        const forgotPasswordSection = ()=>{
            if(loading !==true){
                return (
                    <Section style={{ display: 'flex', justifyContent:'center', flexDirection: 'row'}}>
                        <TouchableOpacity onPress={()=>{Actions.forgotPassword()}}>
                            <Text style={forgotPasswordTextStyle}>Forgot Password</Text>
                        </TouchableOpacity>
                    </Section>
                )
            }

        };
        const loadingSpinner = ()=>{
            if(loading){
                return <ActivityIndicator />
            }
        };
        const loadButton = ()=>{
            const {validateEmail, validatePassword} = aks.default;
            if(loading){
                //if loading is true, do not show buttons
                return (
                    <Section />
                )
            }
            if(validateEmail(email) && validatePassword(password)){
                return (
                    <Button backgroundColor="#397af8"
                            fontSize={theme.btnFontSize}
                            fontWeight={'500'}
                            onPress={this.onLogin.bind(this)}
                            title='LOGIN' />
                 )
            }else{
                return (
                     <Button color="#fff"
                            fontWeight={'500'}
                            fontSize={theme.btnFontSize}
                            title='LOGIN' />
                 )
            }
        };


        return (
            <View style={{paddingTop:theme.screenPaddingTop}}>
                <FormLabel>Username</FormLabel>
                <FormInput onChangeText={emailChanged.bind(this)} value={email}/>
                {this.inputError({type:"email", value:  email})}

                <FormLabel>Password</FormLabel>
                <FormInput  onChangeText={passwordChanged.bind(this)} value={password} secureTextEntry={true}/>
                {this.inputError({type:"password", value: password})}
                {loadingSpinner()}
                {onRequestError()}

                {loadButton()}
                {forgotPasswordSection()}
 
            </View>

        )
    }
}
const mapStateToProps = (state, ownProps)=>{
     return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        response: state.auth.response,
        error: state.auth.error
    }
};
export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);

const theme = stylesheet.default;
const style = {
    forgotPasswordTextStyle: {
        fontWeight:'400',
        marginTop:theme.size,
        fontSize:theme.fontSize*1.6,
        color:theme.accentDark
    }
}