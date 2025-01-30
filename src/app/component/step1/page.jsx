'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import clock from "./images/clock.svg"
import cam from "./images/cam.svg"
import time from "./images/time.svg"
import logo from "../../homeimages/logo.svg"

const Step1 = ({ goToNext }) => {
    const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date()); 
  const [currentTimeInEgypt, setCurrentTimeInEgypt] = useState(null); 

  // Get current time in Egypt
  useEffect(() => {
    const timeInEgypt = new Date().toLocaleString('en-US', { 
      timeZone: 'Africa/Cairo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    setCurrentTimeInEgypt(timeInEgypt);
  }, [currentTimeInEgypt]);

  const daysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const handleMonthChange = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const days = Array.from({ length: daysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1) }, (_, i) => {
    const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
    return {
      date: i + 1,
      day: day.toLocaleString('default', { weekday: 'short' }),
      active: true,
    };
  });

  const times = [
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
    '8:00 PM', '9:00 PM', '10:00 PM',
  ];
  const handleNext = () => {
    if (selectedDate && selectedTime) {
      const date = `${selectedDate}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        const time = ` ${selectedTime}`
      // Save date and time to localStorage
      localStorage.setItem('selectedDate', date);  // Store full date and time
      localStorage.setItem('selectedTime', time);  // Store full  time
      goToNext();
    }
  };
  
  return (
    <div className="w-full flex justify-center items-center h-[850px] bg-gray-50">
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden max-460:flex-col">
        {/* Left Section */}
        <div className="w-1/2 p-8 space-y-6 max-460:w-full">
          {/* Sales Info */}
          <div className="space-y-3">
            <div className='w-full flex items-center justify-between h-[45px]'>
            <p className="text-gray-500 uppercase text-sm tracking-wider">sales</p>
            <Image src={logo} alt='icon'/>
            </div>
            <h1 className="text-[24px] font-medium text-[#978DEF]">DevFux Sales meeting</h1>
          </div>

          {/* Duration and Description */}
          <div className="w-full flex items-start space-x-3">
            <Image src={clock} alt="clock" width={20} height={20} />
            <p className=" text-[#737373]">1 Hr</p>
          </div>

          <div className="flex items-start space-x-3">
            <Image src={cam} alt="meeting" width={20} height={20} />
            <p className="w-full h-[50px] text-[#737373]">
              Web conferencing details provided  upon confirmation.
            </p>
          </div>

          {/* Next Button */}
          <button
            disabled={!selectedDate || !selectedTime}
            onClick={handleNext}
            className={`w-full text-white font-semibold py-2 rounded-md 
              ${selectedDate && selectedTime ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-300 cursor-not-allowed'}`}
          >
            Next
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2 border-l p-6 space-y-6 max-460:w-full">
          {/* Calendar */}
          <div>
            <p className="text-[#737373] font-semibold mb-4">Select a Date & Time</p>
            <div className="flex justify-between items-center">
              <button onClick={() => handleMonthChange(-1)}>{'<'}</button>
              <p className="text-purple-600 font-semibold">{currentMonth}</p>
              <button onClick={() => handleMonthChange(1)}>{'>'}</button>
            </div>

            <div className="grid grid-cols-7 text-center mt-4 gap-y-2 max-460:gap-6">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-medium 
                    ${day.active 
                      ? selectedDate === day.date ? 'bg-black text-white' : 'bg-[#978DEF] hover:bg-purple-200 hover:text-black text-white'
                      : 'hover:bg-gray-200 cursor-pointer'}`}
                  onClick={() => setSelectedDate(day.date)}
                >
                  {day.date}
                </div>
              ))}
            </div>
          </div>

          {/* Time Zone */}
          <div className="space-y-2">
            <p className="text-gray-600 flex items-center space-x-2">
              <Image src={time} alt="timezone" width={16} height={16} />
              <span>Time zone</span>
              <span className="px-2 py-1 text-sm bg-purple-200 text-purple-600 rounded-md">
                Africa / Cairo ({currentTimeInEgypt})
              </span>
            </p>
          </div>

          {/* Times */}
          <div className="grid grid-cols-4 gap-2">
            {times.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-md text-sm font-medium 
                  ${selectedTime === time ? 'bg-black text-white' : 'bg-purple-100 text-purple-600 hover:bg-purple-200'}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
