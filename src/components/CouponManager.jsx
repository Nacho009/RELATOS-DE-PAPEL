import React, { useState } from 'react';

const CouponManager = ({ totalPrice, onDiscountApplied }) => {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (coupon === 'DESCUENTO10') {
      const discountValue = 0.1;
      setDiscount(discountValue);
      onDiscountApplied(discountValue);
      alert('Cupón aplicado: 10% de descuento');
    } else {
      alert('Cupón no válido');
    }
  };

  const totalWithDiscount = totalPrice - totalPrice * discount;

  return (
    <div className="coupon-manager p-4 border rounded-lg bg-gray-50">
      <div className="coupon-manager__input-group flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Cupón ahorro"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="coupon-manager__input border rounded p-2 w-full"
        />
        <button
          onClick={handleApplyCoupon}
          className="coupon-manager__apply-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Aplicar
        </button>
      </div>
      <div className="coupon-manager__total flex items-center mt-4">
        <span className="coupon-manager__total-label font-bold text-lg">Total con descuento:</span>
        <span className="coupon-manager__total-value text-lg font-bold text-green-700 ml-2">
          ${totalWithDiscount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CouponManager;
