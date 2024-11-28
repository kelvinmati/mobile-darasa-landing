import React from "react";
import logoWhite from "../assets/icons/logo-white.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      id="footer"
      className="w-mobile md:w-containerWidth mx-auto py-16 text-white relative"
    >
      <div className="grid md:grid-cols-3 gap-10 pb-10">
        <div className="space-y-2">
          <img className="h-20" src={logoWhite} alt="" />
          <p>
            Enhancing educational experience by delivering an easy-to-use,
            scalable eLearning solution tailored to the unique needs of Kenyan
            learning institutions.
          </p>
          {/* <div className="flex space-x-3 items-center">
        <ion-icon size="large" name="logo-facebook"></ion-icon>
        <ion-icon size="large" name="logo-linkedin"></ion-icon>
        <ion-icon size="large" name="logo-youtube"></ion-icon>
        <ion-icon size="large" name="logo-twitter"></ion-icon>
      </div> */}
        </div>
        <div className="space-y-2">
          <div>
            <h2 className="text-primaryRed">Head Office</h2>

            <div className="flex items-center space-x-2">
              <ion-icon name="location-outline"></ion-icon>
              <p>Aqua Plaza, Murang'a Road, Nairobi</p>
            </div>
          </div>
          <div>
            <h2 className="text-primaryRed">Contact</h2>
            <div className="flex items-center space-x-2">
              <ion-icon name="call-outline"></ion-icon>
              <p>+254 708 068 851</p>
            </div>
            <div className="flex items-center space-x-2">
              <ion-icon name="mail-outline"></ion-icon>
              <p>support@mobiledarasa.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <ion-icon name="globe-outline"></ion-icon>
              <p>www.mobiledarasa.com</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-primaryRed">Quick links</h2>
          <ul>
            {/* <li className="hover:decoration-solid decoration-white">Home</li> */}
            <li className="hover:underline decoration-white cursor-pointer">
              Home
            </li>
            <li className="hover:underline decoration-white cursor-pointer">
              About us
            </li>
            <li className="hover:underline decoration-white cursor-pointer">
              Features
            </li>
            <li className="hover:underline decoration-white cursor-pointer">
              Pricing
            </li>
            <li className="hover:underline decoration-white cursor-pointer">
              Terms & conditions
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center pt-2">
        {" "}
        &copy; {new Date().getFullYear()} Mobile Darasa. All rights reserved.
      </p>

      <div className=" absolute right-0 md:top-1/2 bottom-36 ">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-80}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10  p-1 bg-primaryRed  text-white rounded-md cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
