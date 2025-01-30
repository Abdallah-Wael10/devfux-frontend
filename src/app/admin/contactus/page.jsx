"use client";
import React, { useState, useEffect } from "react";
import Nav2 from "@/app/component/nav2/page";
import { useRouter } from "next/navigation"; 
import { getAuthToken } from "@/app/utils/page";
const LeadReviewPage = () => {
   const baseUrl = process.env.NEXT_PUBLIC_API_URL
      const router = useRouter();
  
    const [data , setData] = useState([]);
    useEffect(() => {
      const token = getAuthToken();

      fetch(`${baseUrl}/api/contactus`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
    }, [baseUrl]); // Empty dependency array ensures the fetch is done once on component mount
    
      useEffect(() => {
        const token = getAuthToken();

    
        if (!token) {
          // Redirect to login if no token is found
          router.push("/admin/login");
        }
      }, [router]); // Run this effect only once after component mounts

  return (
    <div className="w-full min-h-screen text-black bg-gray-100">
      {/* Navigation */}
      <div className="w-full h-[120px] flex justify-center relative bg-white shadow-lg">
        <Nav2 />
      </div>

      {/* Page Header */}
      <div className="flex justify-center my-4">
        <h1 className="text-3xl font-bold text-gray-800">Review Leads</h1>
      </div>

      {/* Content Section */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-4 md:p-6">
    
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse">
                {/* Table Header */}
                <thead>
                  <tr className="bg-blue-500 text-white text-sm md:text-md">
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Phone</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Service</th>
                    <th className="py-3 px-4 text-left">Project Details</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {data.map((lead, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-all"
                    >
                      <td className="py-3 px-4">{lead.name || "N/A"}</td>
                      <td className="py-3 px-4">{lead.phone || "N/A"}</td>
                      <td className="py-3 px-4">{lead.email || "N/A"}</td>
                      <td className="py-3 px-4">{lead.service || "N/A"}</td>
                      <td className="py-3 px-4">{lead.details || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* No leads fallback */}
              {data.length === 0 && (
                <div className="text-center p-4 text-gray-600">
                  No leads available at the moment.
                </div>
              )}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default LeadReviewPage;
