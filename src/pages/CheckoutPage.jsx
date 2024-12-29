import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../hooks/useCart';
import CouponManager from '../components/CouponManager';

const CheckoutPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  const handleDiscountApplied = (discount) => {
    console.log(`Descuento aplicado: ${discount * 100}%`);
  };

  return (
    <div className="checkout-page p-6 max-w-5xl mx-auto">
      <h1 className="checkout-page__title text-2xl font-bold mb-6">Resumen del carrito</h1>
      <table className="checkout-page__table w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="checkout-page__table-header bg-gray-100">
            <th className="checkout-page__table-header-cell border border-gray-300 p-2">Producto</th>
            <th className="checkout-page__table-header-cell border border-gray-300 p-2">Cantidad</th>
            <th className="checkout-page__table-header-cell border border-gray-300 p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="checkout-page__table-row text-center">
              <td className="checkout-page__table-cell border border-gray-300 p-2 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="checkout-page__item-image w-12 h-12 object-cover rounded"
                />
                <span className="checkout-page__item-title">{item.title}</span>
              </td>
              <td className="checkout-page__table-cell border border-gray-300 p-2">
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  className="checkout-page__quantity-selector border rounded p-1"
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td className="checkout-page__table-cell border border-gray-300 p-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="checkout-page__remove-button text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CouponManager
        totalPrice={totalPrice}
        onDiscountApplied={handleDiscountApplied}
      />

      <button className="checkout-page__proceed-button bg-green-500 text-white px-6 py-3 rounded w-full hover:bg-green-700 mt-6">
        Proceder al pago
      </button>
    </div>
  );
};

export default CheckoutPage;
