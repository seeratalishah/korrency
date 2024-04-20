import React from "react";
import "./CardComponent.scss";
import CardTitle from "../cardTitle";
import DescText from "../descText";

const CardComponent = ({position, icon, title, text}) => {
  return (
    <div className="card">
        <div className="content">
        <div className="icon">
          <img src={icon} alt="card-icon" />
        </div>
        <CardTitle title={title} />
        <DescText
          text={text}
        />
        </div>
    </div>
  );
};

export default CardComponent;
