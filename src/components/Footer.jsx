import React from "react";
import profile from "../assets/images/profile.png";
import newsletter_img from "../assets/images/newsletter.jpeg";
import logoWhite from "../assets/icons/logo-white.png";
import footer_img from "../assets/images/footer-img.jpg";

const Footer = () => {
  return (
    <div
      //   className=" h-full bg-gradient-to-b from-primaryBlue   via-secondaryBlue  to-blue-700 py-5 px-0.5 "
      className="h-full bg-primaryBlue bg-blend-multiply bg-cover py-5 px-0.5 "
      style={{
        backgroundImage: `url(${footer_img})`,
      }}
    >
      {/* reviews */}
      <div className="w-mobile md:w-containerWidth mx-auto py-5">
        <h2 className="text-lg text-white">OUR CLIENTS REVIEW.</h2>
        <p className="text-primaryRed  pb-7">
          Hear from those who have experienced our commitment to excellence
          firsthand.
        </p>
        <div className="grid md:grid-cols-3 gap-5 text-black ">
          {reviews.map((review) => {
            const { profile_img, name, title, institution } = review;
            return (
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="flex space-x-2 ">
                  <div className="p-0.5 rounded-full bg-primaryRed">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={profile}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" text-lg text-primaryRed">John Doe</p>
                    <p className="text-sm">Lecturer (UON)</p>
                    <div className="flex space-x-1 text-yellow-300">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus architecto minus, voluptatibus corrupti doloribus
                  laudantium.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* newsletter */}
      <div className="bg-white  rounded-tl-[80px] rounded-br-[80px] mt-20 p-20">
        <div
          className="w-1/2  mx-auto  h-full bg-secondaryRed rounded-lg p-10  flex flex-col  items-center  justify-center bg-blend-multiply"
          style={{
            backgroundImage: `url(${newsletter_img})`,
          }}
        >
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold ">Subscribe to our newsletter</h2>
            <p className="">
              Subscribe us to get in touch and to enjoy discounts,promos and
              much more!
            </p>
            <div className="py-10  flex">
              <input
                type="text"
                placeholder="Enter you email here.."
                className="px-3 py-2 w-mobile border border-secondaryBlue outline-none rounded-s-lg text-black"
              />
              <button className="px-3 py-2 bg-primaryBlue text-white rounded-e-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}

      <div className="w-mobile md:w-containerWidth mx-auto py-16 text-white ">
        <div className="grid grid-cols-3 gap-10 pb-10">
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
              <li>Home</li>
              <li>About us</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center pt-2">
          {" "}
          &copy; {new Date().getFullYear()} Mobile Darasa. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

const reviews = [1, 2, 3];
