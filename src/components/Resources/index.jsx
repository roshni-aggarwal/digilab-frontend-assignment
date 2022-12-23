import React from "react";
import ResourceCard from "./ResourceCard";

const Resources = () => {
  const data = [
    {
      image: "\\images\\Resource1.png",
      heading: "A high-converting, high-performing template",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
    },
    {
      image: "\\images\\Resource2.png",
      heading: "With a clean, minimal and professional look",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
    },
    {
      image: "\\images\\Resource3.png",
      heading: "Opus made our journey possible",
      desc: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:px-12 lg:px-24 my-16">
        <h1 className="text-5xl font-bold text-brand-700">Resources</h1>
        <button className="bg-brand-300 text-white py-2 px-4 text-sm">
          Get Started
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-10 md:overflow-auto">
        {data.map((item, index) => (
          <ResourceCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
