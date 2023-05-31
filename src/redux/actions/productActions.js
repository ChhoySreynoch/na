import axios from "axios"
import { BASE_URL } from "../constants/API"
import { actionTypes } from "./actionTypes"

export const fetchProducts = (offset, limit) => {
    return (dispatch) => {
        fetch(`${BASE_URL}products?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(response => dispatch({
            type: actionTypes.FETCH_PRODUCTS,
            payload: response
        }))
    }
}

export const fetchProductCategory = (id) => {
    return (dispatch) => {
        return axios(`${BASE_URL}products/?categoryId=${id}`, {
			headers: {
                "Content-Type": "application/json"
            }
		})
        .then((res) => {
            if (res.status == 200){
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_BY_CATEGORY,
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

export const deleteProduct = (id) => {
    return (dispatch) => {
        return axios(`${BASE_URL}products/${id}`, {
            method: "DELETE",
			headers: {
                "Content-Type": "application/json"
            }
		})
        .then((res) => {
            if (res.status == 200){
                dispatch({
                    type: actionTypes.DELETE_PRODUCT,
                    payload: id
                })
                return Promise.resolve()
            }
            
        })
        .catch(er => {
            console.log("err", er)
        })
    }
}
