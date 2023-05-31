import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'
import { BASE_URL } from '../constants/API'
import { actionTypes } from './actionTypes'

export const loginUser = (loggedInRequest) => {
	return (dispatch) => {
		return axios(`${BASE_URL}auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(loggedInRequest),
		})
        .then((res) => {
            if (res.status == 201){
                console.log("response status: ", res)
                secureLocalStorage.setItem("kiki", res.data)
                dispatch({
                    type: actionTypes.LOGIN_SUCESS,
                    payload: res.data,
                })
                return Promise.resolve()
            } 
        })
        .catch(er => {
            console.log("err", er)
            alert(er.message)
        })
			
	}
}

export const logout = () => {
    return (dispatch) => {
        secureLocalStorage.removeItem('kiki')
        dispatch({
            type: actionTypes.LOGOUT,
            payload: null
        })
        return Promise.resolve()
    }
}

