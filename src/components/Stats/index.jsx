import React from "react";

const Stats = () => {
  const stats = [
    {
      percentage: "99.95%",
      area: "Accuracy rate",
      desc: "in fulfilling orders",
    },
    {
      percentage: "5000+",
      area: "Ecommerce businesses",
      desc: "partner with Opus",
    },
    {
      percentage: "99.96%",
      area: "Of orders ship on time",
      desc: "with SLA",
    },
    {
      percentage: "#1",
      area: "Best FulFillment Technology",
      desc: "by AdWeek's Retail Awards",
    },
  ];

  // flex flex-col md:flex-row items-center md:items-start gap-8 h-max lg:h-40 lg:w-[1120px] flex-wrap

  return (
    <div className="px-3 md:px-24 lg:px-48 py-10 md:py-12 lg:py-24 h-max ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-max lg:h-40 lg:w-[1120px]">
        {stats.map((item, index) => (
          <div
            className="flex flex-col items-center gap-3 py-4 px-15"
            key={index}
          >
            <h1 className="text-4xl font-bold text-brand-700">
              {item.percentage}
            </h1>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-medium text-brand-700-700">
                {item.area}
              </h4>
              <h3 className="text-lg text-gray-500">{item.desc} </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
