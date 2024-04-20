import React from "react";
import Card from "./Card";
import { flagArray } from "../../data/data";

const SendMoney = () => {
  return (
    <div className="text-center px-4 py-6" style={{width: "100%"}}>
      <h2 className="mb-8">Where You Can <span>Send Money</span></h2>
      <div className="flag-container mt-8">
        {flagArray.map((item, index) => (
          <Card
            key={index}
            flagImage={item.flagImage}
            countryName={item.countryName}
          />
        ))}
      </div>
      <p
        className="link-text mt-8"
      >
        More countries to follow
      </p>
    </div>
  );
};

export default SendMoney;
