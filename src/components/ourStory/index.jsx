import React from "react";
import ourStoryImg from "../../assets/ourstory.png";

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8" style={{width: "100%"}}>
      <div className="flex-1">
        <img src={ourStoryImg} alt="Our story" className="w-full"/>
      </div>
      <div className="flex-1 mt-6 md:mt-0 md:ml-8">
        <h2 className="mb-4">Our <span>Story</span></h2>
        <p className="white-bg-text mb-6">
          At Korrency, we're a team of immigrants, just like you. We've felt the
          sting of hidden fees and the frustration of unfair exchange rates when
          sending money back home.
        </p>
        <button className="rounded-lg h-full text-white px-8 py-3 primaryBtn transition duration-300">Read More</button>
      </div>
    </div>
  );
};

export default OurStory;
