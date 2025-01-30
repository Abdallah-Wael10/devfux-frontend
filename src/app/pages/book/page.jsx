'use client';
import React, { useState } from 'react';
import Step1 from '@/app/component/step1/page';
import Step2 from '@/app/component/step2/page';
import Nav from '@/app/component/nav/page';

const Book = () => {
  const [activeStep, setActiveComponent] = useState("step1");

  const goToNextStep = () => {
    setActiveComponent("step2");
  };

  const renderComponent = () => {
    switch (activeStep) {
      case "step1":
        return <Step1 goToNext={goToNextStep} />;
      case "step2":
        return <Step2 />;
      default:
        return <Step1 goToNext={goToNextStep} />;
    }
  };

  return (
    <div className="">
      <div className="w-full h-max pb-5 flex justify-center absolute">
        <Nav />
      </div>
      <div className="w-full h-max pb-5 flex bg-white justify-center items-center ">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Book;
