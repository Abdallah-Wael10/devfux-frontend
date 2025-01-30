"use client";

import React, { useState, useEffect } from "react";import Nav2 from '@/app/component/nav2/page'
import Link from 'next/link'
import { useRouter } from "next/navigation"; // For navigation after login
import { getAuthToken } from "@/app/utils/page";
 
const Dashboard = () => {
    const router = useRouter();
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  
    useEffect(() => {
        const token = getAuthToken();

    
        if (!token) {
          // Redirect to login if no token is found
          router.push("/admin/login");
        }
      }, [router]);
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    // Fetch visitor count from the backend
    const fetchVisitors = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/visitors`); // Adjust the URL to match your backend
        const data = await response.json();
        setVisitorCount(data.totalVisitors);
      } catch (error) {
        console.error('Failed to fetch visitors:', error);
      }
    };

    fetchVisitors();
  }, [baseUrl]); // Run on component mount
  return (
    <div className='w-full  bg-white h-[900px] pb-5 max-1439:h-[750px]'>
          <div  className="w-full h-[120px] bg-white flex justify-center  relative "   >
            <Nav2 />
          </div>
            <div className='w-full h-max  bg-white  flex justify-center items-center gap-[20px] flex-wrap' >
                    <div className='w-[22%] h-max pb-3 border-[1px] bg-white border-gray-300  rounded-[20px] flex flex-col pt-[10px] items-center max-770:w-[95%]'>
                            <h1 className='w-full h-[50px] text-center text-black'>Total book meeting leads</h1>
                            <span  className='w-full h-[50px] text-center text-black'>0</span>
                    </div>
                    <div className='w-[22%] h-max pb-3 border-[1px] bg-white border-gray-300 rounded-[20px] flex flex-col pt-[10px] items-center max-770:w-[95%]'>
                    <h1 className='w-full h-[50px] text-center text-black'>Total Visitors</h1>
                    <span  className='w-full h-[50px] text-center text-black'>{visitorCount}</span>
                    </div>
                    <div className='w-[22%] h-max pb-3 border-[1px] bg-white border-gray-300 rounded-[20px] flex flex-col pt-[10px] items-center max-770:w-[95%]'>
                    <h1 className='w-full h-[50px] text-center text-black'>Total projects</h1>
                    <span  className='w-full h-[50px] text-center text-black'>0</span>
                    </div>
                    <div className='w-[22%] h-max pb-3 border-[1px] text-black bg-white border-gray-300 rounded-[20px] flex flex-col pt-[10px] items-center max-770:w-[95%]'>
                    <h1 className='w-full h-[50px] text-center'>Total Contact leads</h1>
                    <span  className='w-full h-[50px] text-center'>0</span>
                    </div>
            </div>
                <div className='w-full h-max pb-2  gap-[10px] flex bg-white text-black justify-center items-center flex-col mt-5 '>
                    <h1 className='w-full h-max pb-2 text-center'>Do You want to create a new PACKAGE OR PROJECT ?</h1>
                        <div className='w-full h-max flex justify-center items-center gap-[20px] max-770:flex-col'>
                        <Link className='w-[12%] h-max pb-2 flex justify-center items-center bg-[#978DEF] text-white text-[20px] font-semibold text-center rounded-[12px] transition-all ease-out hover:bg-purple-400 hover:scale-110 hover:-translate-y-1 duration-500 delay-200 max-1439:w-[90%]' href="/admin/package">New Package</Link>
                    <Link className='w-[12%] h-max pb-2 flex justify-center items-center bg-[#978DEF] text-white text-[20px] font-semibold text-center rounded-[12px] transition-all ease-out hover:bg-purple-400 hover:scale-110 hover:-translate-y-1 duration-500 delay-200 max-1439:w-[90%] ' href="/admin/project">New Project</Link>
                        </div>
                </div>
      
    </div>
  )
}

export default Dashboard
