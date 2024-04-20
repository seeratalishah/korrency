import React from "react";
import { moneySecuredArray } from "../../data/data";
import CardComponent from "../cardComponent";

const MoneySecured = () => {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
        <h2 className="mb-4 sm:mb-0 md:mb-0 lg:mb-0">
          We Keep Your <span>Money Secured</span>
        </h2>
        <button className="rounded-lg text-white px-8 py-3 bg-blue-500 primaryBtn transition duration-300">
          Get Early Access
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moneySecuredArray.map((item, index) => {
          return (
            <CardComponent
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoneySecured;
