import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ title, status, mainImage }) => {

  // Forming the full image path
  const fullImageUrl = mainImage ? `${mainImage.replace("\\", "/")}` : null;

  return (
    <div className='w-[26%] h-max pb-6 bg-white rounded-[25px] flex flex-col justify-center items-center text-center gap-[10px] border border-gray-300 transform transition-transform duration-500 ease-in-out hover:shadow-lg max-460:w-[93%] max-770:w-[70%]  max-1025:w-[39%] max-1440:w-[35%]'>
      <h1 className='w-full h-7 text-[20px] font-medium text-black'>{title}</h1>
      <p className='w-full h-[15px] font-medium text-[#909090] text-[12px]'>{status}</p>
      {fullImageUrl && (
        <Image src={fullImageUrl} alt='Project image' width={100} height={500} className='w-[90%] h-max'/>
      )}
      <Link href="" className='border border-gray-300 border-solid w-[89%] h-[30px] text-[12px] text-[#978DEF] flex justify-center items-center rounded-md bg-white transition-all ease-out duration-500 hover:bg-purple-400 hover:scale-100 hover:-translate-y-1 hover:text-white'>
        Case Study
      </Link>
    </div>
  );
}

export default Card;
