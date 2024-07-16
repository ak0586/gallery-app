// ImageGallery.js
import React from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';



const image = [/* Add your image URLs here */
   "./image/Colour10.png",
"./image/Colour11.jpg",
"./image/Colour12.jpg",
"./image/Colour13.jpg",
"./image/LandWater1.png",
"./image/LandWater2.png",
"./image/LandWater3.jpg",
"./image/LandWater4.jpg",
"./image/LandWater5.jpg",
"./image/LandWater6.jpg",
"./image/LandWater7.jpg",
"./image/LandWater8.jpg",
"./image/LandWater9.jpg",
"./image/LandWater10.jpg",
"./image/LandWater11.jpg",
"./image/LandWater12.jpg",
"./image/LandWater13.jpg",
"./image/LandWater14.jpg",
"./image/Misc1.jpg",
"./image/Misc2.jpg",
"./image/Misc3.jpg",
"./image/Misc4.jpg",
"./image/Misc5.jpg",
"./image/Misc6.png",
"./image/Misc7.jpg",
"./image/Misc8.jpg",
"./image/Misc9.jpg",
"./image/Misc10.jpg",
"./image/Misc11.jpg",
"./image/Mountains1.jpg",
"./image/Mountains2.jpg",
"./image/Mountains3.jpg",
"./image/Mountains4.jpg",
"./image/Mountains5.jpg",
"./image/Mountains6.jpg",
"./image/Mountains7.jpg",
"./image/Mountains8.jpeg",
"./image/Mountains9.jpg",
"./image/Mountains10.jpg",
"./image/Mountains11.jpg",
"./image/Mountains12.jpg",
"./image/Mountains13.jpg",
"./image/Mountains14.jpg",
"./image/Mountains15.jpg",
"./image/Mountains16.jpg",
"./image/Mountains17.jpg",
"./image/Mountains18.jpg",
"./image/Mountains19.jpg",
"./image/Mountains20.jpg",
"./image/Mountains21.jpg",
"./image/Mountains22.jpg",
"./image/Mountains23.png",
"./image/Mountains24.jpg",
"./image/Mountains25.jpg",
"./image/Mountains26.png",
"./image/Mountains27.png",
"./image/Mountains28.jpg",
"./image/Mountains29.jpg",
"./image/Mountains30.jpg",
"./image/Mountains31.jpg",
"./image/Nature1.jpg",
"./image/Nature2.jpg",
"./image/Nature3.jpg",
"./image/Nature4.jpg",
"./image/Nature5.jpg",
"./image/Nature6.png",
"./image/Nature7.jpg",
"./image/Nature8.jpg",
"./image/Nature9.jpg",
"./image/Nature10.jpg",
"./image/Nature11.jpg",
"./image/Nature12.jpg",
"./image/Nature13.jpg",
"./image/Nature14.png",
"./image/Nature15.jpg",
"./image/Nature16.jpg",
"./image/Nature17.jpg",
"./image/Nature18.jpg",
"./image/Nature19.jpg",
"./image/Nature20.jpg",
"./image/Nature21.jpg",
"./image/Nature22.jpg",
"./image/Nature23.jpg",
"./image/Nature24.jpg",
"./image/Nature25.jpg",
"./image/Nature26.jpg",
"./image/Nature27.jpg",
"./image/Nature28.jpg",
"./image/Nature29.jpg",
"./image/Nature30.jpg",
"./image/Nature31.jpg",
"./image/Nature32.jpg",
"./image/Nature33.jpg",
"./image/Nature34.jpg",
"./image/Nature35.jpg",
"./image/Nature36.jpg",
"./image/Nature37.jpg",
"./image/Sand1.jpg",
"./image/Sand2.jpg",
"./image/Space1.jpg",
"./image/Space2.jpg",
"./image/Space3.jpg",
"./image/Space4.jpg",
"./image/wall0.png",
"./image/Water1.jpg",
"./image/Water2.jpg",
"./image/Water3.jpg",
"./image/Water4.jpg",
"./image/Water5.jpg",
"./image/Water6.jpg",
"./image/Water7.jpg",
"./image/Water8.jpg",
"./image/Water9.jpg",
"./image/Water10.jpg",
"./image/Water11.jpg",
"./image/Water12.jpg",
"./image/Water13.jpg",
"./image/Wheat1.jpg",
"./image/Wheat2.jpg",
"./image/Wheat3.jpg",
"./image/Wheat4.jpg",
"./image/City1.jpg",
"./image/City2.jpg",
"./image/City3.png",
"./image/City4.jpg",
"./image/City5.jpg",
"./image/City6.jpg",
"./image/City7.jpg",
"./image/City8.jpg",
"./image/Colour1.jpg",
"./image/Colour2.jpg",
"./image/Colour3.jpg",
"./image/Colour4.jpg",
"./image/Colour5.jpg",
"./image/Colour6.jpg",
"./image/Colour7.jpg",
"./image/Colour8.jpg",
"./image/Colour9.png",
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (e) => {
    setSelectedImage(e.target.src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {image.map((image, index) => (
        <Image key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGallery;