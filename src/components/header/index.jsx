import React, { useState } from "react";
import logo from "../../assets/Korrency-white-version.png";
import { Button, Menu } from "antd";
import "./Header.scss";

const items = [
  {
    label: "How it Works ",
    key: "howItWorks",
  },
  {
    label: "FAQ’s",
    key: "FAQ",
  },
  {
    label: "Blog",
    key: "blog",
  },
];
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          theme="dark"
        />
      </div>
      <div>
        <Button type="primary">Get Early Access</Button>
      </div>
    </div>
  );
};

export default Header;
