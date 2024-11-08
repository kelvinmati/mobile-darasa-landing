import React from "react";
import about_hero from "../assets/images/about-hero.jpg";
const MoreAbout = () => {
  return (
    <>
      <div
        className="bg-primaryBlue text-white h-[350px] bg-no-repeat bg-cover bg-center bg-blend-multiply"
        style={{
          backgroundImage: `url(${about_hero})`,
        }}
      >
        <div className=" w-mobile md:w-containerWidth mx-auto flex flex-col justify-center  h-full">
          <p className="text-2xl">ABOUT US</p>
          <p className="text-orange text-lg">
            {" "}
            Know more about Mobile Darasa.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default MoreAbout;
