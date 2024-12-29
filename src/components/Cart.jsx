import React, { useContext } from 'react';
import { CartContext } from '../hooks/useCart';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <ul className="cart__items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart__item flex justify-between items-center p-4 border-b">
            <div className="cart__details">
              <span className="cart__item-title font-semibold">{item.title}</span>
              <span className="cart__item-price text-gray-600"> - ${item.price}</span>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="cart__remove-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
