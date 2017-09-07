/**
 * Created by Akshat on 05-09-2017.
 */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';
import {connect} from 'react-redux';
import  Section  from '../../common/Section';
import {signUpInputChange, signUp} from '../../actions/auth';

import * as stylesheet from '../../styles/colors';


class SignUp extends Component{
    constructor(props){
        super(props);
    }
    signUp(){
        const {fullName, email, password, confirmPassword} = this.props;
        this.props.signUp({fullName, email, password, confirmPassword});
    }
    render(){
        const {signUpInputChange} = this.props; //fetching actions from props
        const {email, fullName, password, confirmPassword} = this.props;
        const {buttonStyle} = style.buttonStyle;
        return (
            <ScrollView>
                <Section>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput value={fullName} onChangeText={(val)=>{signUpInputChange({props:'fullName', value:val})}}/>
                </Section>
                <Section>
                    <FormLabel>Email</FormLabel>
                    <FormInput value={email} onChangeText={(val)=>{signUpInputChange({props:'email', value:val})}}/>
                </Section>
                 
                <Section>
                    <FormLabel>Password</FormLabel>
                    <FormInput  value={password} onChangeText={(val)=>{signUpInputChange({props:'password', value:val})}}/>
                </Section>
                <Section>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormInput value={confirmPassword} onChangeText={(val)=>{ signUpInputChange({props:'confirmPassword', value:val}) } }/>
                </Section>
                <Section>
                    <Button  onPress={this.signUp.bind(this)}
                             fontSize={theme.btnFontSize}
                             color={theme.fontColor}
                             backgroundColor={theme.accentDark}
                             fontWeight={'500'}
                             buttonStyle={{...buttonStyle, marginTop:theme.size*1.5}}
                             title='REGISTER' />
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
        fullName: state.signupForm.fullName
        
    }
};

export default connect(mapStateToProps, {signUpInputChange, signUp})(SignUp);