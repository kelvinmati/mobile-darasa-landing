// import React from "react";

import React, { useEffect, useState } from "react";
import footer_img from "../assets/images/footer-img.jpg";
import TypingEffect from "../utils/TypingEffect";
import Carousel from "./Carousel";

import heroImg from "../assets/images/monitor-removebg-preview.png";
import icon1 from "../assets/images/online-education.png";
import icon2 from "../assets/images/webinar.png";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";

import university from "../assets/icons/university-icon.png";
import college from "../assets/icons/college-icon.png";

const Hero = () => {
  const wordsArray = ["Success", "Knowledge", "Excellence", "Growth"];
  return (
    <div
      className="w-mobile md:w-containerWidth mx-auto bg-blend-multiply bg-cover bg-primaryBlue rounded-3xl py-16 px-8 md:gap-4 gap-20 grid md:grid-cols-2 items-center md:h-[550px]"
      style={{
        backgroundImage: `url(${footer_img})`,
      }}
    >
      <div className="space-y-12">
        <div>
          <p className="md:text-5xl text-3xl font-bold text-white ">
            Your Gateway to Digital Learning{" "}
            {<TypingEffect words={wordsArray} />}.
          </p>

          <p className="text-md text-gray-300 py-2">
            One Platform, Infinite Learning.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className=" animate-bounce px-6 py-2 bg-primaryRed text-white rounded-md hover:bg-secondaryRed flex items-center space-x-1">
            <span>Get started</span>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>

          {/* <button className="text-primaryRed px-6 py-2 border rounded-md hover:bg-gray-50">
            Watch video
          </button> */}
        </div>

        <div className="grid grid-cols-3 gap-2 text-white">
          <div className="flex items-center space-x-4  border-r-2">
            <img
              className="w-12 h-12 bg-white rounded-full p-2"
              src={university}
              alt=""
            />
            <div>
              <p className="text-primaryRed text-lg">200+</p>
              <p className="">Universities</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r-2">
            <img
              className="w-12 h-12 bg-white rounded-full p-2"
              src={icon2}
              alt=""
            />
            <div>
              <p className="text-primaryRed text-lg">1000+</p>
              <p className="">Students</p>
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4 ">
            <img
              className="w-12 h-12 bg-white rounded-full p-2"
              src={college}
              alt=""
            />
            <div>
              <p className="text-primaryRed text-lg">100+</p>
              <p className="">Colleges</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full ">
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
