/**
 * Created by Akshat on 02-09-2017.
 */
import { combineReducers } from 'redux';

import authReducers from './authReducers';
import signupReducer from './signupReducer';

export default combineReducers({
     user: ()=>[],
     auth: authReducers,
     signupForm: signupReducer
    
})