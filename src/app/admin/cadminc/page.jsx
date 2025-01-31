"use client";
import React from "react";
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation after login
import Loading from "@/app/component/loading/page";

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
  
    const [isLoading , setIsLoading] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter();

  const handleRegistration = async(e)=>{
     e.preventDefault();
     setIsLoading(true);

     try {
       const response = await fetch(`${baseUrl}/api/admin/register`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({fullName, email, password, phone})
       });
       if (response.ok) {
         router.push("/admin/login");
         setIsLoading(false);
       }else {
         setErrorMessage("Registration is failed please try again");
         setIsLoading(false);
       }
      
     } catch (err) {
      console.log(err);
      
     }
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex items-center text-black justify-center min-h-screen bg-gray-100 p-4">
      {/* Registration Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Register
        </h2>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
        )}
        {/* Form */}
        <form onSubmit={handleRegistration} className="flex flex-col space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e)=> setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
            disabled={isLoading}
            >
              {isLoading ? "Create..." : "Submit"}
          </button>
        </form>


      </div>
    </div>
  );
};

export default Register;
