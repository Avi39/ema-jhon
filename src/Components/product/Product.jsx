import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img,name,seller,quantity,price,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
           <div>
           <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>${price}</p>
            <p>manufacturer:{seller}</p>
            <p>Rating:{ratings}Stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>add to cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
           </div>
        </div>
    );
};
export default Product;