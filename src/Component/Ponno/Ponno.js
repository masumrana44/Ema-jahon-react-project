import React from 'react';
import CartIcon from '../../icons/Icons';
import './Ponno.css'

const Ponno = (props) => {
    const {name,img,seller,price,ratings}=props.product;
    const {handleAddToCart}=props;
   

   
    return (
        <div className='product'>
         <img src={img}></img>

      <div className='product-dettails'>
         <p className='product-name'>
            {name}
         </p>
         <p>Price:${price}</p>
           
          <p>
        <small>Seller: {seller}</small>
          </p>
          <p><small>Rating: {ratings}</small></p>
         
        </div>
       <button onClick={()=> handleAddToCart(props.product)} type="" className='cart-btn'>Add to Cart <span ><CartIcon/></span> </button>

      
          
        </div>
    )
};

export default Ponno;