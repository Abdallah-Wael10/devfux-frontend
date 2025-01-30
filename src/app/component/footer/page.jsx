import Image from 'next/image'
import React from 'react'
import logo from "../../homeimages/logo.svg"
import Link from 'next/link'
import face from "./images/face.svg"
import insta from "./images/insta.svg"
import mail from "./images/mail.svg"
const Footer = () => {
  return (
    <div className='w-full h-max pb-5 bg-[#494574] flex max-770:flex-col '>
      <div className='w-[25%] h-max pb-5 flex flex-col gap-[10px] pl-[10px] pt-[20px] max-770:w-full'>
                <h1 className='w-full h-[21px] text-[14px] text-white font-bold'>Lets Get Touch</h1>
                <p className='w-full h-[21px] text-[14px] text-white font-medium'>devfuxcompany@gmail.com</p>
                <div className='w-full flex gap-3'>
                <input type="email" name="" className='w-[65%] h-[38px] bg-white pl-4 rounded-lg' placeholder='Email' />
                <button className='w-[26%] h-[41px] text-white bg-[#978DEF] flex justify-center items-center rounded-lg'>Send</button>
                </div>
      </div>
      <div className='w-[40%] h-max pb-5 flex flex-col justify-center items-center text-center pt-[30px] max-770:w-full'>
        <div className='w-full flex flex-col h-[150px] justify-center items-center gap-[20px]'>
            <Image src={logo} alt='logo' className='w-[15%] h-[100px]'/>
            <h1 className='w-full h-[20px] text-[35px] text-white font-bold'>D<span className='text-[#978DEF]'>evF</span>ux</h1>
        </div>
      </div>
      <div className='w-[35%] h-max pb-5 pt-7 flex max-770:w-full max-770:items-center'>
            <div className='w-1/2 h-max pb-5 flex flex-col gap-3 justify-center items-center'>
            <Link href="" className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>Home</Link>
            <Link href="" className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>Service</Link>
            <Link href="" className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>Portfolio</Link>
            <Link href="" className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>PRICING & PACKAGES</Link>
            <Link href="" className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>About us</Link>
            <Link href="" className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>CONTACT US</Link>
            </div>
            <div className='w-[50%] h-max pb-5 flex flex-col justify-center gap-[20px]'>
                <h1 className='w-full h-[20px] text-center text-white text-[12px] font-semibold'>Follow Us</h1>
                <div className='w-full flex justify-center gap-3' >
                    <a href='' target='_blank'>
                    <Image src={face} alt='facebook' />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <Image src={insta} alt='instagram' />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <Image src={mail} alt='twitter' />
                    </a>
    </div>
            </div>

      </div>
     
    </div>
  )
}

export default Footer
