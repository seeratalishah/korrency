import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { faqArray } from "../../data/data";

const ListItem = ({ title }) => {
  return (
    <div>
      <div>
        <h3 className="card-title">{title}</h3> <IoIosArrowUp />
      </div>
      <div>
        <p className="white-bg-text">{text}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      <h2 className="mb-8">
        Frequently Asked <span>Questions</span>
      </h2>
      <div>
        {faqArray.map((item, index) => {
          return (
            <ListItem key={index} title={item.question} text={item.answer} />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
