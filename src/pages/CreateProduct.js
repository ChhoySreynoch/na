import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { createProduct, getCategories, updateProduct, uploadImage } from "../actions/productAction"

export default function ProductForm({update}){
    const navigate = useNavigate()
    const location = useLocation()
    const [source, setSource] = useState("")
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        "id": 0,
        "title": "",
        "price": 0,
        "description": "",
        "categoryId": 0,
        "images": [
            "https://picsum.photos/640/640?r=801"
        ]
    })

    const handleInputChange = (e) => {
        console.log(e)
        const {name, value} = e.target
        console.log(name, value)
        setProduct(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    // choose image from their pc
    const onFileUploadHandler = (e) => {
        console.log(e.target.files[0])
        setSource(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(update){
            // source !=="" : mean that user choose new photo
            if (source !== ""){
                const formData = new FormData()
                formData.append("file", source)
                uploadImage(formData)
                .then(response => {
                    product.images = [response.data.location]
                    updateProduct(product, product.id)
                    .then(res => {
                        console.log(res)
                        navigate("/datatable")
                    })
                })
            }else{
                // User keep old photo
                updateProduct(product, product.id)
                .then(res => {
                    console.log(res)
                    navigate("/datatable")
                })
            }
        }else{
            insertProduct()
        } 
    }
    const insertProduct = () => {
        const formData = new FormData()
            formData.append("file", source)
            uploadImage(formData)
            .then(response => {
                product.images = [response.data.location]
                console.log(product)
                createProduct(product)
                .then(resp => {
                    console.log(resp)
                    alert("Insert Product Sucess")
                    navigate("/")
                })
        })
    }
    useEffect(() => {
        console.log("in use effect")
        if(update){
            const {n_product} = location.state
            console.log("you want to update", location.state.n_product)
            product.id = n_product.id
            product.title = n_product.title
            product.price = n_product.price
            product.description = n_product.description
            product.categoryId = n_product.category.id
            product.images = [n_product.images[0]]
        }else{
            console.log("you want to create")
            product.images = ["https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"]
        }
        getCategories()
        .then(response => setCategories(response))
    }, [])
    return(
        <main className="container">
            <div className="row">
                <form 
                    className="mt-5 m-auto col-12 col-md-6"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-center">
                        {
                            update ? "Edit a Product" : "Create a Product"
                        }
                    </h1>
                    <div className="mb-3">
                        <label htmlFor="title" class="form-label">Product title</label>
                        <input 
                            type="text" 
                            class="form-control"
                            placeholder="Magic Mouse"
                            name="title"
                            value={update ? product.title : ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input 
                            type="number" 
                            className="form-control"
                            placeholder="200$"
                            name="price"
                            value={update ? product.price : ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" class="form-label">Description</label>
                        <textarea 
                            class="form-control" 
                            rows="5"
                            name="description"
                            value={update ? product.description : ""}
                            placeholder="Leave the description here"
                            onChange={handleInputChange}
                        >
                        </textarea>
                    </div>

                    <select 
                        class="form-select"
                        onChange={handleInputChange}
                        name="categoryId"
                        value={update ? product.categoryId : 0}
                    >
                        <option selected>Choose Category</option>
                        {
                            categories.map(cat => (
                                <option value={cat.id}>{cat.name}</option>
                            ))
                        }
                    </select>
                    <div className="mb-3 mt-3">
                        <label htmlFor="images" className="form-label">Upload Image</label>
                        <input 
                            type="file" 
                            className="form-control"
                            name="images"
                            onChange={onFileUploadHandler}
                        />
                    </div>
                    {/* preview image */}
                    <div className="mb-3">
                    <div className="my-3 m-auto text-center">
                        <img src={source !== "" ? URL.createObjectURL(source) : product.images[0]} className="w-75 mt-3" />
                    </div>
                    
                    </div>
                    <button 
                        type="submit" 
                        class="btn btn-primary mt-4 w-100"
                    >{
                        update ? "Update Product" : "Create Product"
                    }</button>
                </form>
            </div>
        </main>
    )
}