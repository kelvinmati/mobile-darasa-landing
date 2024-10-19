import React from "react";
import logoBlue from "../assets/icons/logo-blue.png";
const Navbar = () => {
  return (
    <div className="py-3  ">
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
            <li className="flex items-center space-x-2 cursor-pointer hover:text-secondaryBlue text-textColor">
              <span>Features</span>{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </li>
            <li className="cursor-pointer hover:text-secondaryBlue text-textColor">
              Pricing
            </li>
            <li className="cursor-pointer hover:text-secondaryBlue text-textColor">
              Contact
            </li>
          </ul>
        </div>
        <div className="space-x-5">
          <button>Sign up</button>
          <button className="px-6 py-2 bg-primaryBlue text-white rounded-md hover:bg-secondaryBlue">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
