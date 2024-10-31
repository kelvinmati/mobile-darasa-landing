import React from "react";
import logoBlue from "../assets/icons/logo-blue.png";
import mobile_friendly from "../assets/icons/mobile-friendly.png";
import virtual_education from "../assets/images/virtual-education.png";
import course_mgt from "../assets/images/course-mgt.png";
import content_lib from "../assets/images/content-lib.png";
import analytics from "../assets/images/analytics.png";
import grading from "../assets/images/grading.png";

const Navbar = () => {
  return (
    <div className="py-3 ">
      <div className="w-mobile md:w-containerWidth mx-auto flex items-center justify-between  ">
        <div className="h-[80px] cursor-pointer">
          <img className="w-full h-full" src={logoBlue} alt="" />
        </div>
        <div>
          <ul className="flex space-x-3">
            <li className="cursor-pointer hover:text-secondaryBlue text-textColor">
              Home
            </li>
            <li className="cursor-pointer hover:text-secondaryBlue text-textColor">
              About
            </li>

            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center space-x-2 cursor-pointer hover:text-secondaryBlue text-textColor"
              >
                <span>Features</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-md z-[1] mt-3  p-3 shadow grid grid-cols-2 gap-4 w-[500px] "
              >
                <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                  <img className="w-10 h-10" src={course_mgt} alt="" />
                  <p>Customizable Course Management</p>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                  <img className="w-10 h-10" src={virtual_education} alt="" />
                  <p>Virtual Classrooms</p>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                  <img className="w-10 h-10" src={content_lib} alt="" />
                  <p>Content Library</p>
                </div>{" "}
                <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                  <img className="w-10 h-10" src={analytics} alt="" />
                  <p>Analytics and Reporting</p>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                  <img className="w-10 h-10" src={grading} alt="" />
                  <p>Assessment and Grading Tools</p>
                </div>
              </ul>
            </div>
            <li className="cursor-pointer hover:text-secondaryBlue text-textColor">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-secondaryBlue text-textColor">
              Contact
            </li>
          </ul>
        </div>
        <div className="space-x-5">
          <button className="text-primaryRed px-6 py-2 border rounded-md hover:bg-gray-50">
            Request demo
          </button>
          <button className="px-6 py-2 bg-primaryBlue text-white rounded-md hover:bg-secondaryBlue">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
