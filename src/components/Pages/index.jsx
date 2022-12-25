import React from "react";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Pages = () => {
  return (
    <div className="mx-3 md:mx-24 lg:mx-48 flex flex-col-reverse md:flex-row gap-8">
      <div className="flex flex-col gap-16 md:w-1/2">
        <div className="flex gap-8 md:w-4/5">
          <div className="bg-brand-300 w-16 h-16 flex items-center justify-center">
            <IoIosSend className="text-white" />
          </div>
          <div className="flex flex-col gap-3 w-2/3">
            <h3 className="font-bold text-2xl text-brand-700">
              Choose your sections
            </h3>
            <small className="text-brand-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </small>
          </div>
        </div>
        <div className="flex gap-8 md:w-4/5">
          <div className="bg-brand-300 w-16 h-16 flex items-center justify-center">
            <MdOutlinePhotoSizeSelectActual className="text-white" />
          </div>
          <div className="flex flex-col gap-3 w-2/3">
            <h3 className="font-bold text-2xl text-brand-700">
              Add the images and text you need
            </h3>
            <small className="text-brand-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </small>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <h1 className="font-bold text-5xl text-brand-700">Create pages using beautiful components.
        </h1>
        <div className="md:absolute right-0 flex flex-col gap-12 w-4/5 mx-auto mt-8">
          <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <button className="bg-gray-100 py-3 px-4 text-sm font-medium w-1/2 lg:w-1/3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
