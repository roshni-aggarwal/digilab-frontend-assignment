import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Stamps = () => {

  const config = {
    style:{
      "--swiper-navigation-color": "#000",
      "--swiper-navigation-size": "25px",
    },
    loop: true,
    navigation: true,
    modules: { Navigation },
    className: "mySwiper"
  }

  return (
    <div className="px-3 md:px-24 lg:px-48 pt-16 pb-36 flex flex-col md:flex-row items-center justify-between gap-10">
      <Swiper {...config} className="mySwiper w-screen md:w-2/5 h-full"
      >
        <SwiperSlide className="px-6 lg:px-24 overflow-hidden">
          <div className="relative">
            <div className="absolute w-8 h-8 bg-brand-100 -right-4 top-6">
              <div className="hidden md:block absolute w-16 h-16 bg-brand-300 -right-16 -top-5" />
            </div>
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-lg font-medium">stamps</h3>
              <p className="text-2xl font-bold text-gray-700">
                The Opus UI Kit lets you showcase your work in style. It's
                helped take our business online
              </p>
              <div className="flex flex-col items-center gap-2">
                <h5 className="font-bold text-brand-700">ALEXA F.</h5>
                <h6 className="text-xs font-bold text-gray-500">
                  {" "}
                  DESIGNER <span className="text-brand-300">@STAMPS</span>
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="md:w-2/5 lg:pr-20">
        <img
          src="\images\Stamps.png"
          alt="testimonals"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Stamps;
