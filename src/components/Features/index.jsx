import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Features = () => {
  return (
    <div className="mx-3 md:mx-24 lg:mx-48 my-24 lg:my-48 flex flex-col md:flex-row gap-1">
      <div className="md:w-1/2 md:relative top-16 lg:top-40">
        <div className="px-8 py-5 flex items-center md:absolute">
          <div className="absolute w-16 h-16 bg-gray-50 left-0" />
          <small className="font-bold text-gray-500 z-10">FEATURES</small>
        </div>
        <h2 className="text-5xl font-bold text-brand-700 md:absolute top-16">
          You’re not just doing business. You’re doing life.
        </h2>
        <div className="flex flex-col gap-4 w-full md:absolute top-72 lg:top-60 my-10">
          <div className="flex gap-5">
            <div className="bg-blue-100 rounded-full flex items-center justify-center w-6">
              <AiOutlineCheck className="text-brand-300" size={10} />
            </div>
            <h5 className="font-medium text-brand-700 w-4/5">
              Responsive Component
            </h5>
          </div>
          <div className="flex gap-5">
            <div className="bg-blue-100 rounded-full flex items-center justify-center w-6">
              <AiOutlineCheck className="text-brand-300" size={10} />
            </div>
            <h5 className="font-medium text-brand-700 w-4/5">
              Over 50 Sections
            </h5>
          </div>
          <div className="flex gap-5">
            <div className="bg-blue-100 rounded-full flex items-center justify-center w-6">
              <AiOutlineCheck className="text-brand-300" size={10} />
            </div>
            <h5 className="font-medium text-brand-700 w-4/5">
              Handcrafted Pages
            </h5>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="\images\Features.png"
          alt="feature"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Features;
