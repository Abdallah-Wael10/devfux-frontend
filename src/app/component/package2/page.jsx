"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../../homeimages/logo.svg"
import Link from 'next/link'
import cloud1 from "./image/cloud1.svg"
import left from "./image/leftp.svg"
import { useState } from 'react'
import right from "./image/rightp.svg"
const Package2 = ({priceUSD, priceEGP, name,fet1,fet2,fet3,fet4,fet5,fet6,fet7,fet8}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('EGP'); // Default to EGP

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };
  const price = selectedCurrency === 'EGP' ? priceEGP : priceUSD;
  const priceSymbol = selectedCurrency === 'EGP' ? 'EGP' : '$';
  const priceCurrencyOptions = [
    { label: "EGP", value: "EGP" },
    { label: "USD", value: "USD" },
  ];
  return (
    <div className='w-[100%]  h-max pb-5 items-center bg-white rounded-[20px] border-gray-400 border-solid border-[1px] flex flex-col gap-[10px] max-460:w-[95%] max-770:w-[95%] max-1025:w-[100%] max-1440:w-[100%] '>
            <div className='w-full h-[63px] pt-[10px] pr-[30px] flex  items-center justify-between pl-[40px] '>
            <Image src={logo} alt='logo' className=''/>
            <select className='w-[19%] text-black text-center h-[34px] bg-white rounded-md border border-gray-300'onChange={handleCurrencyChange} value={selectedCurrency}>
            {priceCurrencyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
            </select>
            </div>
      {/* <Image src={frame} alt='icon' className=''/> */}
      <div className='flex w-full  justify-center h-[60px]'>
        <Image src={cloud1} alt='icon' className='w-[32%] h-[44px] mb-3'/>
        <Image src={cloud1} alt='icon' className='w-[30%] h-[39px] mt-4'/>

      </div>
      <div className='w-full h-[170px] flex justify-center items-center bg-white'>
      <Image src={left} alt='icon'/>
      <div className=' flex flex-col w-full h-[70px]  justify-center items-center text-center gap-4 '>
      <h1 className='w-full h-[60px] text-[#978DEF] text-[35px]   font-semibold max-330:text-[18px] max-376:text-[23px]'>{price} {priceSymbol}</h1>
      <h1 className='w-full h-[30px] text-[#978DEF] text-[20px] font-semibold text-center'>{name}</h1>     
      </div>
      <Image src={right} alt='icon'/>
      </div>
      <hr className='w-full h-[1px]'/>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet1}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet2}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet3}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet4}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet5}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet6}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet7}</h1>
      </div>
      <div className='flex w-full h-[30px] justify-start pl-[19px] items-center gap-[20px] text-[16px] font-medium text-[#737373]'>
        <span className='w-[14px] h-[14px] bg-[#978DEF] rounded-full'></span>
        <h1 className='w-full h-[20px]'>{fet8}</h1>
      </div>
      <div className='w-full h-[45px] flex justify-center items-center'>
      <Link href="/pages/contactus" className='w-[80%] h-[43px] bg-[#978DEF] text-white rounded-[11px] flex justify-center items-center'>Contact Us</Link>  
      </div>
      
    </div>
  )
}

export default Package2
