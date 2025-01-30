"use client"
import React, { useState, useEffect } from "react";
import arr from "../desgin/images/arr.svg";
import lanch from "./images/lanch1.svg";
import verify from "./images/verify.svg";
import Link from "next/link";
import Image from "next/image";

const Lanch = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="w-full h-auto bg-white flex flex-wrap md:flex-nowrap items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto gap-8 bg-white flex flex-col items-center pt-8">
        {/* Contact Section */}
        <div
          className={`text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-row justify-center items-center gap-6 w-[80%] md:w-[70%] h-[100px] transform transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Image src={verify} alt="verify" className="w-[10%] h-[36px]" />
          <h1 className="text-[20px] font-normal text-black">Lets Get in Touch</h1>
          <Link
            href="/pages/book"
            className="w-1/3 h-9 animate-bounce bg-[#978DEF] text-white text-sm font-medium rounded-[13px] flex justify-center items-center transition-all ease-out duration-500 hover:bg-purple-400 hover:scale-110 hover:-translate-y-1"
          >
            BOOK MEETING
          </Link>
        </div>

        {/* Description Section */}
        <div
          className={`w-[80%] md:w-[63%] h-auto text-center bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-4 p-4 transform transition-all duration-700 ease-out delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <p className="text-[12px] text-[#5A5A5A] font-semibold">
            At the launching stage, we add the final touches to your brand-new
            website! Our web developers work diligently to polish the design
            elements and ensure everything is in perfect order. We thoroughly
            test the website to ensure it is responsive, optimized for search
            engines (SEO), and visually appealing. Our main priority is to
            fulfill your customers wishes and create a positive experience for
            them. We strive to establish a collaborative partnership with you to
            achieve an outcome that brings happiness to both you and your
            customers.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`w-full md:w-1/2 h-auto flex justify-center items-center transform transition-all duration-700 ease-out delay-400 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Image src={lanch} alt="launch illustration" className="w-[60%] h-auto" />
      </div>
    </div>
  );
};

export default Lanch;
