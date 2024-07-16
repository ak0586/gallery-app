// Modal.js
import React from 'react';
import './Modal.css';
const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal">
      <img src={image} alt="modal" />
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;