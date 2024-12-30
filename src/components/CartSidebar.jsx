import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const CartSidebar = ({ onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.precio * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    onClose();
    navigate('/checkout'); 
  };

  return (
    <div className="cart-sidebar fixed top-0 right-0 h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300 w-80 z-50">
      <div className="cart-sidebar__header flex justify-between items-center p-4 bg-blue-500 text-white">
        <h2 className="cart-sidebar__title text-lg font-bold">Carrito</h2>
        <button onClick={onClose} className="cart-sidebar__close-btn text-white hover:underline">
          Cerrar
        </button>
      </div>
      <div className="cart-sidebar__content p-4">
        {cartItems.length > 0 ? (
          <>
            <ul className="cart-sidebar__items space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="cart-sidebar__item flex items-center justify-between p-4 border-b"
                >
                  <div className="cart-sidebar__item-details flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-sidebar__item-image w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="cart-sidebar__item-title font-semibold">{item.title}</p>
                      <p className="cart-sidebar__item-price text-sm text-gray-600">
                        ${item.precio} x {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cart-sidebar__remove-btn text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-sidebar__summary mt-4">
              <p className="cart-sidebar__total text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
              <button 
                className="cart-sidebar__checkout-btn bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-green-700"
                onClick={handleCheckout}
              >
                Proceder al checkout
              </button>
            </div>
          </>
        ) : (
          <p className="cart-sidebar__empty text-center text-gray-500">El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
