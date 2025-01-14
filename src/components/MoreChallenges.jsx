import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/effect-cube";

const MoreChallenges = () => {
  // Create refs for navigation
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className=" ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, EffectCube]}
        spaceBetween={20}
        slidesPerView={1} // Default to one slide per view for mobile
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }, // Show more slides as screen width increases
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        // autoplay={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "challenges-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="py-14"
        // effect={"cube"}
      >
        {challenges.map((challenge) => (
          <SwiperSlide key={challenge.id} className="   ">
            {/* <div className=" bg-white text-black p-5 rounded-xl h-full overflow-y-auto max-h-[300px] md:max-h-[500px]"> */}
            {/* <div className=" bg-white text-black p-5 rounded-xl max-h-[300px] md:h-[600px]"> */}
            <div
              className="bg-white text-black p-5 rounded-xl h-[400px] flex flex-col justify-between overflow-hidden"
              style={{
                height: "400px", // Fixed height
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className="text-lg py-2 font-bold">{challenge.title}</p>
              <div className="flex-grow space-y-2 overflow-y-auto ">
                <p className="text-textColor">
                  <span className="font-semibold">Challenge:</span>{" "}
                  {challenge.challenge}
                </p>
                <p className="text-textColor">
                  <span className="font-semibold">Solution:</span>{" "}
                  {challenge.solution}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          ref={navigationPrevRef}
          className="absolute  left-4 top-1/2 -translate-y-1/2 z-10 bg-secondaryBlue hover:bg-primaryBlue p-2 rounded-full shadow-lg transition-all duration-200 md:block hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-white "
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
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-secondaryBlue hover:bg-primaryBlue p-2 rounded-full shadow-lg transition-all duration-200 md:block hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};

export default MoreChallenges;

const challenges = [
  {
    id: 1,
    title: "Access to Quality Education.",
    challenge:
      "Many students, particularly in rural or underserved areas, lack access to quality educational resources and experienced educators.",
    solution:
      "iShule provides a digital platform that enables institutions to reach students regardless of location, offering quality courses and learning materials online.",
  },
  {
    id: 2,
    title: "High Costs of Software Development.",
    challenge:
      "Developing custom e-learning software can be prohibitively expensive for institutions, diverting funds from other critical educational needs.",
    solution:
      "By offering a ready-to-use, customizable platform, iShule eliminates the need for expensive development, allowing institutions to focus their budgets on enhancing learning experiences.",
  },
  {
    id: 3,
    title: "Inadequate Infrastructure.",
    challenge:
      "Many educational institutions in Africa struggle with limited infrastructure, including unreliable internet access and outdated technology.",
    solution:
      "iShule is designed to work effectively even in low-bandwidth environments, ensuring that institutions can provide online learning without requiring extensive technological upgrades.",
  },
  {
    id: 4,
    title: "Engagement & Retention Issues.",
    challenge:
      "Traditional educational methods often fail to engage students, leading to low retention rates and poor academic performance.",
    solution:
      "iShule incorporates interactive tools, multimedia content, and collaborative features that promote engagement and enhance the learning experience, leading to improved student retention and success.",
  },
  {
    id: 5,
    title: "Lack of Skilled Educators.",
    challenge:
      "There is a shortage of qualified educators in many regions, making it difficult for institutions to deliver high-quality education.",
    solution:
      "iShule enables institutions to leverage online courses and materials from expert educators, providing students access to quality instruction that may not be locally available.",
  },
  {
    id: 6,
    title: "Limited Course Offerings.",
    challenge:
      " Many institutions have a narrow range of courses due to resource constraints, limiting students’ choices and career opportunities.",
    solution:
      "iShule allows institutions to expand their course offerings quickly, enabling them to provide diverse educational programs tailored to the needs of their communities and the job market.",
  },
  {
    id: 7,
    title: "Administrative Burdens.",
    challenge:
      "Managing student information, course materials, and assessments can be cumbersome and time-consuming for institutions.",
    solution:
      "iShule streamlines administrative processes through integrated management tools, allowing institutions to efficiently track student progress, manage courses, and generate reports.",
  },
  {
    id: 8,
    title: "Inclusivity and Accessibility Challenges.",
    challenge:
      "Students with disabilities or specific learning needs often face barriers in traditional educational settings.",
    solution:
      "iShule is designed with accessibility in mind, ensuring that all students, regardless of their individual needs, can engage with educational content effectively.",
  },
  {
    id: 9,
    title: "Global Competitiveness.",
    challenge:
      " African institutions often lag in adopting innovative educational practices, affecting their competitiveness on a global scale.",
    solution:
      "By providing advanced e-learning solutions, iShule helps institutions modernize their educational offerings, making them more competitive and attractive to both local and international students.",
  },
];
