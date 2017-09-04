/**
 * Created by Akshat on 05-09-2017.
 */

import {
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED } from './types';
import {loginUrl} from './api';

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
  return (dispatch)=>{
       fetch(loginUrl, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: email,
              pass: password,
          })
      }).then((response) => response.json())
           .then((responseJson) => {
             console.log(responseJson);
          })
          .catch((error) => {
              console.log(error);
          });
  }
};