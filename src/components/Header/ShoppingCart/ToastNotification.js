import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ToastNotification.css';

export default function ToastNotification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-notification">
      <div className="message">{message}</div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

ToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
