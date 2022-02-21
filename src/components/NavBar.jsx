import React from 'react'
import logo from '../assets/images/logo.png'
import CartWidget from './CartWidget';


function NavBar() {
  return (

    <div className='container'>
         <div>
                <img src={logo} className="logo" alt="Logo" />
         </div>
        <nav className='navbar'>
            
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">menu</a>
            <a href="#">products</a>
            <a href="#">review</a>
            <a href="#">blog</a>
            <div>
                <CartWidget/>
            </div>
        </nav>
    </div>
    
  )
}

export default NavBar