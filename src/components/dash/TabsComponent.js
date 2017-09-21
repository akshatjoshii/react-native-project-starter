/**
 * Created by Akshat on 16-09-2017.
 */
import React, {Component} from 'react';
import {View, Text, TabBarIOS} from 'react-native';

import { Icon } from 'react-native-elements';


class TabsComponent extends Component{

    state = {
        selected: 'home'
    };

    selectTab(id){

    }

    renderTab(options){

    }

    render(){
        return (
            <TabBarIOS tintColor="#42b49a">
                {this.renderTab({
                    title: 'Home',
                    id: 'home',
                 })}
            </TabBarIOS>
        )
    }
}