import React from "react";
import dollar1 from "../../assets/dollar.png";
import secure1 from "../../assets/secure.png";
import transparent1 from "../../assets/transparency.png";

const WhyChooseKorrency = () => {
  return (
    <div className="px-4 py-8 mt-8">
      <h2 className="mb-4 text-center">
        Why Choose <span>Korrency</span>
      </h2>
      <div class="row">
        <div class="with-border-image">
          <div>
            <img src={dollar1} alt="dollar" />
            <div>
              <h2>Set Your Rate</h2>
              <p>
                Gain control over your currency exchanges with the freedom to
                set your own rates, ensuring you always get the best value.
              </p>
            </div>
          </div>
        </div>
        <div class="with-border-image">
          <div>
            <img src={secure1} alt="secure" />
            <div>
              <h2>Fast & Secure</h2>
              <p>
                Experience swift international transfers with top-tier security,
                giving you peace of mind with every transaction.
              </p>
            </div>
          </div>
        </div>

        <div class="with-border-image">
          <div>
            <img src={transparent1} alt="transparent" />
            <div>
              <h2>Transparent & User-Focused</h2>
              <p>
                Our goal is radical transparency, with no hidden fees on a
                platform designed around your needs and feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseKorrency;
