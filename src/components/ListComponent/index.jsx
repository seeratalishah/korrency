import React from "react";

import "./ListComponent.css";

const PointComponent = ({ title, text }) => {
  return (
    <div className="flex items-center">
      <div className="w-4 h-4 bg-gray-300 rounded-full relative mr-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-black bg-dotted"></div>
        </div>
      </div>
      <div>
        <p className="blue-text">{title}</p>
        <p className="white-bg-text">{text}</p>
      </div>
    </div>
  );
};

const ListComponent = ({listArray, whiteText, blueText}) => {
  return (
    <div className="p-4">
      <h2 className="mb-4">{whiteText} <span>{blueText}</span></h2>
      <div className="flex flex-col gap-4">
        {listArray.map((item, index) => {
          return <PointComponent key={index} title={item.title} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default ListComponent;
