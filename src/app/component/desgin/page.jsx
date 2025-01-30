// import React from 'react'
// import arr from "./images/arr.svg"
// import des from "./images/des.svg"
// import Image from 'next/image'
// const Design = () => {
//   return (
//     <div className='w-full h-[600px] bg-white flex'>
//         <div className='w-1/2 h-[500px] bg-white flex flex-col items-center pt-[50px]'>
//                 <div className='w-[63%] h-[130px] text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[15px] pt-[10px]'>
//                                     <h1 className='w-full h-[29px] font-semibold text-[14px] text-[#978DEF]	'>User Interface (UI)</h1>
//                                     <p className='w-full h-[50px] font-semibold text-[12px] text-[#5A5A5A]'>design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable.</p>
//                 </div>
//                     <Image src={arr} alt='icon'className='w-[5%] h-[62px]'/>
//                 <div className='w-[63%] h-[130px] text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[11px] pt-[10px]'>
//                     <p className='w-full h-[50px] font-semibold text-[12px] text-[#5A5A5A]'>At this stage, we are making the planning process alive. Both the design and functions of a website affect how easy it is to navigate through it and find what one looks for. You dont want your clients to struggle to get the right services, because you risk losing them quickly. Strategies are there to ensure that your eye-catching website is user-friendly and interactive, and highlights the company unique features.</p>
//                 </div>
//         </div>
//         <div className='w-1/2 h-[500px] flex justify-center items-center'>
//             <Image src={des} alt='des' className='w-[60%] h-[288px]'/>
//         </div>
//     </div>
//   )
// }

// export default Design
"use client"
import React, { useState, useEffect } from "react";
import arr from "./images/arr.svg";
import des from "./images/des.svg";
import Image from "next/image";

const Design = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // Delay for animation
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="w-full h-[600px] bg-white flex">
      {/* Left Section */}
      <div className="w-1/2 h-[500px] bg-white flex flex-col items-center pt-[50px]">
        {/* Card 1 */}
        <div
          className={`w-[63%] h-[130px] text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[15px] pt-[10px] transform transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="w-full h-[29px] font-semibold text-[14px] text-[#978DEF]">
            User Interface (UI)
          </h1>
          <p className="w-full h-[50px] font-semibold text-[12px] text-[#5A5A5A]">
            Design is the process designers use to build interfaces in software
            or computerized devices, focusing on looks or style. Designers aim to
            create interfaces which users find easy to use and pleasurable.
          </p>
        </div>

        {/* Arrow Image */}
        <Image
          src={arr}
          alt="icon"
          className={`w-[10%] h-[50px] my-4 transform transition-all duration-700 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-200" : "-translate-y-10 opacity-0"
          }`}
        />

        {/* Card 2 */}
        <div
          className={`w-[63%] h-[130px] text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[11px] pt-[10px] transform transition-all duration-700 ease-out delay-400 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <p className="w-full h-[50px] font-semibold text-[12px] text-[#5A5A5A]">
            At this stage, we are making the planning process alive. Both the
            design and functions of a website affect how easy it is to navigate
            through it and find what one looks for. You dont want your clients
            to struggle to get the right services because you risk losing them
            quickly. Strategies are there to ensure that your eye-catching
            website is user-friendly and interactive and highlights the company
            unique features.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`w-1/2 h-[500px] flex justify-center items-center transform transition-all duration-700 ease-out delay-600 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Image src={des} alt="des" className="w-[60%] h-[288px]" />
      </div>
    </div>
  );
};

export default Design;

