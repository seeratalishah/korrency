import React from "react";
import DescText from "../descText";
import { Button, Input } from "antd";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import xicon from "../../assets/xicon.png";
import copy from "../../assets/copy.png";
import linkedin from "../../assets/linkedin.png";

import girl from "../../assets/heroSection-side.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 hero-section">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12 pt-20 lg:pt-2">
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl  mb-4 font-gloryBold text-4xl font-semibold tracking-normal text-white">
            Exchange Easily,
          </p>
          <p className="max-w-2xl mb-4 text-4xl font-gloryBold font-semibold tracking-normal text-white">
            Send Globally.
          </p>
          <p className="max-w-2xl text-base font-thin text-white">
            Transfer money internationally at the best rates,
          </p>
          <p className="max-w-2xl mb-6 text-base font-thin text-white">
            Securely exchange at your desired rate and save even more
          </p>
          <p className="max-w-3xl mb-6 text-base font-thin text-white lg:mb-8 ">
            Join the waitlist for early access and earn a chance for 90 days
            free exchange
          </p>

          <div className="max-w-screen-xl mx-auto">
            {/* Form for name and email */}
            <div className="flex gap-4 mb-4">
              <Input
                placeholder="First name"
                className="w-full rounded px-4 py-2"
              />
              <Input placeholder="Email" className="w-full rounded px-4 py-2" />
              <Button className="rounded-lg h-full text-white px-8 py-3 accessBtn transition duration-300 ">
                Get Early Access
              </Button>
            </div>

            {/* Social media share */}
            <div className="flex gap-4 ">
              <p className="mb-2 text-white">Share on social media:</p>
              <div className="flex gap-4">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
                <img src={insta} alt="Instagram" className="w-8 h-8" />
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                <img src={xicon} alt="X Icon" className="w-8 h-8" />
                <img src={copy} alt="Copy" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={girl} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
