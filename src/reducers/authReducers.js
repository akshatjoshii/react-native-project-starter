/**
 * Created by Akshat on 05-09-2017.
 */
import {
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    SENDING_REQUEST,
    LOGIN_FAILED} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: null,
    error: '',
    user: null,
    
};

export default (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case LOGIN_EMAIL_CHANGED:
              return {...state,
                  email: action.payload
              };
        case LOGIN_PASSWORD_CHANGED:
            return {...state,
                password: action.payload
            };
        case LOGIN_SUCCESS:
            return {...state,
                loading:false,
                error:'',
                response: action.payload
            };
        case LOGIN_FAILED:
            return {...state,
                loading:false,
                error: action.payload
            };
        case SENDING_REQUEST:
            //for login
            return {...state,
                error:'',
                loading: action.payload
            };
       

        default:
            return state;
    }
}