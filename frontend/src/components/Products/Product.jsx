import React from 'react'
import './product.css'
// import { Link } from "react-router-dom"
import ReactStars from "react-rating-stars-component"

const options = {
    edit: false,
    color: "rgba(20,20,20,2o,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: "2.5",
    isHalf: true,
}
const Product = ({ product }) => {
    return (


        <div className='productCard' to={product._id}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /> <span>(256 reviews)</span>

            </div>
            <span>{product.price}</span>
        </div>

    )
}

export default Product