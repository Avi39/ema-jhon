import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props;
    let totalPrice =0;
    let shipping = 0;
    for(const product of cart){
         totalPrice = totalPrice + product.price;
         shipping = shipping + product.shipping
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
           <h4>Order Summary</h4>
            <p>Selected item                                                                                             s:{cart.length}</p>
            <p>total price:${totalPrice}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h6>Grand total:{grandTotal.toFixed(2)}</h6>
            
        </div>
    );
};

export default Cart;