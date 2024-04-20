import React from "react";
import Card from "./Card";
import { flagArray } from "../../data/data";

const SendMoney = () => {
  return (
    <div className="text-center px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6">Where You Can Send Money</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {flagArray.map((item, index) => (
          <Card
            key={index}
            flagImage={item.flagImage}
            countryName={item.countryName}
          />
        ))}
      </div>
      <a
        href="/"
        className="text-blue-600 hover:text-blue-800 mt-6 inline-block"
      >
        More countries to follow
      </a>
    </div>
  );
};

export default SendMoney;
