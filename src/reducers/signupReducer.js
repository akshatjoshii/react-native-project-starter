/**
 * Created by Akshat on 07-09-2017.
 */

import {REGISTER_INPUT_CHANGE,REGISTER_FORM_VALID, SIGNUP_INIT} from '../actions/types';


const INITIAL_STATE  = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
};

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case REGISTER_INPUT_CHANGE:
             return {...state, [action.payload.props]:action.payload.value};
        case REGISTER_FORM_VALID:
             return {...state, formValid: action.payload};
        case SIGNUP_INIT:
            return {...state, ...action.payload};
        default:
            return state;
    }

}