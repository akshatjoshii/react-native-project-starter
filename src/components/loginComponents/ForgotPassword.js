/**
 * Created by Akshat on 07-09-2017.
 */
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, Text, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as aks from "../../actions/methods";
import { Button, Icon, FormLabel, FormInput,FormValidationMessage} from 'react-native-elements';
import  Section  from '../../common/Section';

import {onForgotPassword, emailChanged} from '../../actions/auth';
import * as stylesheet from '../../styles/colors';

class ForgotPassword extends Component{
    constructor(props){
        super(props);

    }
    inputError(input){
        const {validateEmail} = aks.default;
        switch (input.type){
            case "email":
                if(validateEmail(input.value)){
                    return;
                }else if(_.trim(input.value).length>0){
                    return (<FormValidationMessage style={{marginTop:-10}}>Invalid Email</FormValidationMessage>)
                }
                break;
            default:
                break;
        }

    }
    render(){
        const {email, onForgotPassword, emailChanged, loading} = this.props;
        const loadingSpinner = ()=>{
            if(loading) {
                return <ActivityIndicator />
            }
        };
        const loadSubmitBtn = ()=>{
            const {validateEmail} = aks.default;
            if(loading){
                return <Section />
            }
            if(validateEmail(email)){
                return (
                    <Button onPress={()=>{onForgotPassword(email)}}
                            backgroundColor="#397af8"
                            fontSize={theme.btnFontSize}
                            fontWeight={'500'} title='SUBMIT'/>
                )
            }else{
                return <Button
                               fontSize={theme.btnFontSize}
                               fontWeight={'500'} title='SUBMIT'/>
            }
        };

        return (
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput value={email} onChangeText={emailChanged.bind(this) } />
                {this.inputError({type:'email', value:email})}
                {loadingSpinner()}
                 {loadSubmitBtn()}


            </View>
        )
    }
}
const mapStateToProps = (state, ownProps)=>{
    return {
        email: state.forgotPassword.email,
        loading: state.forgotPassword.loading
    }
};

const theme = stylesheet.default;

const style = {

};

export default connect(mapStateToProps, {onForgotPassword, emailChanged})(ForgotPassword);

