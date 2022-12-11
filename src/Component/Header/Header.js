import React from 'react';
 
 import logo from  '../../images/Logo.svg'
 import './Header.css'
const Header = () => {
    return (
        <nav className='Header'>
              <img src={logo}></img>

              <div>
              <a href="">Shop</a>
              <a href="">Order</a>
              <a href="">Order Review</a>
              <a href="">Login</a>
              </div>
            
                 
             
        </nav>
    )
};           

export default Header;