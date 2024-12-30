import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CouponManager from '../components/CouponManager';
import Cart from '../components/Cart';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
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

      <Cart />

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
