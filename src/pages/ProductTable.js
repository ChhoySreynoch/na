import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../actions/productAction';
import { deleteProduct } from '../redux/actions/productActions';

export default function ProductTable() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [filterProduct, setFilterProduct] = useState([{
        images: ["https://picsum.photos/640/640?r=9542"],
        title: "Magic Mouse"
    }])
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        fetchProducts()
        .then(resp => {
            setFilterProduct(resp)
        })
    }, [])
    useEffect(() => {
        const result = filterProduct.filter(p => {
            return p.title && p.title.toLowerCase().match(search.toLowerCase())
        })
        setFilterProduct(result)
      }, [search])

    const columns = [
        {
            name: 'Product Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category && row.category.name,
            sortable: true,
        },
        {
            name: 'Photo',
            selector: row => <img src={row.images[0]} alt="products" width={80} className="m-3" />,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => (
                <>
                    <button 
                        className='btn btn-primary m-2'
                        onClick={() => navigate("/update", {
                            state: {
                                n_product: row
                            }
                        })}
                    >Edit</button>
                    <button 
                        className='btn btn-danger m-2'
                        onClick={() => {
                            dispatch(deleteProduct(15))
                        }}
                    >Delete</button>
                </>
            ),
            sortable: true,
        },
    ];
  return (
    <main className='container'>
        <section className='row'>
            <div className='col-12 col-md-10'>

            </div>
            <div className='col-12 col-md-2 my-4'>
            <button 
              class="btn btn-outline-success"
              onClick={() => navigate("/create")}
            >
              + Insert Product
            </button>
            </div>
        </section>
        <DataTable 
            columns={columns}
            data={filterProduct}
            pagination
            selectableRows
            fixedHeader
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input type="text" 
                placeholder='search here' 
                className='form-control'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            }
        />
    </main>
  )
}

