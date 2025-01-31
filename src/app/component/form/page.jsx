"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import devv from "./images/devv.svg";
import dess from "./images/dess.svg";
import Loading from '../loading/page';

const Form = () => {
  const [loadingg, setLoadingg] = useState(false);
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
  const [errors, setErrors] = useState({
    service: '',
    name: '',
    phone: '',
    email: '',
    projectDetails: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      service: '',
      name: '',
      phone: '',
      email: '',
      projectDetails: '',
    };

    if (!selectedOption) {
      newErrors.service = 'You must choose your services';
      isValid = false;
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.phone.match(phoneRegex)) {
      newErrors.phone = 'Invalid phone number (10-15 digits)';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
      isValid = false;
    } else if (formData.projectDetails.length < 20) {
      newErrors.projectDetails = 'Project details must be at least 20 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setErrors(prev => ({ ...prev, service: '' }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const payload = {
      service: selectedOption,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      details: formData.projectDetails,
    };

    try {
      setLoadingg(true);
      const response = await fetch(`${baseUrl}/api/contactus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
        // Reset form
        setSelectedOption('');
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectDetails: '',
        });
      } else {
        setSuccess(`Error: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      setSuccess('Network error. Please try again later.');
    } finally {
      setLoading(false);
      setLoadingg(false);
    }
  };

  if (loadingg) return <Loading />;

  return (
    <div className="w-[760px] min-h-[1035px] bg-white rounded-[23px] border border-gray-400 max-460:w-[94%] max-460:h-max">
      <div className="w-full h-[150px] flex justify-center items-center flex-col gap-5">
        <h1 className="text-[36px] text-[#978DEF] font-black">Contact us</h1>
        <p className="text-[24px] font-medium text-black">
          Get in touch with <span className="font-black">De<span className="text-[#978DEF]">vFu</span>x</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="pb-7 text-black">
        <div className="w-full flex flex-wrap justify-center items-center gap-[60px] py-5 max-460:gap-4">
          {/* Web Design */}
          <label className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-[161px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-460:w-[47%] ${selectedOption === 'Web Design' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'}`}>
            <input 
              type="radio" 
              name="service" 
              value="Web Design" 
              className="hidden" 
              checked={selectedOption === 'Web Design'} 
              onChange={handleOptionChange} 
            />
            <Image src={dess} alt="Web Design" />
            <p>Web Design</p>
          </label>

          {/* Web Development */}
          <label className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-[161px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-460:w-[47%] ${selectedOption === 'Web Development' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'}`}>
            <input 
              type="radio" 
              name="service" 
              value="Web Development" 
              className="hidden" 
              checked={selectedOption === 'Web Development'} 
              onChange={handleOptionChange} 
            />
            <Image src={devv} alt="Web Development" />
            <p>Web Development</p>
          </label>

          {/* Website */}
          <label className={`transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[24%] h-[161px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] text-white text-[16px] font-bold max-460:w-[47%] ${selectedOption === 'Website' ? 'bg-[#9a94d8]' : 'bg-[#CBC6F7]'}`}>
            <input 
              type="radio" 
              name="service" 
              value="Website" 
              className="hidden" 
              checked={selectedOption === 'Website'} 
              onChange={handleOptionChange} 
            />
            <Image src={devv} alt="Website" />
            <p>Website</p>
          </label>
        </div>
        {errors.service && <p className="text-center text-red-500 text-sm -mt-3 mb-4">{errors.service}</p>}

        <div className="w-full flex flex-col items-center gap-[60px] px-4">
          {/* Name Input */}
          <div className="w-[80%] relative">
            <label className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-purple-500'
              }`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone Input */}
          <div className="w-[80%] relative">
            <label className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-purple-500'
              }`}
              placeholder="Your Mobile Number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email Input */}
          <div className="w-[80%] relative">
            <label className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-purple-500'
              }`}
              placeholder="Your Email Address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Project Details */}
          <div className="w-[80%] relative">
            <label className="absolute -top-2.5 left-3 text-sm text-purple-500 bg-white px-1">Project Details</label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none ${
                errors.projectDetails ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-purple-500'
              }`}
              rows="5"
              placeholder="Project Details"
            />
            {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
          </div>
        </div>

        <div className="w-full flex justify-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-[80%] h-14 bg-[#978DEF] text-white text-xl font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {success && (
        <div className={`mt-4 mx-4 p-3 rounded-lg text-center ${
          success.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {success}
        </div>
      )}
    </div>
  );
};

export default Form;