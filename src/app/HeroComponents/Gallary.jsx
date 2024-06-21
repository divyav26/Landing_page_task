"use client";
import React, { useState } from 'react'
import Lightbox from './Lightbox';
import { gallary } from '../Data/CompData'
import Image from 'next/image';

const Gallary = () => {
    const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };
  return (
    <div className='grid grid-cols-4 gap-4 py-4'>
      
          {gallary.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={image}
              alt={`Property ${index + 1}`}
              className="w-full h-full object-cover"
              onClick={() => openLightbox(image)}
            />
          </div>
        ))}
     
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </div>
  )
}

export default Gallary
