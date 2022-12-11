import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    return (
        <div>
             <h3>Order Summary</h3>
            <h5>Selected Items:{cart.length}</h5>
        </div>
    );
};

export default Cart;