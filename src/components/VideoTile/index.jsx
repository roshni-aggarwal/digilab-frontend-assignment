import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const VideoTile = () => {
  return (
    <div className="my-16 mx-3 md:my-20 md:mx-36 lg:my-24 lg:mx-64 relative ">
      <div className="px-8 py-5 relative flex items-center">
        <div className="absolute left-0 top-0 w-16 h-16 bg-gray-50" />
        <small className="font-bold text-gray-500 z-10">VIDEO TITLE</small>
      </div>
      <h1 className="text-brand-700 font-bold text-5xl mt-8 mb-14">
        Inform users with video sections
      </h1>
      <div className="relative">
        <img src="\images\VideoTitle.png" alt="video" />
        <button className="absolute left-[calc(50%-48px)] top-[calc(50%-48px)] bg-white w-24 h-24 rounded-full flex items-center justify-center ">
          <BsFillPlayFill size={40} />
        </button>
        <div className="hidden md:block absolute -left-20 -bottom-20 w-20 h-20 bg-gray-100"></div>
      </div>
      <h3 className="text-lg text-gray-700 md:absolute right-0 md:w-2/3 lg:w-1/2 my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.</h3>
    </div>
  );
};

export default VideoTile;
