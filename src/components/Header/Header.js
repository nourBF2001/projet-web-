import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <header className="header">
      <div className="top-banner">
        Achetez l'iPhone, l'iPad ou un Mac par facilité de paiement allant de 3 jusqu'à 36 mois. 
        <a href="#" className="learn-more">En savoir plus</a>
      </div>
      <nav className="navbar">
        <div className="logo">
          <span>iStore</span>
          <span className="premium">Premium Reseller</span>
        </div>
        <ul className="nav-links">
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Audio</li>
          <li>Accessoires</li>
          <li>Entreprise</li>
          <li>SAV</li>
          <li className="promo">PROMO</li>
          <li>Stores</li>
        </ul>
        <div className="icons">
          <span className="icon">
            <FaSearch title="Search" />
          </span>
          <span className="icon">
            <FaUser title="User" />
          </span>
          <span className="icon cart">
            <FaShoppingCart title="Cart" />
            <span className="cart-count">0</span>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;