import secureLocalStorage from "react-secure-storage"
import { actionTypes } from "../actions/actionTypes"

const auth = secureLocalStorage.getItem('kiki')
const initialState = auth ? { isLogin: true, auth: auth } : { isLogin: false, auth: null }
export const authReducer = (state = initialState, action) => {
    const {type, payload} = action
    const {LOGIN_FAILED, LOGIN_SUCESS, LOGOUT} = actionTypes
    switch(type){
        case LOGIN_SUCESS: 
            return{ 
                ...state, 
                isLogin: true,
                auth: payload
            }
        case LOGIN_FAILED:
            return{
                ...state,
                isLogin: false,
                auth: null
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                auth: null
            }
        default:
            return state
    }
}