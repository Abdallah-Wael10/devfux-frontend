
"use client"
import React, { useState, useEffect } from "react";
import arr from "../desgin/images/arr.svg";
import dev from "./images/dev1.svg";
import Image from "next/image";
const Dev = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="w-full h-auto bg-white flex flex-wrap md:flex-nowrap items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto flex flex-col items-center pt-8">
        {/* Card 1 */}
        <div
          className={`w-[80%] md:w-[63%] h-auto bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[15px] p-4 text-center transform transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="text-[14px] font-semibold text-[#978DEF]">Web Development</h1>
          <p className="text-[12px] text-[#5A5A5A]">
            There are three types of web development roles: developers who
            specialize in the (UI) user interface (“front-end”), those who write
            the underlying code for running all website operations (“back-end”),
            and those who manage all aspects of a website (“full stack”).
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
          className={`w-[80%] md:w-[63%] h-auto bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-[11px] p-4 text-center transform transition-all duration-700 ease-out delay-400 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <p className="text-[12px] text-[#5A5A5A]">
            Ensuring smooth functionality is a vital step in the website
            development process. Our experienced web development team leverages
            their expertise and knowledge of programming languages to ensure
            seamless functionality. With meticulous attention to detail, we
            implement the necessary content management systems (CMS) and
            plugins, guaranteeing optimal performance. Trust us to build a
            website that not only meets your expectations but also excels in
            usability and efficiency.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`w-full md:w-1/2 h-auto flex justify-center items-center transform transition-all duration-700 ease-out delay-600 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Image src={dev} alt="des" className="w-[60%] h-auto" />
      </div>
    </div>
  );
};

export default Dev;

