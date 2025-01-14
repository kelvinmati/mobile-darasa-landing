import React from "react";
import about_hero from "../assets/images/about-hero.jpg";
import vision from "../assets/icons/vision.png";
import mission from "../assets/icons/mission.png";
import Footer from "./Footer";
import Team from "./Team";

const MoreAbout = () => {
  return (
    <>
      <div
        className="bg-secondaryBlue text-white h-[350px] bg-no-repeat bg-cover bg-center bg-blend-multiply"
        style={{
          backgroundImage: `url(${about_hero})`,
        }}
      >
        <div className=" w-mobile md:w-containerWidth mx-auto flex flex-col justify-center  h-full">
          <div className="breadcrumbs max-w-xs text-sm">
            <ul>
              <li>Home</li>
              <li>About us</li>
            </ul>
          </div>
          <p className="text-primaryRed"> Know more about iShule. </p>
        </div>
      </div>
      <div className="w-mobile md:w-containerWidth mx-auto py-10">
        <div className=" grid md:grid-cols-2 gap-5 ">
          <div>
            <img className="rounded-md" src={about_hero} alt="" />
          </div>
          <div className="space-y-4">
            <p>
              iShule operates as a white-label digital learning platform
              designed to support institutions in delivering online education
              efficiently and at scale.
            </p>
            <p>
              iShule is an innovative e-learning platform dedicated to
              transforming education across Africa. By providing customizable
              and accessible digital learning solutions, iShule empowers
              educational institutions to enhance their course offerings and
              reach a diverse range of learners.
            </p>
            <p>
              With a focus on user-friendly design, comprehensive support, and a
              commitment to inclusivity, iShule enables institutions to overcome
              traditional barriers to education, such as high development costs
              and limited access to quality resources. Our mission is to foster
              academic excellence and engagement, creating opportunities for
              students and institutions alike in the digital age.
            </p>
            <p>
              iShule not only streamlines course creation and management but
              also incorporates analytics and reporting features that enable
              institutions to track student progress, engagement, and outcomes
              effectively.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl pt-2">IMPACT</h2>
          <p className="text-primaryRed py-1">
            iShule is committed to transforming the educational landscape in
            Africa by:
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 ">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>
                Expanding access to quality education for students across
                various regions, particularly in underserved areas.
              </p>
            </div>
            <div className="flex items-center space-x-2 ">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>
                Reducing the financial burden on institutions by providing a
                cost-effective alternative to developing proprietary e-learning
                solutions.
              </p>
            </div>{" "}
            <div className="flex items-center space-x-2 ">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <p>
                Promoting inclusivity and engagement in learning, ensuring that
                all students have the opportunity to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mission and vison */}

      <div className="grid md:grid-cols-2 text-white p-10 ">
        <div className="bg-secondaryRed  py-12 md:pl-6 ">
          <div className="w-mobile md:w-containerWidth mx-auto flex flex-col items-center">
            <img className="h-12 w-12" src={vision} alt="" />
            <h2 className="py-2">VISION</h2>
            <p>
              To empower every African institution with accessible, world-class
              digital learning solutions, transforming education across the
              continent and creating opportunities for all.
            </p>
          </div>
        </div>
        <div className="bg-secondaryBlue  py-12 md:pl-6 ">
          <div className="w-mobile md:w-containerWidth mx-auto flex flex-col items-center">
            <img className="h-12 w-12" src={mission} alt="" />
            <h2 className="py-2">MISSION</h2>
            <p>
              To empower every African institution with accessible, world-class
              digital learning solutions, transforming education across the
              continent and creating opportunities for all.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <div className="bg-secondaryBlue">
        <Footer />
      </div>
    </>
  );
};

export default MoreAbout;
