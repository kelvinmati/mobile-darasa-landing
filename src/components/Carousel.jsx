import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";

import heroImg from "../assets/images/monitor-removebg-preview.png";
import icon1 from "../assets/images/online-education.png";
import icon2 from "../assets/images/webinar.png";
import arbitrage_mockup from "../assets/images/arbitrage-mockup.png";
import kaila_mockup from "../assets/images/kaila-mockup.png";

const Carousel = () => {
  // Create refs for navigation
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const images = [kaila_mockup, arbitrage_mockup, heroImg, icon1];
  return (
    <div className="h-full w-full relative ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, EffectCube]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        autoplay={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        effect={"cube"}
        className="!absolute inset-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="h-full w-full flex items-center justify-center">
              <img
                className="max-h-full w-full object-contain"
                src={img}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}

        {/* <button
          ref={navigationPrevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-primaryRed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          ref={navigationNextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-primaryRed"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button> */}
      </Swiper>
    </div>
  );
};
export default Carousel;

const images = [1, 2, 3];
