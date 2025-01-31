'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../homeimages/logo.svg";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/admin/login');
  };

  return (
    <nav className='flex bg-black h-20 w-4/5 gap-16 items-center p-12 rounded-l-lg rounded-r-lg rounded-br-full rounded-bl-full max-770:relative max-770:justify-between max-770:gap-0 max-770:p-6 max-770:w-full max-770:rounded-none max-1439:w-full'>
      {/* Desktop Links */}
      <div className='flex w-2/4 gap-3 h-8 max-770:hidden'>
        <Link href='/admin/dashboard'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Dashboard</h1>
        </Link>
        <Link href='/admin/package'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Packages</h1>
        </Link>	
        <Link href='/admin/project'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Project</h1>
        </Link>
        <Link href='/admin/contactus'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Contact Leads</h1>
        </Link>
        <Link href='/admin/bookLead'>
          <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Booking Leads</h1>
        </Link>
      </div>

      {/* Logo */}
      <div className='flex w-24 justify-center max-770:block max-1025:hidden'>
        <Link href="/">
          <Image className='w-[49px] h-[39px]' src={Logo} alt='icon' />
        </Link>
      </div>

      {/* Desktop Logout */}
      <div className='w-[30%] flex justify-center ml-28 max-770:hidden'>
        <Link 
          onClick={handleLogout} 
          href="/admin/login" 
          className="flex justify-center items-center gap-2.5 w-9/12 h-12 bg-[rgb(151,141,239)] text-white text-sm min-h-9 rounded-full transition-all ease-out hover:bg-purple-400 hover:scale-110 hover:-translate-y-1 duration-500 delay-200"
        >
          Log out
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hidden max-770:flex p-2 text-white hover:text-[rgb(151,141,239)] transition-colors z-50"
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
      <div className={`hidden max-770:block absolute top-full left-0 right-0 bg-black transition-all duration-300 transform ${
        isOpen 
          ? 'translate-y-0 opacity-100 pointer-events-auto z-40' 
          : '-translate-y-2 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-4 p-4 text-center">
          <Link href='/admin/dashboard' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Dashboard</h1>
          </Link>
          <Link href='/admin/package' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Packages</h1>
          </Link>	
          <Link href='/admin/project' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Project</h1>
          </Link>
          <Link href='/admin/contactus' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Contact Leads</h1>
          </Link>
          <Link href='/admin/bookLead' onClick={() => setIsOpen(false)}>
            <h1 className='text-white px-3 py-2 hover:text-[rgb(151,141,239)] transition-all text-xs font-medium'>Booking Leads</h1>
          </Link>
          <Link 
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }} 
            href="/admin/login" 
            className="flex justify-center items-center gap-2.5 w-full h-12 bg-[rgb(151,141,239)] text-white text-sm min-h-9 rounded-full transition-all ease-out hover:bg-purple-400 hover:scale-110 hover:-translate-y-1 duration-500 delay-200"
          >
            Log out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;