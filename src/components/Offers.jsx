import React from "react";
import offers_img from "../assets/images/offers.jpg";
import mobile_friendly from "../assets/icons/mobile-friendly.png";
import scalability from "../assets/icons/sacalability.png";
import customized from "../assets/icons/customized-elearning.png";
import course_mgt from "../assets/images/course-mgt.png";
import accessibilty from "../assets/icons/accesibility.png";
import support from "../assets/icons/support.png";
import analytics from "../assets/images/analytics.png";
import about_hero from "../assets/images/about-hero.jpg";

const Offers = () => {
  return (
    <div className="pt-20 pb-10">
      <div className="text-center">
        <h2 className="text-lg">WHAT ISHULE OFFERS.</h2>
        <p className="text-primaryRed">
          Comprehensive learning solutions that transform talent into your
          competitive advantage.
        </p>
      </div>
      <div className="w-mobile md:w-containerWidth mx-auto grid md:grid-cols-4 gap-5  pt-10">
        <div className="bg-white">
          <div className="h-[250px] w-full flex">
            <img className="h-full w-full" src={about_hero} alt="" />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-lg">Customizable Learning Environment.</p>
            <p className="text-textColor">
              Each institution can personalize its iShule platform with its
              branding, including logos and color schemes, ensuring a cohesive
              identity for students and faculty.
            </p>
            <button className=" px-6 py-2 bg-secondaryBlue text-white rounded-full hover:bg-primaryBlue ">
              <span>Learn more</span>{" "}
            </button>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-[250px] w-full flex">
            <img className="h-full w-full" src={about_hero} alt="" />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-lg">Comprehensive Course Management.</p>
            <p className="text-textColor">
              Institutions can easily create, upload, and manage a wide range of
              courses, including multimedia content, assessments, and
              interactive modules that enhance student engagement.
            </p>
            <button className=" px-6 py-2 bg-secondaryBlue text-white rounded-full hover:bg-primaryBlue ">
              <span>Learn more</span>{" "}
            </button>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-[250px] w-full flex">
            <img className="h-full w-full" src={about_hero} alt="" />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-lg">Accessibility and Inclusivity.</p>
            <p className="text-textColor">
              iShule is designed to be accessible on various devices, including
              smartphones and tablets, catering to the needs of all learners,
              including those in remote areas with limited internet
              connectivity.
            </p>
            <button className=" px-6 py-2 bg-secondaryBlue text-white rounded-full hover:bg-primaryBlue ">
              <span>Learn more</span>{" "}
            </button>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-[250px] w-full flex">
            <img className="h-full w-full" src={about_hero} alt="" />
          </div>
          <div className="space-y-3 p-5">
            <p className="text-lg">User-Friendly Interface.</p>
            <p className="text-textColor">
              The platform features an intuitive interface for both students and
              educators, making it easy to navigate and interact with course
              materials and features.
            </p>
            <button className=" px-6 py-2 bg-secondaryBlue text-white rounded-full hover:bg-primaryBlue ">
              <span>Learn more</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
