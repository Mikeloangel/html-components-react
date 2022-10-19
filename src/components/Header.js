import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle(){setIsMenuOpen(!isMenuOpen)}
  function handleMenuClose(){setIsMenuOpen(false)}

  return (
    <header className='top-block header'>
      <div className='header__logo'></div>

      <nav className={`header__nav ${isMenuOpen && 'header__nav_open'}`}>
        <ul className='header__nav-list'>
          <li className='header__nav-item'><NavLink exact to="/" className='header__nav-link' activeClassName='header__nav-link_active' onClick={handleMenuClose}>Домой</NavLink></li>
          <li className='header__nav-item'><NavLink exact to="/selector" className='header__nav-link' activeClassName='header__nav-link_active' onClick={handleMenuClose}>Селектор</NavLink></li>
        </ul>
      </nav>

      <div className={`header__menu-backdrop ${isMenuOpen && 'header__menu-backdrop_open'}`} onClick={handleMenuClose}></div>
      <div className={`header__menu-burger ${isMenuOpen && 'header__menu-burger_active'}`} onClick={handleMenuToggle}>
        <div className="header__menu-burger-stripe"></div>
      </div>
    </header>
  );
}

export default Header;
