import React from "react";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";
import aboutus from "../assets/images/aboutus.jpeg";
import aboutus2 from "../assets/images/aboutus2.jpg";

const About = () => {
  return (
    <div className="py-20">
      <div className="w-mobile md:w-containerWidth mx-auto grid md:grid-cols-2 gap-5">
        <div className=" grid grid-cols-2 gap-3">
          <div>
            <img className="rounded-lg" src={aboutus} alt="" />
          </div>
          <div className="grid grid-rows-4 gap-3">
            <div className=" row-span-3">
              <img
                className="rounded-lg h-full object-cover"
                src={aboutus2}
                alt=""
              />
            </div>
            {/* <div className="rounded-lg bg-gradient-to-r from-primaryRed   via-secondaryRed  to-secondaryRed flex items-center justify-center text-white">
              <h2 className="text-3xl font-bold">About us</h2>
            </div> */}
            <div className="rounded-lg bg-black flex items-center justify-center text-white">
              <h2 className="text-3xl font-bold">About us</h2>
            </div>
          </div>
        </div>
        <div className="text-textColor space-y-3">
          <h2 className="text-xl text-black">ABOUT MOBILE DARASA</h2>
          <p>
            Mobile Darasa is designed specifically to serve educational
            institutes across Kenya,by providing a comprehensive, interactive,
            and affordable digital learning solution
          </p>
          <p>
            By integrating Kenya’s national curriculum with global best
            practices, we offer a user-friendly platform that helps learning
            institutions deliver quality education efficiently, through advanced
            digital tools, live classes, assessments, and resources, we aim to
            transform how institutions deliver content, engage students, and
            enhance their learning outcomes.
          </p>
          <p>
            Mobile Darasa targets learning institutions in Kenya, including:
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-3">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primaryRed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>Private and public educational institutions.</p>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primaryRed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>Universities and colleges.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primaryRed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>Primary and secondary schools.</p>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primaryRed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>TVET centers.</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2 bg-primaryRed text-white rounded-md hover:bg-secondaryRed ">
            More about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
