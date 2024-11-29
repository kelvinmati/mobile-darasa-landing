import React, { useState, useEffect } from "react";
import logoBlue from "../assets/icons/logo-blue.png";
import mobile_friendly from "../assets/icons/mobile-friendly.png";
import virtual_education from "../assets/images/virtual-education.png";
import course_mgt from "../assets/images/course-mgt.png";
import content_lib from "../assets/images/content-lib.png";
import analytics from "../assets/images/analytics.png";
import grading from "../assets/images/grading.png";
import support from "../assets/icons/support.png";
import roleBased from "../assets/icons/role-based.png";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    });
  }, []);
  // toggle side bar
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    setIsSideBarOpen(false);
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to the root route
      setTimeout(() => {
        // Delay scrolling to ensure the page is loaded
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adjust delay as necessary
    } else {
      // Direct scroll if already on the root route
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className={`py-3 h-[90px]${
        isNavbarScrolled && " bg-white fixed w-full z-50"
      } `}
    >
      <div className="w-mobile md:w-containerWidth mx-auto h-full flex items-center justify-between  ">
        <div className="h-[80px] cursor-pointer">
          <img className="w-full h-full" src={logoBlue} alt="" />
        </div>
        <div>
          <ul className="md:flex hidden  space-x-3">
            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                About
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              {location.pathname === "/" ? (
                <Link to="features" smooth={true} duration={1500} offset={-80}>
                  Features
                </Link>
              ) : (
                <button onClick={() => handleScroll("features")}>
                  Features
                </button>
              )}
            </li>

            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              {location.pathname === "/" ? (
                <Link to="pricing" smooth={true} duration={1500} offset={-80}>
                  Pricing
                </Link>
              ) : (
                <button onClick={() => handleScroll("pricing")}>Pricing</button>
              )}
            </li>

            <NavLink to="/faq">
              <li className="cursor-pointer hover:text-primaryRed text-textColor">
                FAQs
              </li>
            </NavLink>

            <li className="cursor-pointer hover:text-primaryRed text-textColor">
              {location.pathname === "/" ? (
                <Link to="contact" smooth={true} duration={1500} offset={-80}>
                  Contact
                </Link>
              ) : (
                <button onClick={() => handleScroll("contact")}>Contact</button>
              )}
            </li>
          </ul>
        </div>
        <a
          href="https://staging.mdarasa.com/users/register-tenancy"
          className="md:block hidden"
        >
          <button className="px-6 py-2 bg-primaryRed text-white rounded-full hover:bg-secondaryRed">
            Sign up
          </button>
        </a>
        <div
          className="md:hidden block "
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              // d="M6 18 18 6M6 6l12 12"
              d={
                isSideBarOpen
                  ? "M6 18 18 6M6 6l12 12"
                  : "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              }
            />
          </svg>
        </div>
      </div>
      <div
        className={`md:hidden fixed bg-white w-full h-full z-40 p-5 transition-all ${
          isSideBarOpen ? "translate-x-0" : "translate-x-[500px]"
        }`}
      >
        <ul className="space-y-2 flex flex-col items-center">
          <li
            onClick={() => setIsSideBarOpen(false)}
            className="cursor-pointer hover:text-primaryRed text-textColor"
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Home
            </NavLink>
          </li>
          <li
            onClick={() => setIsSideBarOpen(false)}
            className="cursor-pointer hover:text-primaryRed text-textColor"
          >
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-primaryRed text-textColor">
            {location.pathname === "/" ? (
              <Link
                onClick={() => setIsSideBarOpen(false)}
                to="features"
                smooth={true}
                duration={1500}
                offset={-80}
              >
                Features
              </Link>
            ) : (
              <button onClick={() => handleScroll("features")}>Features</button>
            )}
          </li>
          <li className="cursor-pointer hover:text-primaryRed text-textColor">
            {location.pathname === "/" ? (
              <Link
                onClick={() => setIsSideBarOpen(false)}
                to="pricing"
                smooth={true}
                duration={1500}
                offset={-80}
              >
                Pricing
              </Link>
            ) : (
              <button onClick={() => handleScroll("pricing")}>Pricing</button>
            )}
          </li>
          <li onClick={() => setIsSideBarOpen(false)}>
            <NavLink to="/faq">
              <li className="cursor-pointer hover:text-primaryRed text-textColor">
                FAQs
              </li>
            </NavLink>
          </li>

          <li className="cursor-pointer hover:text-primaryRed text-textColor">
            {location.pathname === "/" ? (
              <Link
                onClick={() => setIsSideBarOpen(false)}
                to="contact"
                smooth={true}
                duration={1500}
                offset={-80}
              >
                Contact
              </Link>
            ) : (
              <button onClick={() => handleScroll("contact")}>Contact</button>
            )}
          </li>
          <a href="https://staging.mdarasa.com/users/register-tenancy">
            <button className="px-6 py-2 bg-primaryRed text-white rounded-full hover:bg-secondaryRed">
              Sign up
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
