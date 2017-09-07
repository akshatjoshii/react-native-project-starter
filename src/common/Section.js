/**
 * Created by Akshat on 06-09-2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Section extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        )
    }
}