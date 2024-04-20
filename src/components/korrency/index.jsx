import React from "react";
import { korrencyArray } from "../../data/data";
import CardComponent from "../cardComponent";
import "./Korrency.scss";

const Korrency = () => {
  return (
    <div className="korrency">
      {korrencyArray.map((item, index) => (
        <CardComponent
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.desc}
        />
      ))}
    </div>
  );
};

export default Korrency;
