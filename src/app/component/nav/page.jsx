"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../homeimages/logo.svg"
import camera from "../../homeimages/camera.svg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex bg-black h-20 w-4/5 gap-16 items-center p-12 rounded-l-lg rounded-r-lg rounded-br-full rounded-bl-full max-770:relative max-770:justify-between max-770:gap-0 max-770:p-6 max-770:w-full max-770:rounded-none max-1439:w-full'>
      {/* Desktop Links (hidden on mobile) */}
      <div className='flex w-2/4 gap-3 h-8 max-770:hidden'>
        <Link href='/'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium w-10'>Home</h1>
        </Link>
        <Link href='/pages/Service_page'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium w-12'>Service</h1>
        </Link>	
        <Link href='/pages/Portfolio'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium w-13'>Portfolio</h1>
        </Link>
        <Link href='/pages/package_page'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium w-40'>PRICING & PACKAGES</h1>
        </Link>
        <Link href='/'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium w-20'>About us</h1>
        </Link>
        <Link href='/pages/contactus'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium w-28'>CONTACT US</h1>
        </Link>
      </div>

      {/* Logo */}
      <div className='flex w-24 justify-center max-770:block max-1439:hidden'>
        <Link href='/'>
          <Image className='w-[49px] h-[39px]' src={Logo} alt='icon'/>
        </Link>
      </div>

      {/* Desktop Button (hidden on mobile) */}
      <div className='w-[100%] flex justify-center ml-28 max-770:hidden'>
        <Link href="/pages/book" className="flex justify-center items-center gap-2.5 w-full h-12 animate-bounce bg-[rgb(151,141,239)] text-white text-sm min-h-9 rounded-full transition-all ease-out hover:bg-purple-400 hover:scale-110 hover:-translate-y-1 duration-500 delay-200">
          <Image src={camera} alt="icon"/>
          BOOK MEETING
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hidden max-770:flex p-2 text-white hover:text-[rgb(151,141,239)] transition-colors"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div className={` hidden max-770:block max-770:absolute max-770:top-full max-770:left-0 max-770:right-0 max-770:bg-black max-770:z-50 max-770:transition-all max-770:duration-300 max-770:transform ${
        isOpen 
          ? 'max-770:translate-y-0 max-770:opacity-100 max-770:visible' 
          : 'max-770:-translate-y-2 max-770:opacity-0 max-770:invisible'
      }`}>
        <div className="max-770:flex max-770:flex-col max-770:gap-4 max-770:p-4 max-770:text-center">
          <Link href='/' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Home</h1>
          </Link>
          <Link href='/pages/Service_page' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Service</h1>
          </Link>	
          <Link href='/pages/Portfolio' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Portfolio</h1>
          </Link>
          <Link href='/pages/package_page' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>PRICING & PACKAGES</h1>
          </Link>
          <Link href='/' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>About us</h1>
          </Link>
          <Link href='/pages/contactus' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>CONTACT US</h1>
          </Link>
          <Link 
            href="/pages/book" 
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center gap-2.5 w-full h-12 animate-bounce bg-[rgb(151,141,239)] text-white text-sm min-h-9 rounded-full transition-all ease-out hover:bg-purple-400 hover:scale-110 hover:-translate-y-1 duration-500 delay-200"
          >
            <Image src={camera} alt="icon"/>
            BOOK MEETING
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav