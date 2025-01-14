import React from "react";
import challenges from "../assets/images/challenges.png";
import MoreChallenges from "./MoreChallenges";
const Challenges = () => {
  return (
    <div className="py-10">
      <div className=" w-mobile md:w-containerWidth mx-auto ">
        <h1 className="text-center text-lg pb-5 uppercase">
          Explore Challenges That iShule Addresses
        </h1>
        <div className="grid md:grid-cols-2 text-white ">
          <div className="p-10 bg-secondaryBlue rounded-3xl space-y-5 flex flex-col  justify-center">
            <h2 className="text-2xl font-bold">
              These challenges highlight the significant barriers to education
              that iShule
            </h2>
            <div>
              <p>Access to Quality Education.</p>
              <p className="text-gray-300">
                <span>Challenge:</span> Many students, particularly in rural or
                underserved areas, lack access to quality educational resources
                and experienced educators.
              </p>
              <p className="text-gray-300 pt-3">
                <span>Solution:</span> iShule provides a digital platform that
                enables institutions to reach students regardless of location,
                offering quality courses and learning materials online.
              </p>
            </div>
            <div>
              <p>High Costs of Software Development.</p>
              <p className="text-gray-300">
                <span>Challenge:</span> Developing custom e-learning software
                can be prohibitively expensive for institutions, diverting funds
                from other critical educational needs.
              </p>
              <p className="text-gray-300 pt-3">
                <span>Solution:</span> By offering a ready-to-use, customizable
                platform, iShule eliminates the need for expensive development,
                allowing institutions to focus their budgets on enhancing
                learning experiences.
              </p>
            </div>

            <p className="text-primaryRed">More challenges are listed below.</p>
          </div>
          <div>
            <img src={challenges} alt="" />
          </div>
        </div>
        <MoreChallenges />
      </div>
    </div>
  );
};

export default Challenges;
