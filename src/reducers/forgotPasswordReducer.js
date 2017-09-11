/**
 * Created by Akshat on 11-09-2017.
 */
import {
    LOGIN_EMAIL_CHANGED,
    REQUEST_PASSWORD_SUCCESS,
    REQUEST_PASSWORD_FAIL,
    SENDING_PASSWORD_REQUEST
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    loading: null,
    error: ''

};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type) {
        case LOGIN_EMAIL_CHANGED:
            return {...state, email: action.payload};
        case SENDING_PASSWORD_REQUEST:
            return {...state, loading: action.payload};
        case REQUEST_PASSWORD_SUCCESS:
            return {...state, loading:false, response: action.payload};
        case REQUEST_PASSWORD_FAIL:
            return {...state, loading:false, response: action.payload};
        default:
            return state;
    }
}