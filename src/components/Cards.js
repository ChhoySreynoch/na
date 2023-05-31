function Cards({products}) {  
  return (
    products && products.map(product => (
        <div className="col-sm-6 col-lg-4 col-xl-2">
            <div class="card h-100 border-0 shadow-sm">
            <img src={product.images[0]} class="card-img-top" alt="product" />
            <div class="card-body">
                <h5 class="card-title">{product.title}</h5>   
            </div>
            </div>
        </div>
    ))
  )
}

export default Cards