import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Cards from '../components/Cards'
import LoadingView from '../components/LoadingView'
import { fetchCategory } from '../redux/actions/categoryActions'
import { fetchProductCategory, fetchProducts } from '../redux/actions/productActions'

export default function Category() {
  
    const [categoryName, setcategoryName] = useState()
    const {products} = useSelector(state => state.productR)
    const {categories} = useSelector(state => state.cateR)
    const dispatch = useDispatch()

    const handleFilterChange = (e) => {
        const {name, value} = e.target
        dispatch(fetchProductCategory(value))
    }

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchProducts(1, 12))
    }, [])
  return (
    <main className='container'>
        <Row>
            <div className='col-12 col-lg-8'>
                <h1 className='mt-4'>{categoryName && categoryName}</h1>
            </div>
            <div className='col-sm-12 col-lg-4'>
                <select 
                    className="form-select mt-5" 
                    onChange={handleFilterChange}
                    aria-label="Default select example"
                >
                    <option selected>Filter Products</option>
                    {
                        categories.map(cat => (
                            <option value={cat.id}>{cat.name}</option>
                        ))
                    }
                </select>
            </div>
        </Row>
        <Row className='g-3 mt-3'>
            
            {
                products.length == 0 ? <LoadingView /> : <Cards products={products} title="Little Kid" />
            }
        </Row>
    </main>
  )
}
