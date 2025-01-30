"use client"; // For Next.js client-side rendering

import React, { useState,useEffect } from 'react';
import Nav from '@/app/component/nav/page'
import left from "./images/leftt.svg"
import right from "./images/rightt.svg"
import Image from 'next/image'
import logo from "../../homeimages/logo.svg"
import Card from '@/app/component/card/page'
import Footer from '@/app/component/footer/page'
const Portfolio = () => {
 const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const [data , setData] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/api/project`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, [baseUrl]); // Empty dependency array ensures the fetch is done once on component mount
  
  
  return (
    <div className='bg-white'>
          <div className="bg-[url('/portfolioImage/port.svg')] bg-no-repeat w-full bg-cover h-[809px] max-770:bg-none max-1025:bg-none max-1439:bg-none">
          <div  className="w-full h-[120px] flex justify-center absolute"   >
            <Nav />
          </div>
              <div className='w-full h-[520px] flex justify-center items-center text-center flex-col gap-8'>
                <h1 className='w-full h-[50px] text-[36px] text-[#978DEF] font-extrabold'>Our Portfolio</h1>
                <Image src={logo} alt='icon' className='w-[62px] h-[84px]'/>
              </div>
          <div className="  pt-[20px] w-full  h-max justify-center bg-white flex flex-wrap gap-[74px]">
          {data.map((item) => (
       <Card
       key={item._id}
       title={item.title}
       status={item.status}
       mainImage={`${baseUrl}/${item.mainImage.replace("\\", "/")}`} // Ensure the backslashes are replaced with forward slashes
     />
     
      ))} 
                  <footer className="w-full h-[310px]">
                      <Footer/>
                    </footer>               
                </div>
               
          </div>


    </div>
  )
}

export default Portfolio
