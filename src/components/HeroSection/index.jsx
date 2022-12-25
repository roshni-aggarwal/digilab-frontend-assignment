import React from "react";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const SmHeroSection = () => {
  return (
    <div className="md:hidden bg-brand-700 relative h-[1000px]">
      <div className="flex absolute bg-white h-16 w-full">
        <div className="relative">
          <div className="w-16 h-16 bg-brand-300 absolute" />
          <div className="absolute left-16 top-16 w-8 h-8 bg-brand-300" />
        </div>
      </div>
      <div className="flex gap-10 flex-col items-center justify-end absolute top-36 px-6">
        <div>
          <h1 className="text-4xl font-bold text-center text-white">
            Built for enterprise businesses.
          </h1>
          <p className="text-lg text-white mt-4 mb-10 text-center">
            Opus includes everything you need to build a beautiful website for
            your business. Built to perform and look good doing so.
          </p>
          <div className="flex flex-col gap-8 items-center">
            <button className="bg-brand-300 text-white py-3 px-4 text-sm font-medium flex items-center justify-between gap-8">
              Learn More <AiOutlineArrowRight />
            </button>
            <small className="text-white">Explore Pages</small>
          </div>
        </div>
        <div className="relative">
          <img
            src="\images\HeroSection.png"
            alt="herosection"
            className="w-full h-full"
          />
          <div className="absolute -right-6 -top-6 bg-brand-400 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

const LargeHeroSection = () => {
  return (
    <div className="hidden md:block bg-brand-700 relative  h-screen">
      <div className="absolute w-72 h-56 md:left-16 lg:left-32 top-[calc(50%-114px)]">
        <img src="\images\Group1.png" alt="group" className="w-full h-full" />
      </div>
      <div className="flex md:px-24 lg:px-48 absolute bg-white h-16 w-full">
        <div className="relative">
          <div className="w-16 h-16 bg-brand-300 absolute" />
          <div className="absolute left-16 top-16 w-8 h-8 bg-brand-300" />
        </div>
      </div>
      <div className="absolute right-0 bg-brand-300 h-3/5 w-1/3">
        <div className="absolute top-[calc(50%-170px)]">
          <img src="\images\Group2.png" alt="group" className="w-full h-full" />
        </div>
      </div>
      <div className="bg-white absolute right-0 bottom-0 h-2/5 w-1/3" />
      <div className="absolute bottom-0 bg-white w-full h-28 md:px-32 lg:px-72">
        <div className="flex bg-brand-300 h-full">
          <div className="bg-gray-50 flex items-center justify-center w-1/3 gap-4 text-gray-400">
            <BsMouse />
            <small>SCROLL FOR MORE</small>
          </div>
        </div>
      </div>
      <div className="flex gap-10 absolute md:top-52 lg:top-36 left-36 lg:left-[calc(50%-450px)] md:h-2/3 lg:h-3/4 w-2/3">
        <div className="w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Built for{" "}
            <div className="flex items-center gap-6">
              enterprise
              <span className="w-14 h-16 hidden lg:block">
                <img src="\images\l.png" alt="l" className="" />
              </span>{" "}
            </div>
            businesses.
          </h1>
          <p className="text-lg text-white mt-4 mb-10">
            Opus includes everything you need to build a beautiful website for
            your business. Built to perform and look good doing so.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <button className="bg-brand-300 text-white py-3 px-4 text-sm font-medium flex items-center justify-between gap-8">
              Learn More <AiOutlineArrowRight />
            </button>
            <small className="text-white">Explore Pages</small>
          </div>
        </div>
        <div className="relative">
          <img
            src="\images\HeroSection.png"
            alt="herosection"
            className="w-full h-full"
          />
          <div className="absolute -right-12 -top-12 bg-brand-400 w-12 h-12" />
          <div className="absolute bottom-0 -right-12 bg-white flex flex-col gap-6 px-10 py-4 lg:py-12 drop-shadow-md left-1/3">
            <p className="text-lg text-gray-700">
              I felt like I couldn’t grow until I moved to Opus. Now I am
              encouraged to sell more with them.
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-gray-800">
                  Frank Dublin
                </h3>
                <h4 className="text-lg font-medium text-gray-500">
                  CEO <span className="text-brand-300">@STAMPS</span>
                </h4>
              </div>
              <div className="h-full">
                <img src="\images\InvertedCommas.png" alt="InvertedCommas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-24 absolute h-max w-full">
      <SmHeroSection />
      <LargeHeroSection />
      <div className="px-3 md:px-24 lg:px-48">
        <h1 className="text-3xl font-bold text-brand-700 text-center">
          Trusted and loved by the world's best teams
        </h1>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-8 flex-wrap text-xl md:text-2xl lg:text-3xl items-center justify-between">
          <div className="p-12 md:px-2 lg:p-14">
            <h2 className="text-gray-500 font-medium">wetransfer</h2>
          </div>
          <div className="p-12 md:px-2 lg:p-14">
            <h2 className="text-gray-500 font-medium">stamps</h2>
          </div>
          <div className="p-12 md:px-2 lg:p-14">
            <h2 className="text-gray-500 font-medium">manter.</h2>
          </div>
          <div className="p-12 md:px-2 lg:p-14">
            <h2 className="text-gray-500 font-medium">Sugarcane</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
