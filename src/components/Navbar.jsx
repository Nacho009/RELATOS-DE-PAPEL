import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/LOGO-1.JPG';
import CartSidebar from './CartSidebar'; 
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation(); 
  const { cartItems } = useContext(CartContext);

  const toggleCart = () => {
    if (location.pathname !== '/checkout') {
      setIsCartOpen(!isCartOpen);
    }
  };

  return (
    <nav className="navbar bg-blue-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="navbar__left flex items-center gap-8">
        <div className="navbar__branding flex items-center gap-4">
          <img src={logo} alt="Relatos de Papel" className="navbar__logo h-10 w-10" />
          <h1 className="navbar__title text-xl font-bold tracking-wide">Relatos de Papel</h1>
        </div>

        <div className="navbar__divider border-l border-gray-400 h-10 mx-4"></div>

        <ul className="navbar__links flex gap-6">
          <li className="navbar__link-item">
            <Link to="/home" className="navbar__link hover:text-gray-200 text-lg transition">
              Inicio
            </Link>
          </li>
          <li className="navbar__link-item">
            <Link to="/checkout" className="navbar__link hover:text-gray-200 text-lg transition">
              Checkout
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar__right flex items-center gap-4">
        <button
          onClick={toggleCart}
          className={`navbar__cart-btn hover:text-gray-200 transition flex items-center relative ${
            location.pathname === '/checkout' ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={location.pathname === '/checkout'}
        >
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="navbar__cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>

        <Link to="/profile" className="navbar__profile-btn hover:text-gray-200 transition">
          <FaUserCircle size={24} />
        </Link>

        {isCartOpen && <CartSidebar onClose={toggleCart} />}
      </div>
    </nav>
  );
};

export default Navbar;
