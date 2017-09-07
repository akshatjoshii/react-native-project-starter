/**
 * Created by Akshat on 07-09-2017.
 */
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, Text  } from 'react-native';
import { Button, Icon, FormLabel, FormInput} from 'react-native-elements';
import * as stylesheet from '../../styles/colors';

export default class ForgotPassword extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={()=>{}} />

                <Button fontSize={theme.btnFontSize}
                        fontWeight={'500'} title='SUBMIT'/>

            </View>
        )
    }
}

const theme = stylesheet.default;
const style = {
    
}