// import React from "react";

import React, { useEffect, useState } from "react";
import footer_img from "../assets/images/footer-img.jpg";
import TypingEffect from "../utils/TypingEffect";
import Carousel from "./Carousel";

import hero_img from "../assets/images/hero-img.png";

import icon1 from "../assets/images/online-education.png";
import icon2 from "../assets/images/webinar.png";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";

import university from "../assets/icons/university-icon.png";
import college from "../assets/icons/college-icon.png";
import hero_bg from "../assets/images/hero-bg.png";
import profile1 from "../assets/images/grey-lady.png";

const Hero = () => {
  const wordsArray = ["Success", "Knowledge", "Excellence", "Growth"];
  return (
    <div
      id="hero"
      className="w-mobile md:w-containerWidth mx-auto bg-blend-multiply bg-cover rounded-3xl md:px-8 md:py-0 pt-7 px-4 gap-5 grid md:grid-cols-2 items-center "
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <div className="space-y-10">
        <div>
          <p className="md:text-5xl text-2xl font-bold text-white ">
            Your Gateway to Digital Learning{" "}
            {<TypingEffect words={wordsArray} />}.
          </p>

          <p className="text-md text-gray-200 py-2">
            One Platform, Infinite Learning.
          </p>
        </div>
        <div className="flex space-x-3">
          <a href="https://staging.mdarasa.com/users/register-tenancy">
            <button className=" md:px-6 px-4 py-2 bg-primaryRed text-white rounded-full hover:bg-secondaryRed flex items-center space-x-1">
              <span>Get started</span>{" "}
            </button>
          </a>

          <button className="text-white md:px-6 px-4 py-2 border rounded-full">
            Request Demo
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 text-white">
          <div className="flex items-center md:space-x-4 space-x-2  border-r-2">
            <img
              className="md:w-12 w-8 md:h-12 h-8 bg-white rounded-full md:p-2 p-1"
              src={university}
              alt=""
            />
            <div>
              <p className="text-primaryRed md:text-lg text-sm">200+</p>
              <p className="md:text-sm text-xs">Universities</p>
            </div>
          </div>
          <div className="flex items-center md:space-x-4 space-x-2 border-r-2">
            <img
              className="md:w-12 w-8 md:h-12 h-8 bg-white rounded-full md:p-2 p-1"
              src={icon2}
              alt=""
            />
            <div>
              <p className="text-primaryRed md:text-lg text-sm">1000+</p>
              <p className="md:text-sm text-xs">Students</p>
            </div>
          </div>{" "}
          <div className="flex items-center md:space-x-4 space-x-2 ">
            <img
              className="md:w-12 w-8 md:h-12 h-8 bg-white rounded-full md:p-2 p-1"
              src={college}
              alt=""
            />
            <div>
              <p className="text-primaryRed md:text-lg text-sm">100+</p>
              <p className="md:text-sm text-xs">Colleges</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-full w-full">
        <Carousel />
      </div> */}

      <div className="">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
