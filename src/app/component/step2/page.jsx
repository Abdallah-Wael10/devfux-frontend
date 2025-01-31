"use client";
import React, { useState, useEffect } from "react";
import logo from "../../homeimages/logo.svg";
import Image from "next/image";
import clock from "../step1/images/clock.svg";
import cam from "../step1/images/cam.svg";
import time from "../step1/images/time.svg";
import cal from "./images/cal.svg"
import devv from "../form/images/devv.svg";
import dess from "../form/images/dess.svg";
import Loading from "../loading/page";
const Step2 = () => {
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [success, setSuccess] = useState(null);

    const [selectedOption, setSelectedOption] = useState('');
 
    // Function to handle selection
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  const [currentTimeInEgypt, setCurrentTimeInEgypt] = useState(null); // Egypt Time
  const [formattedDateTime, setFormattedDateTime] = useState("");


  const [bookDate, setBookDate] = useState('');
  const [bookTime, setBookTime] = useState('');
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDate = localStorage.getItem("selectedDate");
      const storedTime = localStorage.getItem("selectedTime");
      
      if (storedDate) setBookDate(storedDate);
      if (storedTime) setBookTime(storedTime);
    }
  }, []);

  useEffect(() => {
    const timeInEgypt = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Cairo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentTimeInEgypt(timeInEgypt);
  }, []);

  useEffect(() => {
    if (bookDate && bookTime) {
      const dateParts = bookDate.split("/"); 
      const selectedDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); 

      const timeParts = bookTime.match(/(\d+)(:(\d{2}))?\s(AM|PM)/);
      let hours = parseInt(timeParts[1], 10);
      const minutes = timeParts[3] ? parseInt(timeParts[3], 10) : 0;
      
      // Adjust time for AM/PM
      if (timeParts[4] === "PM" && hours !== 12) {
        hours += 12;
      } else if (timeParts[4] === "AM" && hours === 12) {
        hours = 0;
      }
      
      selectedDate.setHours(hours);
      selectedDate.setMinutes(minutes);

      const endTime = new Date(selectedDate);
      endTime.setHours(endTime.getHours() + 1); 

      
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedStartTime = selectedDate.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true });
      const formattedEndTime = endTime.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true });

      const formattedDate = selectedDate.toLocaleDateString("en-GB", options); 

      const dateTimeStr = `${formattedStartTime} - ${formattedEndTime}, ${formattedDate}`;
      setFormattedDateTime(dateTimeStr);
    }
  }, [bookDate, bookTime]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectDetails: "",
    package_Name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }
    
    const postData = {
      ...formData,
      service: selectedOption,
      time: bookTime,
      date: bookDate,
    };
  
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
  
      const data = await response.json();
      setSuccess('Your message has been sent successfully!');  
      setFormData({name: "", phone: "", email: "", projectDetails: "", package_Name: ""});  
      console.log("Successfully submitted:", data);
  
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit booking!");  
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
  return (
    <div className="w-full h-max pb-5 mt-[250px]  bg-white flex justify-center items-center">
      <div className="w-[80%] h-max pb-5 rounded-lg border-solid border-b border-gray-500 border-[1px] bg-white flex max-770:flex-col max-770:w-[97%] max-1025:w-full">
        <div className="w-1/2 h-max pb-5 pl-10 pr-12 pt-8 flex flex-col max-770:w-full max-770:p-0 max-770:pl-4 max-770:pb-8 max-770:pt-2 max-770:pr-2 ">
          <div className="w-full flex items-center justify-between h-[45px]">
            <p className="w-full text-gray-500 uppercase text-sm tracking-wider">sales</p>
            <Image src={logo} alt="icon" />
          </div>
          <h1 className="w-full h-max pb-1 text-[24px] font-medium text-[#978DEF]">
            DevFux Sales meeting
          </h1>
          <div className="w-full h-max pb-1 flex items-start space-x-3">
            <Image src={clock} alt="clock" width={20} height={20} />
            <p className="text-[#737373]">1 Hr</p>
          </div>
          <div className="flex w-full h-max pb-1 items-start space-x-3">
            <Image src={cam} alt="meeting" width={20} height={20} />
            <p className="w-full h-max pb-1 text-[#737373]">
              Web conferencing details provided upon confirmation.
            </p>
          </div>
          {/* Date and Time Section */}
          <div className="w-full h-max pb-1 flex gap-[20px] mt-4">
            <Image src={cal} alt="icon" className="w-[24px] h-max pb-1"/>
            {formattedDateTime ? (
              <p className="text-[#737373] font-medium text-lg">{formattedDateTime}</p>
            ) : (
              <p className="text-[#737373] font-medium text-lg">Loading date and time...</p>
            )}
          </div>

          <div className="space-y-2 mt-4">
            <p className="text-gray-600 flex items-center space-x-2">
              <Image src={time} alt="timezone" width={16} height={16} />
              <span>Time zone</span>
              <span className="px-2 py-1 text-sm bg-purple-200 text-purple-600 rounded-md">
                Africa / Cairo ({currentTimeInEgypt})
              </span>
            </p>
          </div>
    
        </div>
        
        <div className="w-1/2 h-max pb-5 max-770:w-full  ">
          {/* Don't make any changes in this section */}
          <form onSubmit={handleSubmit} className='rounded-[12px] border-solid border-[1px] w-full h-max pb-5'>
      <div className="w-full h-max pb-1 mb-[30px] flex-wrap flex justify-center items-center text-center gap-[60px] pt-4 pl-3">
      <label
        className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[26%] h-max pb-1 flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-770:w-[50%] max-770:h-[150px] max-1439:w-[40%] ${
          selectedOption === 'Web Design' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'
        }`}
      >
        <input
          type="radio"
          name="service"
          value="Web Design"
          className="hidden"
          checked={selectedOption === 'Web Design'}
          onChange={handleOptionChange}
        />
        <div className="option">
          <Image src={dess} alt="design" />
          <p>Web Design</p>
        </div>
      </label>

      {/* Web Development Label */}
      <label
        className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[26%] h-max pb-1 flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-770:w-[50%] max-770:h-[150px] max-1025:w-[34%] max-1025:h-[120px] max-1439:w-[40%] max-1439:h-[120px] ${
          selectedOption === 'Web Development' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'
        }`}
      >
        <input
          type="radio"
          name="service"
          value="Web Development"
          className="hidden"
          checked={selectedOption === 'Web Development'}
          onChange={handleOptionChange}
        />
        <div className="option">
          <Image src={devv} alt="dev" />
          <p>Web Development</p>
        </div>
      </label>

      {/* Website Label */}
      <label
        className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-max pb-1 flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-770:w-[50%] max-770:h-[150px] max-1439:w-[40%] ${
          selectedOption === 'Website' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'
        }`}
      >
        <input
          type="radio"
          name="service"
          value="Website"
          className="hidden"
          checked={selectedOption === 'Website'}
          onChange={handleOptionChange}
        />
        <div className="option">
          <Image src={devv} alt="website" />
          <p>Website</p>
        </div>
      </label>
    </div>

        {/* Form Fields */}
        <div className="w-full h-max pb-5 flex flex-col justify-normal items-center gap-[35px]">
        <label className="w-[80%] h-max pb-1 relative block">
  <span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Name</span>
  <input
    type="text"
    name="name"
    onChange={handleInputChange}
    value={formData.name}
    placeholder="Your Name"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</label>

<label className="w-[80%] h-max pb-1 relative block">
<span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Phone</span>
  <input
    type="number"
    name="phone"
    placeholder="Your Mobile Number"
    onChange={handleInputChange}
    value={formData.phone}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</label>   
<label className="w-[80%] h-max pb-1 relative block">
<span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Email</span>
  <input
    type="email"
    name="email"
    onChange={handleInputChange}
    value={formData.email}
    placeholder="Your Email Address"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</label>
<label className="w-[80%] h-max pb-1 relative block">
<span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Package Name</span>
  <input
    type="text"
    name="package_Name"
    onChange={handleInputChange}
    value={formData.package_Name}
    placeholder="Your Package Name"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
</label>
<label className="w-[80%] h-max pb-1 relative block">
<span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Project Details</span>
     <textarea
            name="details"
            placeholder="Project Details"
            onChange={handleInputChange}
            value={formData.details}
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
              
</label>
         
        </div>
        <div className='w-full h-max pb-1 flex-col flex justify-center items-center '>
        {success && <div className="text-green-500 font-bold">{success}</div>}
        <button className='w-[80%] h-max pb-1 rounded-xl mt-4 bg-[#978DEF] flex justify-center items-center text-white text-[20px] font-medium transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 ' type="submit">Send</button>
        </div>

 
            </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
