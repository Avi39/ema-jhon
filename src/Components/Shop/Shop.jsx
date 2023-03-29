import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
        },[]);

        const handleAddToCart = (p) =>{
           const newCart = [...cart,p];
           setCart(newCart);
        }
    return (  
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product ={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected items:{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;