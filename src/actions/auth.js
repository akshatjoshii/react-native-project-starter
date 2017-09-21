/**
 * Created by Akshat on 05-09-2017.
 */

import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    REGISTER_INPUT_CHANGE,
    REGISTER_FORM_VALID,
    SIGNUP_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SENDING_REQUEST,
    SENDING_PASSWORD_REQUEST,
    REQUEST_PASSWORD_SUCCESS,
    REQUEST_PASSWORD_FAIL
} from './types';
import {loginUrl, forgotPassword, signUpApi} from './api';
import * as aks from './methods';

export const emailChanged = (text)=>{
      return {
        type: LOGIN_EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text)=>{
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}, callback)=>{
    console.log(loginUrl);
    //callback() expects two arguments, response and error. one will remain undefined if other is defined.
    const dispatchSuccess= (dispatch, responseJson)=>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: responseJson
        });
    };
    const dispatchFail = (dispatch, error)=>{
        dispatch({
            type: LOGIN_FAILED,
            payload: error
        });
    };


  return (dispatch)=>{
       dispatch({
          type: SENDING_REQUEST,
          payload: true
      });
       fetch(loginUrl, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: email,
              pass: password
          })
      }).then((response) => response.json())
           .then((responseJson) => {
               if(responseJson.csrf_token){
                   //if user logs in
                   dispatchSuccess(dispatch, responseJson);

                   callback(responseJson, undefined);
               }else{
                   //login failed, no csrf
                   dispatchFail(dispatch, responseJson);

                   callback(undefined, responseJson);
               }

          })
          .catch((error) => {
              console.log(error);
              dispatchFail(dispatch, error);
              callback(undefined, error);

          });
  }
};


export const onForgotPassword = (email, callback)=>{
    console.log(forgotPassword);
    let status = '';
     return (dispatch)=>{
         dispatch({
             type: SENDING_PASSWORD_REQUEST,
             payload: true
         });

        fetch(forgotPassword, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email
             })
        })
            .then((response) => {
                status = response.status;
                return response.json()
            })
            .then((responseJson) => {
                if(status>300){
                    throw responseJson
                }
                dispatch({
                    type: REQUEST_PASSWORD_SUCCESS,
                    payload: responseJson
                });
                callback();
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: REQUEST_PASSWORD_FAIL,
                    payload: error
                });
            
            });
    }
};

export const onSignUp = ({username, email, password, fullName})=>{
    let status = '';
    
    return (dispatch)=>{
        dispatch({
            type: SENDING_PASSWORD_REQUEST,
            payload: true
        });

        fetch(signUpApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, email, password, fullName
            })
        })
            .then((response) => {
                status = response.status;
                return response.json()
            })
            .then((responseJson) => {
                if(status>300){
                    throw responseJson
                }
                dispatch({
                    type: REQUEST_PASSWORD_SUCCESS,
                    payload: responseJson
                });
                callback();
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: REQUEST_PASSWORD_FAIL,
                    payload: error
                });

            });
    }
};

export const signUpInputChange = (property)=>{
     return {
        type: REGISTER_INPUT_CHANGE,
        payload: property
    }
};

export const signUpFormValid = ({email, fullName, password, confirmPassword})=>{
    const {validationError} = aks.default;

    let valid = validationError.apply(aks.default,[{type:"fullName", value:fullName}, false]) &&
        validationError.apply(aks.default,[{type:"email", value:email}, false]) &&
        validationError.apply(aks.default,[{type:"password", value:password}, false]) &&
        validationError.apply(aks.default,[{type:"confirmPassword", value:confirmPassword, prevValue: password}, false]);
     return {
        type: REGISTER_FORM_VALID,
        payload: valid
    }
};
export const signUp = (user)=>{
    console.log(user);
    return {
        type: SIGNUP_INIT,
        payload: user
    }
};