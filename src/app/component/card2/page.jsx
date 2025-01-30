import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card2 = ({ id, title, status, mainImage, onDelete, onEdit }) => {
  return (
    <div className='w-[26%] h-max pb-6 bg-white rounded-[25px] flex flex-col justify-center items-center text-center gap-[10px] border border-gray-300 transition-transform duration-500 ease-in-out hover:shadow-lg max-460:w-[93%] max-770:w-[70%] max-1025:w-[39%] max-1440:w-[35%]'>
      <h1 className='w-full h-7 text-[20px] font-medium text-black'>{title}</h1>
      <p className='w-full h-[15px] font-medium text-[#909090] text-[12px]'>{status}</p>
      
      {mainImage && (
        <Image 
          src={mainImage} 
          alt='Project image' 
          width={300} 
          height={200} 
          className='w-[90%] h-48 object-cover rounded-lg'
        />
      )}
      
      <div className="w-full flex flex-col gap-2 mt-4 px-4">
        <Link 
          href="#" 
          className='border border-gray-300 w-full h-10 text-sm text-[#978DEF] flex justify-center items-center rounded-md bg-white transition-all duration-300 hover:bg-purple-400 hover:text-white'
        >
          Case Study
        </Link>
        
        <div className="flex gap-2 w-full">
          <button
            onClick={onEdit}
            className="w-1/2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="w-1/2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;