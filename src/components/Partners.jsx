import React from "react";
import mdarasa from "../assets/images/mdarasa-logo.png";
const Partners = () => {
  return (
    <div className="pt-20">
      <div className="w-mobile md:w-containerWidth mx-auto">
        <h2 className="md:text-xl text-lg">
          {" "}
          OUR FEATURED CLIENTS & PARTNERS.
        </h2>
        <p className="text-primaryRed pb-5">
          Collaborating with industry leaders to deliver excellence and
          innovation.
        </p>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 ">
          <div className="shadow-lg rounded-md p-7 bg-gray-50">
            <img className="h-9" src={mdarasa} alt="" />
          </div>
          <div className="shadow-lg rounded-md p-7 bg-gray-50">
            <img className="h-9" src={mdarasa} alt="" />
          </div>{" "}
          <div className="shadow-lg rounded-md p-7 bg-gray-50">
            <img className="h-9" src={mdarasa} alt="" />
          </div>{" "}
          <div className="shadow-lg rounded-md p-7 bg-gray-50">
            <img className="h-9" src={mdarasa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
