/**
 * Created by Akshat on 05-09-2017.
 */

import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    REGISTER_INPUT_CHANGE,
    SIGNUP_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SENDING_REQUEST,
    SENDING_PASSWORD_REQUEST,
    REQUEST_PASSWORD_SUCCESS,
    REQUEST_PASSWORD_FAIL
} from './types';
import {loginUrl, forgotPassword} from './api';

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

export const loginUser = ({email, password})=>{
    console.log(loginUrl);
    
  return (dispatch)=>{
      dispatch({
          type: SENDING_REQUEST,
          payload: true
      });
       fetch(loginUrl, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: email,
              pass: password,
          })
      }).then((response) => response.json())
           .then((responseJson) => {
              console.log(responseJson);
              dispatch({
                  type: LOGIN_SUCCESS,
                  payload: responseJson
              })
          })
          .catch((error) => {
              console.log(error);
              dispatch({
                  type: LOGIN_FAILED,
                  payload: error
              })
          });
  }
};

export const onForgotPassword = (email)=>{
    console.log(forgotPassword);
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
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                dispatch({
                    type: REQUEST_PASSWORD_SUCCESS,
                    payload: responseJson
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: REQUEST_PASSWORD_FAIL,
                    payload: error
                })
            });
    }
};

export const signUpInputChange = (property)=>{
     return {
        type: REGISTER_INPUT_CHANGE,
        payload: property
    }
};
export const signUp = (user)=>{
    console.log(user);
    return {
        type: SIGNUP_INIT,
        payload: user
    }
}