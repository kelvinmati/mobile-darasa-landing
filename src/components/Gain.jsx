import React from "react";
import about_hero from "../assets/images/about-hero.jpg";
const Gain = () => {
  return (
    <div className="py-5">
      <div className="w-mobile md:w-containerWidth mx-auto grid md:grid-cols-2 bg-primaryRed rounded-3xl">
        <div className="">
          <img
            className="h-full w-full object-cover rounded-s-3xl"
            src={about_hero}
            alt=""
          />
        </div>
        <div className="p-7 text-white">
          <p className=" text-2xl pb-3 font-bold">Benefits of using iShule;</p>
          <ul className="space-y-3">
            <li>
              <span className=" text-black"> Broad Access and Reach:</span> With
              iShule, institutions can easily connect with students beyond
              geographical limits, offering flexible online learning options
              that attract a wider audience and promote continuous learning.
            </li>
            <li>
              <span className=" text-black"> Revenue Expansion:</span> By
              broadening student access, iShule unlocks new revenue
              opportunities. Institutions can capitalize on the growing demand
              for online courses, turning digital learning into a reliable
              revenue source that scales with enrollment.
            </li>
            <li>
              <span className=" text-black">Cost Efficiency:</span> Our
              ready-to-use platform significantly reduces the financial burden
              associated with software development, enabling institutions to
              launch digital courses at a fraction of the cost and without the
              maintenance hassles of custom-built systems.
            </li>{" "}
            <li>
              <span className=" text-black">
                {" "}
                Enhanced Institutional Image:
              </span>{" "}
              Embracing iShule enhances an institutions’ brand, showcasing it as
              a forward-thinking, tech-enabled leader in education that provides
              flexible, accessible solutions for today’s learners.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gain;
