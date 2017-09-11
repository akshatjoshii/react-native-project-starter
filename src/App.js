/**
 * Created by Akshat on 01-09-2017.
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './Router';
import reducers from './reducers'

export default class App extends Component{

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>

        )
    }
}

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
    return global._fetch(uri, options, ...args).then((response) => {
        console.log('Fetch', { request: { uri, options, ...args }, response });
        return response;
    });
};