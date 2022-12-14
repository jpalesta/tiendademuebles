import React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget';
import Logo from '../Images/logo.png';

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
      <img src = {Logo} alt = "Logo" className='logo'/>
      <span className = "brand">TDM </span>
        <ul>
          <li>Nosotros</li>
          <li>Muebles</li>
          <li>Contacto</li>
        </ul>
        <CartWidget  className = "nav__chango" />
      </nav>
    </>
  )
}
export default NavBar