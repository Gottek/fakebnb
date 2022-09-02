import React from "react";
import { BsGlobe } from "react-icons/bs";
import { BsMap } from "react-icons/bs";

import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col sticky bottom-0">
      <div className="flex justify-center mb-10">
        <div className="flex bg-zinc-800 rounded-full items-center px-4 py-3 space-x-3 text-white text-sm cursor-pointer hover:scale-110 ease-in duration-300">
          <div>Afficher la carte</div>
          <div>
            <BsMap />
          </div>
        </div>
      </div>
      <div className="flex px-24 py-4 justify-between border-t-gray-300 border-t flex-wrap sticky bg-white">
        <div className="text-xs text-gray-600">
          © 2022 Airbnb, Inc. · Confidentialité · Conditions générales · Plan du
          site · Infos sur entreprise
        </div>
        <div className=" flex items-center text-xs space-x-3">
          <BsGlobe />
          <div className="flex space-x-3 flex-wrap">
            <div>Français(BE)</div>
            <div>€ EUR</div>
            <div>Assistance et ressources</div>
          </div>
          <IoIosArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
