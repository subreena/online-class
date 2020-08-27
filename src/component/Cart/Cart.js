import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course)=> total + course.price, 0);
    const totalPrice = total.toFixed(2);
    return (
<div className="cart-container">          
    <div className="card text-white bg-primary cart">
            <div className="card-header">Cart Summary</div>
        <div className="card-body card-header">                             
            <h4 className="card-title">Course Added: {cart.length}</h4> 
            <h5 className="bg-light text-primary w-100 mb-3 mt-3 p-3">Total Price : {totalPrice}</h5>
        <button className="btn btn-lg btn-light text-primary w-100">Check Out Now</button>
        </div>
     </div>

</div>
        
    );
};

export default Cart;