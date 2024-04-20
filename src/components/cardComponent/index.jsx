import React from "react";
import "./CardComponent.css";

const CardComponent = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col gap-1 bg-white uniform-shadow p-4 rounded-lg">
      <div>
        <img src={icon} alt="card-icon" style={{width: "50px", height: "50px"}} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="white-bg-text" style={{maxWidth: "500px"}}>{text}</p>
    </div>
  );
};

export default CardComponent;
