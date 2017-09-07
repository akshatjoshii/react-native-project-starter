/**
 * Created by Akshat on 06-09-2017.
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity  } from 'react-native';
import { Button, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

import * as stylesheet from '../styles/colors';
import Section from '../common/Section';




export default class extends Component{
    render(){
        const {viewContainer,
            buttonStyle,
            textStyle,
            separatorStyle,
            btnContainerStyle} = styles;

        return (
            <View>

                <Section style={{marginBottom:20}}>
                    <Icon
                        name='security' size={130} />
                </Section>

               <Section>
                   <Button  onPress={()=>{Actions.login()}}
                            fontSize={theme.btnFontSize}
                            color={theme.fontColor}
                            backgroundColor={theme.darker}
                            fontWeight={'500'}
                            buttonStyle={buttonStyle}
                            title='LOGIN' />
               </Section>

                <Section>
                    <Button  onPress={()=>{Actions.signup()}}
                             fontSize={theme.btnFontSize}
                             color={theme.fontColor}
                             backgroundColor={theme.accentDark}
                             fontWeight={'500'}
                             buttonStyle={{...buttonStyle, marginTop:theme.size*1.5}}
                             title='REGISTER' />
                </Section>

            </View>
        )
    }
}
const theme = stylesheet.default;

const styles = {
    viewContainer: {

    },
    buttonStyle: {
        // alignSelf:'center',
        paddingTop:20,
        paddingBottom:20,
        flex:1,
     },
    btnContainerStyle:{

    },
    separatorStyle:{
        fontSize:theme.fontSize*1.8,
        backgroundColor:theme.accentLight,
        color:'#fff',
        height:40,
        width:40,
        padding:5,
        borderRadius: 50,
        margin:10,
        justifyContent:'center',
        paddingLeft:10,
        fontWeight:'500'
    }

};