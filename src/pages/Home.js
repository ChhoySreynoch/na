import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from './../redux/actions/productActions'
import Cards from '../components/Cards'
import LoadingView from '../components/LoadingView'
import secureLocalStorage from 'react-secure-storage'
import { fetchUser } from '../redux/actions/userActions'
import UserCard from '../components/Card'

export default function Home() {

    const dispatch = useDispatch()
    const {isLogin} = useSelector(state => state.authR)
    const {products} = useSelector(state => state.productR)
    const {users} = useSelector(state => state.userR)
    const [limit, setLimit] = useState(12)
    const [offset, setOffset] = useState(1)

    // The same as componentDidMount, Render
    useEffect(() => {
        console.log("is login", isLogin)
        console.log(secureLocalStorage.getItem("kiki"))
        dispatch(fetchProducts(offset, limit))  
        dispatch(fetchUser())
    }, []);
  return (
    <Container>
        <h1 className='h1 mt-3'>Product Collection</h1>
        <Row className='g-3 mt-3'>
            {
                products.length == 0 ? <LoadingView /> : <Cards products={products} title="Little Kid" />
            }
        </Row>
        <section 
            className='mt-4 text-center'
            onClick={() => {
                setOffset(offset + 1)
                dispatch(fetchProducts(offset, limit))
            }}
        >
            <button className='btn btn-primary text-center btn-block text-center'>Load more</button>
        </section>
        <h1 className='h1 mt-3'>User Collection</h1>
        <Row className='g-3 mt-3'>
            {
                users.length == 0 ? <LoadingView /> : <UserCard users={users} title="Little Kid" />
            }
        </Row>
    </Container>
  )
}
