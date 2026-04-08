import React from 'react';
import '../styles/main.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <h1 className="logo">QuickCart</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#cart" className="cart-link">Cart 🛍️</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
