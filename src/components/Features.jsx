import React from "react";
import content_lib from "../assets/images/content-lib.png";
import featuresImg from "../assets/images/grey-lady.png";
const Features = () => {
  return (
    <div id="features" className=" bg-primaryRed">
      <div className=" w-mobile md:w-containerWidth mx-auto grid grid-cols-2 ">
        <div>
          <img className="max-h-full" src={featuresImg} alt="" />
        </div>
        <div className="text-white py-4 space-y-5">
          <div className="flex space-x-5 ">
            <h2 className="text-3xl font-bold">
              Discover The Distinct advantage of our platform
            </h2>
            <div>
              <button className=" rounded text-white px-6 py-2 border hover:bg-white hover:text-black transition-all  ">
                More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-primaryRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>

              <p className="text-black py-1.5 font-medium">
                Branded & Customised Learning Environment.
              </p>
              <p className="text-textColor">
                Each institution’s Mobile Darasa instance is tailored to reflect
                its unique branding elements logo,
              </p>
            </div>
            <div className="bg-white rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-primaryRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <p className="text-black py-1.5 font-medium">
                Secure, Role-Based Access.
              </p>
              <p className="text-textColor">
                We offer access points for students and instructors, each with
                tailored features.
              </p>
            </div>{" "}
            <div className="bg-white rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-primaryRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>

              <p className="text-black py-1.5 font-medium">
                Ongoing Support and Maintenance.
              </p>
              <p className="text-textColor">
                Mobile Darasa provides continuous support, including onboarding
                training, troubleshooting, and system updates
              </p>
            </div>{" "}
            <div className="bg-white rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-primaryRed"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>

              <p className="text-black py-1.5 font-medium">
                Seamless Course Management and Content Delivery.
              </p>
              <p className="text-textColor">
                Institutions can easily upload diverse educational content,
                including videos, documents, quizzes, and assignments.
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center pt-2">
            <button className="text-white px-6 py-2 border hover:bg-white hover:text-black rounded-full transition-all ">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;

const features = [1, 2, 3, 4, 5, 6];
