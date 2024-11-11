import React from "react";
import offers_img from "../assets/images/offers.jpg";
import mobile_friendly from "../assets/icons/mobile-friendly.png";
import scalability from "../assets/icons/sacalability.png";
import customized from "../assets/icons/customized-elearning.png";
import course_mgt from "../assets/images/course-mgt.png";
import accessibilty from "../assets/icons/accesibility.png";
import support from "../assets/icons/support.png";
import analytics from "../assets/images/analytics.png";

const Offers = () => {
  return (
    <div className="py-20">
      <div className="w-mobile md:w-containerWidth mx-auto grid grid-cols-2 gap-10">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl pb-2"> WHAT MOBILE DARASA OFFERS.</h2>
            <p className="text-primaryRed">
              Comprehensive learning solutions that transform talent into your
              competitive advantage.
            </p>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={customized} alt="" />
            <div>
              <h2 className="text-lg font-bold">
                Customizable Learning Environment.
              </h2>
              <p className="text-textColor">
                Each institution can personalize its Mobile Darasa platform with
                its branding, including logos and color schemes, ensuring a
                cohesive identity for students and faculty.
              </p>
            </div>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={course_mgt} alt="" />
            <div>
              <h2 className="text-lg font-bold">
                Comprehensive Course Management.
              </h2>
              <p className="text-textColor">
                Institutions can easily create, upload, and manage a wide range
                of courses, including multimedia content, assessments, and
                interactive modules that enhance student engagement.
              </p>
            </div>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={accessibilty} alt="" />
            <div>
              <h2 className="text-lg font-bold">
                Accessibility and Inclusivity.
              </h2>
              <p className="text-textColor">
                Mobile Darasa is designed to be accessible on various devices,
                including smartphones and tablets, catering to the needs of all
                learners, including those in remote areas with limited internet
                connectivity.
              </p>
            </div>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={mobile_friendly} alt="" />
            <div>
              <h2 className="text-lg font-bold">User-Friendly Interface.</h2>
              <p className="text-textColor">
                The platform features an intuitive interface for both students
                and educators, making it easy to navigate and interact with
                course materials and features.
              </p>
            </div>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={support} alt="" />
            <div>
              <h2 className="text-lg font-bold">Ongoing Support & Training.</h2>
              <p className="text-textColor">
                Mobile Darasa provides comprehensive onboarding, training, and
                ongoing support to institutions, ensuring they can effectively
                utilize the platform to achieve their educational goals.
              </p>
            </div>
          </div>{" "}
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={analytics} alt="" />
            <div>
              <h2 className="text-lg font-bold">
                Analytics and Reporting Tools.
              </h2>
              <p className="text-textColor">
                Institutions benefit from built-in analytics tools that track
                student performance and engagement, enabling data-driven
                decision-making to enhance educational outcomes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="rounded-lg h-full object-cover"
            src={offers_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
