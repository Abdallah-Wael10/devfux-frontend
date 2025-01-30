"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import devv from "./images/devv.svg";
import dess from "./images/dess.svg";

const Form = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectDetails: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Function to handle selection
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      service: selectedOption,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      details: formData.projectDetails, // Aligning "projectDetails" to "details" for backend
    };

    try {
      const response = await fetch(`${baseUrl}/api/contactus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
      } else {
        setSuccess(`Error: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      setSuccess('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[760px] h-[1035px] bg-white rounded-[23px] border-[1px] border-solid border-gray-400 max-460:w-[94%] max-460:h-max">
      <div className="w-full h-[150px] flex justify-center items-center flex-col gap-5">
        <h1 className="w-full h-[30px] text-[36px] text-[#978DEF] font-black text-center">Contact us</h1>
        <p className="w-full h-[30px] text-[24px] font-medium text-black text-center">
          Get in touch with <span className="font-black">De<span className="text-[#978DEF]">vFu</span>x</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="h-max pb-7">
        <div className="w-full h-[170px] flex-wrap flex justify-center items-center text-center gap-[60px] max-460:h-max max-460:pb-5">
          <label className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-[161px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-460:w-[47%] ${selectedOption === 'Web Design' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'}`}>
            <input type="radio" name="service" value="Web Design" className="hidden" checked={selectedOption === 'Web Design'} onChange={handleOptionChange} />
            <div className="option">
              <Image src={dess} alt="design" />
              <p>Web Design</p>
            </div>
          </label>

          {/* Web Development Label */}
          <label className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-[161px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-460:w-[47%] ${selectedOption === 'Web Development' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'}`}>
            <input type="radio" name="service" value="Web Development" className="hidden" checked={selectedOption === 'Web Development'} onChange={handleOptionChange} />
            <div className="option">
              <Image src={devv} alt="dev" />
              <p>Web Development</p>
            </div>
          </label>

          {/* Website Label */}
          <label className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-[161px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-460:w-[47%] ${selectedOption === 'Website' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'}`}>
            <input type="radio" name="service" value="Website" className="hidden" checked={selectedOption === 'Website'} onChange={handleOptionChange} />
            <div className="option">
              <Image src={devv} alt="website" />
              <p>Website</p>
            </div>
          </label>
        </div>

        {/* Form Fields */}
        <div className="w-full h-[600px] flex flex-col justify-center items-center gap-[60px]">
          <label className="w-[80%] h-[50px] relative block">
            <span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>

          <label className="w-[80%] h-[50px] relative block">
            <span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Phone</span>
            <input
              type="number"
              name="phone"
              placeholder="Your Mobile Number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>

          <label className="w-[80%] h-[50px] relative block">
            <span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>

          <label className="w-[80%] h-[50px] relative block">
            <span className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Project Details</span>
            <textarea
              name="projectDetails"
              placeholder="Project Details"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.projectDetails}
              onChange={handleInputChange}
            ></textarea>
          </label>
        </div>

        <div className="w-full h-[60px] flex justify-center items-center">
          <button
            type="submit"
            className="w-[80%] h-[56px] rounded-xl mt-4 bg-[#978DEF] flex justify-center items-center text-white text-[20px] font-medium transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>

      {success && <p className="text-center mt-4">{success}</p>}
    </div>
  );
};

export default Form;
