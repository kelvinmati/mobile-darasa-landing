import React from "react";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";
import aboutus from "../assets/images/aboutus.jpeg";
import aboutus2 from "../assets/images/aboutus2.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="w-mobile md:w-containerWidth mx-auto grid md:grid-cols-2 gap-5">
        <div className=" grid grid-cols-2 gap-3">
          <div>
            <img
              className="rounded-lg h-full object-cover"
              src={aboutus}
              alt=""
            />
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
            Mobile Darasa is an innovative e-learning platform designed to
            empower educational institutions across Africa by providing
            customizable and accessible digital learning solutions. Our mission
            is to enhance the quality and reach of education by transforming
            traditional learning environments into dynamic online spaces that
            cater to a diverse range of learners.
          </p>
          <p>
            Mobile Darasa aims to address the unique challenges faced by African
            educational institutions, such as limited access to quality
            resources, high development costs, and inadequate infrastructure. By
            offering a ready-to-use, branded digital learning environment,
            Mobile Darasa enables institutions to focus on delivering quality
            education without the burden of technical complexities.
          </p>
          <p className="text-black">
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
                  className="size-6 text-secondaryBlue"
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
                  className="size-6 text-secondaryBlue"
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
                  className="size-6 text-secondaryBlue"
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
                  className="size-6 text-secondaryBlue"
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
          <div>
            <Link to="/about">
              <button className="px-6 py-2 bg-secondaryBlue text-white rounded-full hover:bg-primaryBlue ">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
