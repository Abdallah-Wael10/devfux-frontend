"use client";

import React, { useState, useEffect } from 'react';
import Nav2 from '@/app/component/nav2/page';
import { useRouter } from "next/navigation"; 
import { getAuthToken } from "@/app/utils/page";
import Loading from "@/app/component/loading/page";

const Book_admin = () => {
    const [loading , setLoading] = useState(false);
  
   const baseUrl = process.env.NEXT_PUBLIC_API_URL
        const router = useRouter();
   useEffect(() => {
          const token = getAuthToken();
  
      
          if (!token) {
            // Redirect to login if no token is found
            router.push("/admin/login");
          }
        }, [router]);
    const [data , setData] = useState([]);
    useEffect(() => {
     try {
      setLoading(true);
      const token = getAuthToken();
      
      fetch(`${baseUrl}/api/book`,{
        headers: {
            'Authorization': `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
     } catch (error) {
       console.log(error);
      
     } finally{
       setLoading(false);
     }
    }, [baseUrl]); 
    
    if (loading) {
      return <Loading />;
      
    }

  return (
    <div className="w-full min-h-screen text-black bg-gray-100">
      {/* Navigation */}
      <div className="w-full h-[120px] flex justify-center relative bg-white shadow-lg">
        <Nav2 />
      </div>

      {/* Booked Leads Review Section */}
      <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">Review Booked Leads</h1>

          {/* Leads Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse table-auto text-left">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Service</th>
                  <th className="py-2 px-4 border-b">Project Details</th>
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((lead, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4">{lead.name}</td>
                    <td className="py-2 px-4">{lead.phone}</td>
                    <td className="py-2 px-4">{lead.email}</td>
                    <td className="py-2 px-4">{lead.service}</td>
                    <td className="py-2 px-4">{lead.details}</td>
                    <td className="py-2 px-4">{lead.time}</td>
                    <td className="py-2 px-4">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book_admin;
