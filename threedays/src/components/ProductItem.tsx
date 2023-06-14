import React from 'react'
import { AllProduct } from '../models/Products'
import { useNavigate } from 'react-router-dom'

function ProductItem( item: { pro: AllProduct } ) {

  const navigate = useNavigate()  
  return (
    <div className="card">
    <img src={item.pro.thumbnail} className="card-img-top"  />
    <div className="card-body">
        <h5 className="card-title">{ item.pro.title }</h5>
        <p className="card-text">{ item.pro.category }</p>
        <a onClick={(evt) => navigate("/detail", {state: item.pro}) } className="btn btn-primary">Goto Detail</a>
    </div>
    </div>
  )
}

export default ProductItem