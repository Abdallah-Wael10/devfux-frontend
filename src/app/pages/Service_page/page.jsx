import React from "react";
import Nav from "@/app/component/nav/page";
import Image from "next/image";
import frame from "./images/frame0.svg";
import Footer from "@/app/component/footer/page";
import desgin from "./images/desgin.svg";
import web from "./images/web1.svg";
import Link from "next/link";
import mob from "./images/mob.svg";
import soon from "./images/soon.svg";
const Service = () => {
   
  return (
    <div className="bg-white">
      <div className="bg-[url('/services_image/frame0.svg')] h-[323px] bg-no-repeat w-full bg-cover">
        <div className="w-full h-[120px] flex justify-center absolute">
          <Nav />
        </div>
      </div>
          <div className="w-full h-max pb-5 bg-white flex flex-col items-center gap-8  ">
            <div className="w-[80%] h-[250px]  flex flex-col gap-[20px] rounded-[40px] border-[1px] border-gray-400 items-center max-460:w-[98%] max-460:pb-5 max-460:h-max">
                  <div className="w-[60%] h-[68px] bg-[#978DEF] rounded-[70px] max-460:w-full">
                      <h1 className="w-full h-max pb-2 text-[36px] text-white font-medium text-center pt-2 ">Our Services</h1>
                  </div>
                  <h1 className="w-[80%] h-max pb-3 text-[#737373] text-[26px] font-medium text-center">At devfux, we offer a comprehensive range of services designed to elevate your business in the digital landscape.</h1>
            </div>
                    <div className="w-[80%] h-max pb-2 rounded-[20px] border-[1px] border-gray-400 flex flex-wrap max-460:flex-col m  ">
                      <div className="w-1/2 h-max pb-2 pl-[40px] flex flex-col gap-[25px] pt-[35px] max-460:w-full max-460:pl-4 ">
                        <h1 className="w-full h-max pb-2 text-[24px] text-[#978DEF] font-bold">UX UI Design</h1>
                        <p className="w-full h-max pb-2 text-[#737373] text-[16px] font-medium ">Our roots in UX/UI design mean we excel at creating user-centric designs. We focus on delivering intuitive interfaces that enhance user satisfaction and engagement. (Website , Mobile App)</p>
                          <div className="w-full h-max pb-2">
                          <Link href="/pages/book" className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 hover:bg-[#978DEF] hover:text-white w-[90%] flex justify-center h-[34px] items-center text-[16px] text-[#978DEF] bg-white font-semibold text-center rounded-[5px] border-[1px] border-gray-400">Book Meeting</Link>
                          </div>
                      </div>
                      <div className="w-1/2 h-[290px] max-460:w-full ">
                              <Image src={desgin} alt="icon" className="w-[100%] h-[280px] flex justify-center items-center"/>
                      </div>
                    </div>
                    <div className="w-[80%] h-max pb-2 rounded-[20px] border-[1px] border-gray-400 flex max-460:flex-col  ">
                      <div className="w-1/2 h-max pb-2 pl-[40px] flex flex-col gap-[38px] pt-[35px] max-460:w-full max-460:pl-4">
                        <h1 className="w-full h-max pb-2 text-[24px] text-[#978DEF] font-bold">Website Development</h1>
                        <p className="w-full h-max pb-2 text-[#737373] text-[16px] font-medium ">Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
                          <div className="w-full h-max pb-2">
                          <Link href="/pages/book" className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 hover:bg-[#978DEF] hover:text-white w-[90%] flex justify-center h-[34px] items-center text-[16px] text-[#978DEF] bg-white font-semibold text-center rounded-[5px] border-[1px] border-gray-400">Book Meeting</Link>
                          </div>
                      </div>
                      <div className="w-1/2 h-[290px] max-460:w-full ">
                              <Image src={web} alt="icon" className="w-[100%] h-[280px] flex justify-center items-center"/>
                      </div>
                    </div>
                    <div className="w-[80%] h-max pb-2 rounded-[20px] border-[1px] border-gray-400 flex max-460:flex-col  ">
                      <div className="w-1/2 h-max pb-2 pl-[40px] flex flex-col gap-[38px] pt-[35px] max-460:w-full ">
                        <h1 className="w-full h-max pb-2 text-[24px] text-[#978DEF] font-bold">Mobile Application Development</h1>
                        <Image src={soon} alt="icon" className="w-[100%] h-[280px] flex justify-center items-center"/>

                      </div>
                      <div className="w-1/2 h-max pb-2 max-460:w-full ">
                              <Image src={mob} alt="icon" className="w-[100%] h-[280px] flex justify-center items-center"/>
                      </div>
                    </div>
          </div>
          <Footer/>
    </div>
  );
};

export default Service;
