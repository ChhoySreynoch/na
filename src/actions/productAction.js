import axios from "axios"

const BASE_URL = 'https://api.escuelajs.co/api/v1/'
/// MARK: insert product to api
export const createProduct = async (product) => {
    const resp = await fetch(`${BASE_URL}products/`, 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp.json()
}

//GET CATEGORIES
export const getCategories = async () => {
    const resp = await fetch(`${BASE_URL}categories`)
    return resp.json()
}

/// MARK: Upload image to APIs
export const uploadImage = async (image) => {
    const response = await axios({
        method: "POST",
        url: `${BASE_URL}files/upload`,
        headers: {
            "Accept": "*/*",
            "Content-Type": "multipart/form-data"
        },
        data: image
    })
    return response
}

/// MARK: get product data from api
export const fetchProducts = async () => {
    const resp = await fetch(`${BASE_URL}products`)
    return resp.json()
}

/// MARK: UPATE PRODUCT BY PRODUCT ID
export const updateProduct = async (product, id) => {
    console.log(`${BASE_URL}products/${id}`)
    const resp = await fetch(`${BASE_URL}products/${id}`, 
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp.json()
}


