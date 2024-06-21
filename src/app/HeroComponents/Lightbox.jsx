"use client";

import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <Image 
          src={image} 
          alt="Selected property" 
          className="w-full h-[70vh] object-cover overflow-hidden"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
