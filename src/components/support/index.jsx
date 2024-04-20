import React from "react";
import support from "../../assets/support.png";

const Support = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8" style={{width: "100%"}}>
      <div className="flex-1 mt-6 md:mt-0 md:ml-8">
        <h2 className="mb-4">
          <span> 24/7</span> supportOur
        </h2>
        <p className="white-bg-text mb-6">
          Got a question? We're here for you 24/7 with phone, chat, and email
          support—always ready, always cheerful!
        </p>
      </div>
      <div className="flex-1">
        <img
          src={support}
          alt="support"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Support;
