import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <table className="cart w-full border-collapse border border-gray-300 mb-6">
      <thead>
        <tr className="cart__header bg-gray-100">
          <th className="cart__header-cell border border-gray-300 p-2">Producto</th>
          <th className="cart__header-cell border border-gray-300 p-2">Cantidad</th>
          <th className="cart__header-cell border border-gray-300 p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="cart__row text-center">
            <td className="cart__cell border border-gray-300 p-2 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="cart__item-image w-12 h-12 object-cover rounded"
              />
              <span className="cart__item-title">{item.title}</span>
            </td>
            <td className="cart__cell border border-gray-300 p-2">
              <select
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value, 10))
                }
                className="cart__quantity-selector border rounded p-1"
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </td>
            <td className="cart__cell border border-gray-300 p-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="cart__remove-button text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;