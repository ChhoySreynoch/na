import axios from "axios"
import { BASE_URL } from "../constants/API"
import { actionTypes } from "./actionTypes"

export const fetchProfile = (auth) => {
    return (dispatch) => {
        return axios(`${BASE_URL}auth/profile`, {
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth}`
            }
		})
        .then((res) => {
            if (res.status == 200){
                dispatch({
                    type: actionTypes.FETCH_PROFILE,
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