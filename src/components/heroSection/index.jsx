import React from "react";
import DescText from "../descText";
import { Button, Input } from "antd";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import xicon from "../../assets/xicon.png";
import copy from "../../assets/copy.png";
import linkedin from "../../assets/linkedin.png";

import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="form">
        <h1>Exchange Easily, Send Globally.</h1>
        <DescText
          text="Transfer money internationally at the best rates,
Securely exchange at your desired rate and save even more"
        />
        <DescText text="Join the waitlist for early access and earn a chance for 90 days free exchange" />
        <div className="input-container">
          <Input placeholder="First Name" style={{ width: "200px" }} />
          <Input placeholder="Email" style={{ width: "200px" }} />
          <Button type="primary">Get Early Access</Button>
        </div>
        <div className="social-icons">
          <p>Share on social media:</p>
          <div className="social-icons-container">
            <img src={facebook} alt="icon" />
            <img src={insta} alt="icon" />
            <img src={xicon} alt="icon" />
            <img src={linkedin} alt="icon" />
            <img src={copy} alt="icon" />
          </div>
        </div>
      </div>
      <div className="media"></div>
    </div>
  );
};

export default HeroSection;
