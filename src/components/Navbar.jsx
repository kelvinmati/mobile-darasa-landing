import React from "react";
import logoBlue from "../assets/icons/logo-blue.png";
import mobile_friendly from "../assets/icons/mobile-friendly.png";
import virtual_education from "../assets/images/virtual-education.png";
import course_mgt from "../assets/images/course-mgt.png";
import content_lib from "../assets/images/content-lib.png";
import analytics from "../assets/images/analytics.png";
import grading from "../assets/images/grading.png";
import support from "../assets/icons/support.png";
import roleBased from "../assets/icons/role-based.png";

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="home" className="py-3 ">
      <div className="w-mobile md:w-containerWidth mx-auto flex items-center justify-between  ">
        <div className="h-[80px] cursor-pointer">
          <img className="w-full h-full" src={logoBlue} alt="" />
        </div>
        <div>
          <ul className="flex space-x-3">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink> */}

            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1500}
              >
                About
              </Link>
            </li>

            <div className="dropdown dropdown-bottom z-20">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center space-x-2 cursor-pointer hover:text-primaryRed text-textColor"
              >
                <span>Features</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-md z-[1] mt-3  p-3 shadow grid grid-cols-2 gap-4 w-[500px] "
              >
                <Link to="features" smooth={true} duration={1500}>
                  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                    <img className="w-10 h-10" src={course_mgt} alt="" />
                    <p>Seamless Course Management and Content Delivery</p>
                  </div>
                </Link>
                <Link to="features" smooth={true} duration={1500}>
                  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                    <img className="w-10 h-10" src={virtual_education} alt="" />
                    <p>Branded & Customised Learning Environment</p>
                  </div>
                </Link>
                <Link to="features" smooth={true} duration={1500}>
                  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                    <img className="w-10 h-10" src={roleBased} alt="" />
                    <p>Secure, Role-Based Access</p>
                  </div>{" "}
                </Link>
                <Link to="features" smooth={true} duration={1500}>
                  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                    <img className="w-10 h-10" src={analytics} alt="" />
                    <p>Analytics and Reporting</p>
                  </div>
                </Link>
                <Link to="features" smooth={true} duration={1500}>
                  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                    <img className="w-10 h-10" src={grading} alt="" />
                    <p>Engagement and Communication Tools</p>
                  </div>
                </Link>

                <Link to="features" smooth={true} duration={1500}>
                  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md cursor-pointer">
                    <img className="w-10 h-10" src={support} alt="" />
                    <p>Ongoing Support and Maintenance</p>
                  </div>
                </Link>
              </ul>
            </div>
            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              <Link
                activeClass="active"
                to="pricing"
                // spy={true}
                smooth={true}
                offset={-80}
                duration={1500}
              >
                Pricing
              </Link>
            </li>
            <NavLink to="/faq">
              <li className="cursor-pointer hover:text-primaryRed text-textColor">
                FAQs
              </li>
            </NavLink>

            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              <Link
                to="footer"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1500}
              >
                Contact
              </Link>
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
