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
import hero_bg from "../assets/images/hero-bg.png";
import profile1 from "../assets/images/grey-lady.png";

const Hero = () => {
  const wordsArray = ["Success", "Knowledge", "Excellence", "Growth"];
  return (
    <div
      className="w-mobile md:w-containerWidth mx-auto bg-blend-multiply bg-cover rounded-3xl   px-8 md:gap-4 gap-20 grid md:grid-cols-2 items-center md:h-[550px]"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <div className="space-y-10">
        <div>
          <p className="md:text-5xl text-3xl font-bold text-white ">
            Your Gateway to Digital Learning{" "}
            {<TypingEffect words={wordsArray} />}.
          </p>

          <p className="text-md text-gray-100 py-2">
            One Platform, Infinite Learning.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className=" px-6 py-2 bg-primaryRed text-white rounded-full hover:bg-secondaryRed flex items-center space-x-1">
            <span>Get started</span>{" "}
          </button>

          <button className="text-white px-6 py-2 border rounded-full">
            Request Demo
          </button>
        </div>

        {/* <div className="grid grid-cols-3 gap-2 text-white">
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
        </div> */}

        {/* <div className="flex space-x-1 ">
          <div className=" flex justify-center">
            <div className="h-11 w-11 rounded-full ">
              <img
                className="max-h-full w-full object-contain rounded-full p-0.5 border-2"
                src={profile1}
                alt=""
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="h-11 w-11 rounded-full ">
              <img
                className="max-h-full w-full object-contain rounded-full p-0.5 border-2"
                src={profile1}
                alt=""
              />
            </div>
          </div>{" "}
          <div className=" flex justify-center">
            <div className="h-11 w-11 rounded-full ">
              <img
                className="max-h-full w-full object-contain rounded-full p-0.5 border-2"
                src={profile1}
                alt=""
              />
            </div>
          </div>{" "}
          <div className=" flex justify-center">
            <div className="h-11 w-11 rounded-full ">
              <img
                className="max-h-full w-full object-contain rounded-full p-0.5 border-2"
                src={profile1}
                alt=""
              />
            </div>
          </div>
          <div className="text-white font-bold">
            <p>10K+ students</p>
            <p>learn from us.</p>
          </div>
        </div> */}
        <div className="flex space-x-2 items-center">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={profile1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={profile1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="text-white font-bold">
            <p>10K+ students</p>
            <p>learn from us.</p>
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
