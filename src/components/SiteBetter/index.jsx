import React from "react";
import { GiArrowCursor } from "react-icons/gi";
import { RiSpaceShipFill } from "react-icons/ri";

const SiteBetter = () => {
  return (
    <div className="mx-5 mt-32 md:mx-24 md:mt-60 lg:mx-48 lg:mt-72 mb-16 flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2 relative">
        <div className="relative">
          <div className="md:absolute left-0 w-16 h-16 bg-gray-50" />
        </div>
        <h1 className="font-bold text-5xl text-brand-700 md:absolute top-24 lg:w-3/4 mt-8 mb-2 md:m-0">
          Make your site better with Opus
        </h1>
        <div className="md:absolute right-0 top-64 lg:top-56 flex flex-col gap-8 md:w-4/5">
          <h4 className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non
            lectus dapibus, a pulvinar mauris aliquam.
          </h4>
          <button className="bg-brand-300 text-white py-3 px-4 text-sm font-medium w-1/2 lg:w-1/3">
            Learn More
          </button>
        </div>
      </div>
      <div className="relative md:w-1/2 flex">
        <div className="absolute right-0 top-0 w-4/5 h-[500px] bg-gray-100" />
        <div className="flex flex-col gap-10 md:px-8 z-10">
          <div className="flex flex-col gap-8 py-8 bg-white px-9">
            <GiArrowCursor className="text-brand-300" size={40} />
            <h2
              className="text-brand-700
          text-2xl font-bold"
            >
              Build or Customize a Website in Minutes
            </h2>
          </div>
          <div className="flex flex-col gap-8 bg-white py-8 px-10">
            <RiSpaceShipFill className="text-brand-300" size={40} />
            <h2 className="text-brand-700 text-2xl font-bold">
              Our UI Kit was made for creativity.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBetter;
