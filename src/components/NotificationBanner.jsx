import React from 'react';

const NotificationBanner = ({ message, onClose }) => {
  return (
    <div className="notification-banner bg-blue-500 text-white px-4 py-2 flex justify-between items-center shadow-md">
      <span className="notification-banner__message">{message}</span>
      <button
        onClick={onClose}
        className="notification-banner__close-btn text-white font-bold text-lg hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default NotificationBanner;
