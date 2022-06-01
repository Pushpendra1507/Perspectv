import APIServices from "../services"
import { TYPES } from "./actionTypes"

const userLogin = (payload, callback) => {
     return dispatch => {
         const onSuccess = (res) => {
             console.log('get new data-------', res);
         }
         const onError = error => {

         }
        //  APIServices.userLogin(payload, onSuccess, onError)
        new APIServices().userLogin(payload).then(onSuccess).catch(onError)
     }
}


export { userLogin }