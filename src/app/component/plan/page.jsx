// import React from "react";
// import step1 from "./images/step1.svg";
// import step2 from "./images/step2.svg";
// import step3 from "./images/step3.svg";
// import hand from "./images/hand.svg";
// import wireframe from "./images/wireframe.svg";
// import Image from "next/image";
// const Plan = () => {
//   return (
//     <div className="w-full bg-white h-[700px] flex ">
//       <div className="w-1/2 bg-white flex flex-wrap gap-[20px] justify-center items-center h-[500px] ">
//         <div className="w-[40%] h-[165px] flex flex-col justify-center items-center bg-white gap-[7px]">
//           <Image src={step1} alt="icon" className="w-[34%] pt-[4px] h-[86px] " />
//           <p className="w-full font-medium h-full text-[#6A63A8] text-[12px] text-center">
//             1-Define In the first phase, its necessary to determine exactly what
//             needs to be created, and why
//           </p>
//         </div>
//         <div className="w-[40%] mb-[40px] h-[165px] flex flex-col justify-center items-center bg-white gap-[7px]">
//           <Image src={step2} alt="icon" className="w-[34%] pt-[4px] h-[86px]" />
//           <p className="w-full font-medium h-full text-[#6A63A8] text-[12px] text-center">
//             2. (UX) research is about diving deep into how customers interact
//             with your brand on a practical, functional level, and observing how
//             easily they can complete their tasks and meet their goals.
//           </p>
//         </div>
//         <div className="w-[40%] h-[165px] flex flex-col justify-center items-center bg-white gap-[7px]">
//           <Image src={step3} alt="icon" className="w-[34%] pt-[4px] h-[86px]" />
//           <p className="w-full font-medium h-full text-[#6A63A8] text-[12px] text-center">
//             This involves creating user personas, user journey maps, and
//             defining the information architecture. Collaborative planning with
//             stakeholders is crucial at this stage to align design goals with
//             business objectives and establish a roadmap for the project
//           </p>
//         </div>
//       </div>
//       <div className="w-1/2 bg-white h-[500px] flex justify-center ">
//         <div className="w-[63%] h-[130px] text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[11px] pt-[10px]">
//           <h1 className="w-full h-[29px] font-semibold text-[14px] text-[#978DEF]	">
//             WireFrame
//           </h1>
//           <p className="w-full h-[50px] font-semibold text-[12px] text-[#5A5A5A]">
//             A wireframe is a basic, black-and-white layout that outlines the
//             structure of a web page or an app screen. A wireframe focuses on
//             site architecture, determines the size and location of page
//             elements, and defines the paths between the pages
//           </p>
//           <div className="w-full h-[500px] flex items-center justify-center mt-[60px]">
//             <Image
//               src={wireframe}
//               alt="wireframe"
//               className="w-[55%] h-[327px]"
//             />
//           </div>
//         </div>
//         <div className="absolute right-0 w-[100%] h-[301px]">
//           <Image
//             src={hand}
//             alt="icon"
//             className="absolute right-0 w-[19%] h-[301px]"
//           />
//         </div>
//       </div>
//     </div>
//   ); 
// };

// export default Plan;
"use client";
import React, { useState, useEffect } from "react";
import step1 from "./images/step1.svg";
import step2 from "./images/step2.svg";
import step3 from "./images/step3.svg";
import hand from "./images/hand.svg";
import wireframe from "./images/wireframe.svg";
import Image from "next/image";

const Plan = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // Delay for smoother animation
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="w-full bg-white h-[700px] flex">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-wrap gap-[20px] justify-center items-center h-[500px]">
        {/* Card 1 */}
        <div
          className={`w-[40%] h-[165px] flex flex-col justify-center items-center bg-white gap-[7px] transform transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Image src={step1} alt="icon" className="w-[34%] pt-[4px] h-[86px]" />
          <p className="w-full font-medium h-full text-[#6A63A8] text-[12px] text-center">
            1-Define In the first phase, its necessary to determine exactly what
            needs to be created, and why.
          </p>
        </div>
        {/* Card 2 */}
        <div
          className={`w-[40%] mb-[40px] h-[165px] flex flex-col justify-center items-center bg-white gap-[7px] transform transition-all duration-700 ease-out delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Image src={step2} alt="icon" className="w-[34%] pt-[4px] h-[86px]" />
          <p className="w-full font-medium h-full text-[#6A63A8] text-[12px] text-center">
            2. (UX) research is about diving deep into how customers interact
            with your brand on a practical, functional level, and observing how
            easily they can complete their tasks and meet their goals.
          </p>
        </div>
        {/* Card 3 */}
        <div
          className={`w-[40%] h-[165px] flex flex-col justify-center items-center bg-white gap-[7px] transform transition-all duration-700 ease-out delay-400 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Image src={step3} alt="icon" className="w-[34%] pt-[4px] h-[86px]" />
          <p className="w-full font-medium h-full text-[#6A63A8] text-[12px] text-center">
            This involves creating user personas, user journey maps, and defining
            the information architecture. Collaborative planning with
            stakeholders is crucial at this stage to align design goals with
            business objectives and establish a roadmap for the project.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white h-[500px] flex justify-center">
        <div
          className={`w-[63%] h-[130px] text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[11px] pt-[10px] transform transition-all duration-700 ease-out delay-600 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h1 className="w-full h-[29px] font-semibold text-[14px] text-[#978DEF]">
            WireFrame
          </h1>
          <p className="w-full h-[50px] font-semibold text-[12px] text-[#5A5A5A]">
            A wireframe is a basic, black-and-white layout that outlines the
            structure of a web page or an app screen. A wireframe focuses on site
            architecture, determines the size and location of page elements, and
            defines the paths between the pages.
          </p>
          <div className="w-full h-[500px] flex items-center justify-center mt-[60px]">
            <Image src={wireframe} alt="wireframe" className="w-[55%] h-[327px]" />
          </div>
        </div>
        <div className="absolute right-0 w-[100%] h-[301px]">
          <Image
            src={hand}
            alt="icon"
            className="absolute right-0 w-[19%] h-[301px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
