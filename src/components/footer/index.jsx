import React from "react";
import footerLogo from "../../assets/Korrency-white-version.png";
import appStoreBadge from "../../assets/app-store-badge.png";
import googlePlayBadge from "../../assets/google-play-badge.png";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import xicon from "../../assets/xicon.png";
import linkedin from "../../assets/linkedin.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900 footer-section mt-8">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <img src={footerLogo} alt="Korrenccy Logo" className="mb-2" />
            <p className="text-white">
              Korrency is a registered money service business with the Financial
              Transactions and Reports Analysis Centre of Canada (FINTRAC) under
              registration number M24601697
            </p>
          </div>
          <div>
            <h2 class="mb-6 text-lg font-semibold text-white uppercase dark:text-white">
              Quick Links
            </h2>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  How it Works
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  FAQ's
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img
              src={appStoreBadge}
              alt="appStoreBadge Logo"
              className="mb-2"
            />
            <img
              src={googlePlayBadge}
              alt="googlePlayBadge Logo"
              className="mb-2"
            />
          </div>
          <div>
            <h2 class="mb-6 text-lg font-semibold text-white uppercase dark:text-white">
              Join Our NewsLetter
            </h2>
            <p className="text-white">
              Be the first to know about our new features, New corridors launch,
              exchange rate alerts, and more...
            </p>
          </div>
        </div>
        <hr />
        <div class="px-4 py-6 text-center dark:bg-gray-700 ">
          <span class="text-sm text-white text-center flex flex-wrap gap-4 justify-center">
            Korrency Exchange Inc. Canada. © 2024. All Rights Reserved
            <div className="flex gap-4">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
              <img src={insta} alt="Instagram" className="w-8 h-8" />
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              <img src={xicon} alt="X Icon" className="w-8 h-8" />
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
