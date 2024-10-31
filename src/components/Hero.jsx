import React from "react";
import heroImg from "../assets/images/monitor-removebg-preview.png";
import icon1 from "../assets/images/online-education.png";
import icon2 from "../assets/images/webinar.png";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";
const Hero = () => {
  return (
    <div>
      <div className="w-mobile md:w-containerWidth mx-auto bg-primaryBlue rounded-3xl  p-8  md:gap-2 gap-20 grid md:grid-cols-2  items-center">
        <div className="space-y-10">
          <div>
            <p className="text-5xl font-bold text-white ">
              Your Gateway to Digital Learning Success
            </p>
            <p className="text-md text-gray-300 py-2">
              {/* A good <span>education </span> is foundation for better{" "} */}
              One Platform, Infinite Learning Possibilities.
              <span>future.</span>
            </p>
          </div>
          <button className="px-6 py-2 bg-primaryRed text-white rounded-md hover:bg-secondaryRed flex items-center space-x-1">
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

          <div className="grid grid-cols-3 gap-2 bg-white p-5 rounded-lg">
            <div className="">
              <p className="text-primaryRed text-2xl">200+</p>
              <p className="text-textColor">Universities</p>
            </div>
            <div>
              <p className="text-primaryRed text-2xl">1,000+</p>
              <p className="text-textColor">Colleges</p>
            </div>
            <div>
              <p className="text-primaryRed text-2xl">5,000+</p>
              <p className="text-textColor">Students</p>
            </div>
          </div>
        </div>
        {/* <div className="relative ">
          <img className="object-cover" src={heroImg} alt="" />
          <img
            className="absolute h-[100px] w-[100px] top-10 left-10"
            src={icon1}
            alt=""
          />
          <img
            className="absolute h-[100px] w-[100px] bottom-0 right-5"
            src={icon2}
            alt=""
          />
          <p className="absolute h-[80px] w-[140px] top-5 right-10 bg-secondaryBlue rounded-b-full rotate-45"></p>
        </div> */}

        <div>
          <img className="rotate-12" src={arbitrage_mockup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
