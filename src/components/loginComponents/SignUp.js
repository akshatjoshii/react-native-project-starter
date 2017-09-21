/**
 * Created by Akshat on 05-09-2017.
 */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';
import {connect} from 'react-redux';
import  Section  from '../../common/Section';
import {signUpInputChange, signUpFormValid, signUp} from '../../actions/auth';

import * as aks from '../../actions/methods';
import * as stylesheet from '../../styles/colors';


class SignUp extends Component{
    constructor(props){
        super(props);
    }
    signUp(){
        const {fullName, email, password, confirmPassword, formValid} = this.props;
        this.props.signUp({fullName, email, password, confirmPassword});
    }
    render(){
        const {signUpInputChange, signUpFormValid} = this.props; //fetching actions from props
        const {email, fullName, password, confirmPassword, formValid} = this.props;
        const {buttonStyle} = style.buttonStyle;
        const {validationError} = aks.default;
        const loadSubmitButton = ()=>{
            console.log(this.refs);
            signUpFormValid({email, fullName, password, confirmPassword});

            if(formValid){
                return (
                    <Button  onPress={this.signUp.bind(this)}
                             fontSize={theme.btnFontSize}
                             color={theme.fontColor}
                             backgroundColor={theme.accentDark}
                             fontWeight={'500'}
                             buttonStyle={{...buttonStyle, marginTop:theme.size*1.5}}
                             title='REGISTER' />
                )
            }else{
                return (  <Button  onPress={this.signUp.bind(this)}
                                   fontSize={theme.btnFontSize}
                                     fontWeight={'500'}
                                   buttonStyle={{...buttonStyle, marginTop:theme.size*1.5}}
                                   title='REGISTER' />)
            }

        };


        return (
            <ScrollView style={{paddingTop:theme.screenPaddingTop}}>
                <Section>
                    <FormLabel>Username</FormLabel>
                    <FormInput value={fullName}
                               onChangeText={(val)=>{signUpInputChange({props:'fullName', value:val})}}/>
                    {validationError.apply(aks.default,[{type:"password", value:password},
                        <FormValidationMessage>Please enter a valid full name</FormValidationMessage>])
                    }
                </Section>
                <Section>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput value={fullName} onChangeText={(val)=>{signUpInputChange({props:'fullName', value:val})}}/>
                     {validationError.apply(aks.default,[{type:"fullName", value:fullName},
                         <FormValidationMessage>Please enter a valid full name</FormValidationMessage>])
                     }
                </Section>
                <Section>
                    <FormLabel>Email</FormLabel>
                    <FormInput value={email} onChangeText={(val)=>{signUpInputChange({props:'email', value:val})}}/>
                    {validationError.apply(aks.default,[{type:"email", value:email},
                        <FormValidationMessage>Please enter a valid email</FormValidationMessage>])
                    }
                </Section>
                 
                <Section>
                    <FormLabel>Password</FormLabel>
                    <FormInput  value={password}
                                secureTextEntry={true}
                                onChangeText={(val)=>{signUpInputChange({props:'password', value:val})}}/>
                    {validationError.apply(aks.default,[{type:"password", value:password},
                        <FormValidationMessage>At least a digit, a lower case, an upper case, and 8 characters</FormValidationMessage>])
                    }
                </Section>
                <Section>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormInput value={confirmPassword} secureTextEntry={true} onChangeText={(val)=>{ signUpInputChange({props:'confirmPassword', value:val}) } }/>
                </Section>
                {validationError.apply(aks.default,[{type:"confirmPassword", value:confirmPassword, prevValue: password},
                    <FormValidationMessage>Passwords do not match!</FormValidationMessage>])
                }

                <Section>
                    {loadSubmitButton()}
                </Section>


            </ScrollView>
        )
    }
}
const theme = stylesheet.default;
const style = {
    buttonStyle:{
        paddingTop:20,
        paddingBottom:20,
        flex:1,
    }
};

const mapStateToProps = (state, ownProps)=>{
    return {
        email:state.signupForm.email,
        password: state.signupForm.password,
        confirmPassword: state.signupForm.confirmPassword,
        fullName: state.signupForm.fullName,
        formValid: state.signupForm.formValid
        
    }
};

export default connect(mapStateToProps, {signUpInputChange, signUpFormValid, signUp})(SignUp);