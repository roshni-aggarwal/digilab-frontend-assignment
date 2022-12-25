import React from "react";

const Knowledge = () => {
  return (
    <div className="mx-3 md:mx-24 lg:mx-48 my-24 md:my-72 lg:my-48 flex flex-col-reverse md:flex-row items-center gap-24 justify-between">
      <div className="flex items-center relative p-6 md:p-12 lg:p-16">
        <div className="absolute left-0 h-full w-2/3 bg-brand-50">
          <div className="absolute bg-brand-200 w-8 h-8 -right-8 -top-8" />
        </div>
        <div className="relative">
          <img
            src="\images\Knowledge.png"
            alt="knowledge"
            className="w-full h-full"
          />
          <div className="absolute w-24 h-24 -right-24 -bottom-24 bg-brand-100 hidden md:block"></div>
        </div>
      </div>
      <div>
        <div className="px-8 py-5 flex items-center relative">
          <div className="absolute w-16 h-16 bg-gray-50 left-0" />
          <small className="font-bold text-gray-500 z-10">OUR KNOWLEDGE</small>
        </div>
        <h2 className="text-5xl font-bold text-brand-700">
          A UI Kit that's Modern & Elegant
        </h2>
        <p className="text-indigo-900 mt-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          consectetur eros. Aliquam erat volutpat.
        </p>
      </div>
    </div>
  );
};

export default Knowledge;
