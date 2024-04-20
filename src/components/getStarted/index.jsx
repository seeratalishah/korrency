import React from "react";
import backgroundImageUrl from "../../assets/getstarted.png";

const GetStarted = () => {
  return (
    <div
      className="get-started bg-cover bg-center text-white flex flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h1 className="mb-4 text-center">
        Start Exchanging and Sending Money On Korrency
      </h1>
      <p className="dark-bg-text mb-6 text-center">
        Join The Waitlist Now To Be One Of The First Korrency Users To Get Your
        Free Multi-Currency Wallets
      </p>
      <button className="rounded-lg h-full text-white px-8 py-3 secondaryBtn transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
