// Image.js
import React from 'react';
import './Image.css';
// import 'ImageGallery.js';

const Image = ({ image, openModal }) => {
  return (
    <div >
        <img src={image} alt="gallery"  onClick={openModal} className='image' />
    </div>
  );
};

export default Image;