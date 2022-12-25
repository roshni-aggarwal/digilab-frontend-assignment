import React from "react";

const Work = () => {
  return (
    <div className="my-28 lg:mt-48 bg-brand-700 px-3 md:px-24 lg:px-48 pt-48 pb-16 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between md:px-20 gap-3">
        <h2 className="font-bold text-5xl text-center md:text-left">Ways to work with us</h2>
        <button className="bg-brand-300 text-white py-2 px-4 text-sm">
          Get Started
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-12">
        <div className="flex flex-col p-6 gap-8 md:w-1/3">
          <div className="relative">
            <img src="\images\Work1.png" alt="work" className="w-full h-full" />
            <div className="absolute bg-brand-300 right-0 w-16 h-16 top-0" />
            <div className="absolute bg-brand-600 w-8 h-8 -top-8 -right-8" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold tracking-tighter">
              Project Management
            </h4>
            <p className="text-gray-400 tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-6 gap-8 md:w-1/3">
          <div className="relative">
            <img src="\images\Work2.png" alt="work" className="w-full h-full" />
            <div className="absolute bg-brand-200 -left-5 -bottom-5 w-16 h-16" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold tracking-tighter">
              Advanced Analytics
            </h4>
            <p className="text-gray-400 tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-6 gap-8 md:w-1/3">
          <div className="relative">
            <img src="\images\Work3.png" alt="work" className="w-full h-full" />
            <div className="absolute bg-brand-200 right-0 w-16 h-16 top-8" />
            <div className="absolute bg-brand-300 w-8 h-8 -right-8 top-24" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl font-bold tracking-tighter">
              Marketing & Dashboard
            </h4>
            <p className="text-gray-400 tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
              consectetur eros. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
