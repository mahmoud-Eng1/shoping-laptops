import React from 'react'
import { Navbar as Navbarbs,Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom"
import {CartContext} from "../context/shoppingcart";
import auth from './firebase';

const Nevbar = () => {
  const {openCart, countCart, currentUser} = CartContext();
  const signout = ()=> {
    auth.signOut()
  }
  
  return (
    
  <Navbarbs sticky='top' className="nav">
    <div className='container'>
  <Nav className='content'>
      <div className='logo'>
        <img src="images/logo.png" />
      </div>
      <div className='parentLinke'>
      <Nav.Link to="/" as={NavLink} className='link'>Home</Nav.Link>
      <Nav.Link to="/store" as={NavLink}className='link'>shop</Nav.Link>
      <Nav.Link to="/contacte" as={NavLink}className='link'>Contact</Nav.Link>
      <Nav.Link to="/about" as={NavLink} className='link'>About</Nav.Link>
      <Nav.Link to="/Signin" onClick={signout} as={NavLink} className='link'>{currentUser? "sign out" : "sign in"}</Nav.Link>
      </div>
      <div onClick={openCart} className='parentIcon'>
      <div className='count bg-danger'>{countCart}</div>
      <svg class="svg-inline--fa fa-cart-shopping iconCart"
        aria-hidden="true" focusable="false"
        data-prefix="fas" data-icon="cart-shopping"
        role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor"
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
   
     </div>
    </Nav>
    </div>
  </Navbarbs>
  )
}

export default Nevbar;