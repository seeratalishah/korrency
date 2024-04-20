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
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const ListComponent = ({listArray}) => {
  return (
    <div className="p-4">
      <p className="text-xl font-bold mb-4">Peer to Peer Exchange</p>
      <div>
        {listArray.map((item, index) => {
          return <PointComponent key={index} title={item.title} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default ListComponent;
