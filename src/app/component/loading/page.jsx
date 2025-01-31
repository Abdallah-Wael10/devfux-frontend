import React from 'react';
import Image from 'next/image';
import logo from "../../homeimages/logo.svg";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="animate-spin">
        <Image 
          src={logo} 
          alt="logo" 
          width={100} 
          height={100}
          className="w-24 h-24" 
        />
      </div>
      <span className="sr-only text-black">Loading...</span>
    </div>
  );
};

export default Loading;