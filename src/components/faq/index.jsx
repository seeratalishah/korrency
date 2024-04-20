import React from "react";
import { faqArray } from "../../data/data";
import ListItem from "./ListItem";

const FAQ = () => {
  return (
    <div style={{width: "100%"}} className="px-4 py-8 flex flex-col items-center justify-center">
      <h2 className="mb-8">
        Frequently Asked <span>Questions</span>
      </h2>
      <div
        style={{ maxWidth: "900px", width: "100%" }}
        className="flex flex-col gap-4"
      >
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
