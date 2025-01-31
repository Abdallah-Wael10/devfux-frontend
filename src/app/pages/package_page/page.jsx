"use client"; 

import React, { useState,useEffect } from 'react';
import Loading from '@/app/component/loading/page';
import Nav from '@/app/component/nav/page'
import Package from '@/app/component/package/page'
import Footer from '@/app/component/footer/page'
const Package_Page = () => {
  const [isLoading, setIsLoading] = useState(true);

     const baseUrl = process.env.NEXT_PUBLIC_API_URL
   
           const [packages , setData] = useState([]);
           useEffect(() => {
            const fetchData = async () => {
              try {
                setIsLoading(true);
                const response = await fetch(`${baseUrl}/api/package`);
                const data = await response.json();
                setData(data);
              } catch (error) {
                console.error("Error:", error);
              } finally {
                setIsLoading(false);
              }
            };
        
            fetchData();
          }, [baseUrl]);
        
          if (isLoading) {
            return <Loading />;
          }
  return (
    <div className='bg-white'>
 <div  className="w-full h-max pb-7 flex justify-center"   >
            <Nav />
 </div>

            <div className='w-full flex flex-wrap h-max pb-6 justify-center gap-[60px] mb-[60px]'>
            {packages.map((e)=>(
                  <Package
                  key={e._id}
                  priceUSD={e.price_USD}
                  priceEGP={e.price_EGP}
                  name={e.name}
                  fet1={e.feature1}
                  fet2={e.feature2}
                  fet3={e.feature3}
                  fet4={e.feature4}
                  fet5={e.feature5}
                  fet6={e.feature6}
                  fet7={e.feature7}
                  fet8={e.feature8}
                  />
                  ))}   
            </div>  
            <Footer/>    
    </div>
  )
}

export default Package_Page
