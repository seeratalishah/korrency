import React from "react";
import ListComponent from "../ListComponent";
import wkImage1 from "../../assets/wk-img1.png";
import wkImage2 from "../../assets/wk-img2.png";
import { listArray } from "../../data/data";

const KorrencyWork = () => {
  return (
    <div className="container mx-auto px-4">
      {/* First Row */}
      <div className="md:flex md:items-center md:justify-between md:space-x-4">
        <img src={wkImage1} alt="Work illustration 1" className="md:w-1/2 w-full"/>
        <ListComponent listArray={listArray} />
      </div>
      {/* Second Row */}
      <div className="md:flex md:items-center md:justify-between md:space-x-4 mt-8">
        <ListComponent listArray={listArray} />
        <img src={wkImage2} alt="Work illustration 2" className="md:w-1/2 w-full"/>
      </div>
    </div>
  );
};

export default KorrencyWork;
