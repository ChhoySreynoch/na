import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../actions/productAction';

export default function PT() {
    const navigate = useNavigate()
    const [filterProduct, setFilterProduct] = useState([{
        images: ["https://picsum.photos/640/640?r=9542"],
        title: "ma"
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
            name: 'Photo',
            selector: row => <img src={row.images[0]} alt="products" width={80} style={{margin: 20}} />,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category && row.category.name,
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
                                nav_product: row
                            }
                        })}
                    >Edit</button>
                    <button className='btn btn-danger m-2'>Delete</button>
                </>
            ),
            sortable: true,
        },
    ];
  return (
    <main className='container'>
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

