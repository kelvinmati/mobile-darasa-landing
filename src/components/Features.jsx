import React from "react";
import content_lib from "../assets/images/content-lib.png";

const Features = () => {
  return (
    <div id="features" className="py-5">
      <div className=" w-mobile md:w-containerWidth mx-auto ">
        <div className="pb-4">
          <h2 className=" text-xl">KEY FEATURES AND FUNCTIONALITIES.</h2>
          <p className="text-primaryRed">
            Mobile Darasa operates as a white-label digital learning platform
            designed to support institutions in delivering online education
            efficiently and at scale.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {features.map((feature) => (
            <div className="shadow-xl p-5 space-y-1.5 bg-gray-50 rounded-md">
              <div className="w-12 h-12  rounded-full bg-primaryBlue p-2">
                <img className="w-full h-full" src={content_lib} alt="" />
              </div>
              <h2 className="text-xl text-primaryBlue">
                Branded & Customised Learning Environment
              </h2>
              <p>
                <span className="font-semibold">Institutional Branding:</span>{" "}
                <span className="text-textColor">
                  Each institution’s Mobile Darasa instance is tailored to
                  reflect its unique branding elements logo, color scheme, and
                  visual identity—creating a cohesive and familiar experience
                  for students.
                </span>
              </p>
              <p>
                <span className="font-semibold">Institutional Branding:</span>{" "}
                <span className="text-textColor">
                  Each institution’s Mobile Darasa instance is tailored to
                  reflect its unique branding elements logo, color scheme, and
                  visual identity—creating a cohesive and familiar experience
                  for students.
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

const features = [1, 2, 3, 4, 5, 6];
