"use client"
import React, { useState, useEffect } from "react";
import arr from "../desgin/images/arr.svg";
import test from "./images/test1.svg";
import Image from "next/image";

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="w-full h-auto bg-white flex flex-wrap md:flex-nowrap items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-auto gap-8 bg-white flex flex-col items-center pt-8">
        {/* Card 1 */}
        <div
          className={`w-[80%] md:w-[63%] h-auto bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-4 p-4 text-center transform transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h1 className="text-[14px] font-semibold text-[#978DEF]">Web Testing</h1>
          <p className="text-[12px] text-[#5A5A5A]">
            Web testing is the process of validating a websites functionality,
            security, and performance to ensure it meets the specified
            requirements. Its scope includes checking user interactions, data
            handling, security vulnerabilities, and system performance under
            different loads.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`w-[80%] md:w-[63%] h-auto bg-white rounded-[20px] shadow-[8px_8px_27px_whitesmoke] flex flex-col gap-4 p-4 text-center transform transition-all duration-700 ease-out delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <p className="text-[12px] text-[#5A5A5A]">
            We also ensure that our clients websites are kept in a particular
            manner, preferably established professional appearance. Our web
            developers know what they did, thus it will be easy for us to help
            you achieve any future plans for your company. Whatever problem you
            may encounter in the future, you can rest assured that you have
            someone who can fix everything for you!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`w-full md:w-1/2 h-auto flex justify-center items-center transform transition-all duration-700 ease-out delay-400 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Image src={test} alt="test illustration" className="w-[60%] h-auto" />
      </div>
    </div>
  );
};

export default Test;
