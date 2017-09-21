/**
 * Created by Akshat on 05-09-2017.
 */
import _ from 'lodash';
export default   {
    validateEmail: (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    validatePassword: (password)=> {
        // (/^
        // (?=.*\d)                //should contain at least one digit
        // (?=.*[a-z])             //should contain at least one lower case
        // (?=.*[A-Z])             //should contain at least one upper case
        // [a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
        //
        // $/)

        if (password.length > 0) {
            //var re = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
            //return re.test(password);
            return password;
        }
    },
    validateFullName: (name)=>{
        var re = /^([a-z]+(-| )?)+$/i;
        return re.test(name);

   },

    validationError({type, value, prevValue,}, message){
        //prevValue only for confirm password
         switch(type){
            case 'fullName':
                if(_.trim(value).length<1){
                    return false
                }
                else if(this.validateFullName(value)){
                    return true
                }else{
                    return message
                }
            case 'email':
                if(_.trim(value).length<1){
                    return false
                }
                else if(this.validateEmail(value)){
                    return true
                }else{
                    return message
                }
            case 'password':
                if(_.trim(value).length<1){
                    return false
                }
                else  if(this.validatePassword(value)){
                    return true
                }else{
                    return message
                }
             case 'confirmPassword':
                 if(_.trim(value).length<1){
                     return false
                 }
                 if(prevValue===value){
                     return true;
                 }else {
                     return message;
                 }
                 
            default:
                return false
        }
    }

}
 