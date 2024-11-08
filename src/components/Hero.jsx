// import React from "react";
import heroImg from "../assets/images/monitor-removebg-preview.png";
import icon1 from "../assets/images/online-education.png";
import icon2 from "../assets/images/webinar.png";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";
// const Hero = () => {
//   return (
//     <div>
//       <div className="w-mobile md:w-containerWidth mx-auto bg-primaryBlue rounded-3xl  p-8  md:gap-2 gap-20 grid md:grid-cols-2  items-center">
// <div className="space-y-10">
//   <div>
//     <p className="text-5xl font-bold text-white ">
//       Your Gateway to Digital Learning Success
//     </p>
//     <p className="text-md text-gray-300 py-2">
//       {/* A good <span>education </span> is foundation for better{" "} */}
//       One Platform, Infinite Learning Possibilities.
//     </p>
//   </div>
//   <button className="px-6 py-2 bg-primaryRed text-white rounded-md hover:bg-secondaryRed flex items-center space-x-1">
//     <span>Get started</span>{" "}
//     <span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="size-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//         />
//       </svg>
//     </span>
//   </button>

//   <div className="grid grid-cols-3 gap-2 bg-white p-5 rounded-lg">
//     <div className="">
//       <p className="text-primaryRed text-2xl">200+</p>
//       <p className="text-textColor">Universities</p>
//     </div>
//     <div>
//       <p className="text-primaryRed text-2xl">1,000+</p>
//       <p className="text-textColor">Colleges</p>
//     </div>
//     <div>
//       <p className="text-primaryRed text-2xl">5,000+</p>
//       <p className="text-textColor">Students</p>
//     </div>
//   </div>
// </div>

//         {/* <div>
//           <img className="rotate-12" src={arbitrage_mockup} alt="" />
//         </div> */}

//         <div>
//           <div className="carousel w-full h-full">
//             <div id="item1" className="carousel-item w-full h-full">
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//                 className="w-full h-full"
//               />
//             </div>
//             <div id="item2" className="carousel-item w-full">
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//                 className="w-full"
//               />
//             </div>
//             <div id="item3" className="carousel-item w-full">
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//                 className="w-full"
//               />
//             </div>
//             <div id="item4" className="carousel-item w-full">
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//                 className="w-full"
//               />
//             </div>
//           </div>
//           <div className="flex w-full justify-center gap-2 py-2">
//             <a
//               href="#item1"
//               className="w-2.5 h-2.5 bg-gray-200 rounded-full"
//             ></a>
//             <a
//               href="#item2"
//               className="w-2.5 h-2.5 bg-gray-200 rounded-full"
//             ></a>{" "}
//             <a
//               href="#item3"
//               className="w-2.5 h-2.5 bg-gray-200 rounded-full"
//             ></a>{" "}
//             <a
//               href="#item4"
//               className="w-2.5 h-2.5 bg-gray-200 rounded-full"
//             ></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import footer_img from "../assets/images/footer-img.jpg";
import TypingAnimation from "./Typing";

const Hero = () => {
  const images = [kaila_mockup, arbitrage_mockup, heroImg, icon1];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);
  // let res = TypingAnimation("hello");
  // console.log("res is", res);
  return (
    <div
      className="w-mobile md:w-containerWidth mx-auto bg-blend-multiply bg-cover bg-primaryBlue rounded-3xl py-16 px-8 md:gap-4 gap-20 grid md:grid-cols-2 items-center md:h-[550px]"
      style={{
        backgroundImage: `url(${footer_img})`,
      }}
    >
      <div className="space-y-12">
        <div>
          <p className="text-5xl font-bold text-white ">
            Your Gateway to Digital Learning Success
          </p>
          <p className="text-md text-gray-300 py-2">
            {/* A good <span>education </span> is foundation for better{" "} */}
            One Platform, Infinite Learning
          </p>
        </div>
        <div className="flex space-x-3">
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

          {/* <button className="text-primaryRed px-6 py-2 border rounded-md hover:bg-gray-50">
            Watch video
          </button> */}
        </div>

        {/* <div className="grid grid-cols-3 gap-2 bg-white p-5 rounded-lg">
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
        </div> */}

        <div className="grid grid-cols-3 gap-2 text-white">
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 bg-white rounded-full p-2"
              src={icon1}
              alt=""
            />
            <div>
              <p className="text-primaryRed text-lg">200+</p>
              <p className="">Universities</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 bg-white rounded-full p-2"
              src={icon2}
              alt=""
            />
            <div>
              <p className="text-primaryRed text-lg">1000+</p>
              <p className="">Students</p>
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 bg-white rounded-full p-2"
              src={icon1}
              alt=""
            />
            <div>
              <p className="text-primaryRed text-lg">100+</p>
              <p className="">Colleges</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full relative overflow-hidden rounded-md">
        <div className="carousel w-full h-full relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
