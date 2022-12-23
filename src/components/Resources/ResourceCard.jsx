import React from "react";

const ResourceCard = (props) => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="w-72 h-80">
        <img src={props.image} alt="resource" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-brand-700 text-justify">
          {props.heading}
        </h3>
        <p className="text-[#37456C] text-justify">{props.desc} </p>
      </div>
      <button className="bg-gray-50 py-3 px-8  w-7/12 text-sm font-medium text-brand-700">
        Read Article
      </button>
    </div>
  );
};

export default ResourceCard;
