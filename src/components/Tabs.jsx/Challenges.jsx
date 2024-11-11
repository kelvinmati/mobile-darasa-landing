import React from "react";
import { useState } from "react";

const Challenges = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className=" text-white ">
      <div className="">
        <div className="pb-10">
          <p className="text-gray-100">
            These challenges highlight the significant barriers to education
            that Mobile Darasa is designed to overcome, positioning it as a
            vital solution for institutions striving to improve educational
            outcomes in Africa.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="space-y-3  border-r-2">
            <div>
              <div
                className={`cursor-pointer   ${
                  activeTab === 1 ? "text-primaryBlue" : ""
                }`}
                onClick={() => setActiveTab(1)}
              >
                <p>Access to Quality Education</p>
              </div>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 2 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(2)}
            >
              <p>High Costs of Software Development</p>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 3 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(3)}
            >
              <p>Inadequate Infrastructure</p>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 4 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(4)}
            >
              <p>Engagement & Retention Issues</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 5 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(5)}
            >
              <p>Lack of Skilled Educators</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 6 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(6)}
            >
              <p>Limited Course Offerings</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 7 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(7)}
            >
              <p>Administrative Burdens</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 8 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(8)}
            >
              <p>Inclusivity and Accessibility Challenges</p>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 9 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(9)}
            >
              <p>Global Competitiveness</p>
            </div>{" "}
          </div>
          <div className="col-span-2 ">
            {challenges.map((challengee) => {
              const { id, title, challenge, solution } = challengee;

              return (
                activeTab === id && (
                  <div key={id} className="space-y-2  ">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-gray-200">
                      {" "}
                      <span className="text-black">Challenge:</span> {challenge}
                    </p>
                    <p className="text-gray-200">
                      {" "}
                      <span className="text-black">Solution:</span> {solution}
                    </p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;

const challenges = [
  {
    id: 1,
    title: "Access to Quality Education.",
    challenge:
      "Many students, particularly in rural or underserved areas, lack access to quality educational resources and experienced educators.",
    solution:
      "Mobile Darasa provides a digital platform that enables institutions to reach students regardless of location, offering quality courses and learning materials online.",
  },
  {
    id: 2,
    title: "High Costs of Software Development.",
    challenge:
      "Developing custom e-learning software can be prohibitively expensive for institutions, diverting funds from other critical educational needs.",
    solution:
      "By offering a ready-to-use, customizable platform, Mobile Darasa eliminates the need for expensive development, allowing institutions to focus their budgets on enhancing learning experiences.",
  },
  {
    id: 3,
    title: "Inadequate Infrastructure.",
    challenge:
      "Many educational institutions in Africa struggle with limited infrastructure, including unreliable internet access and outdated technology.",
    solution:
      "Mobile Darasa is designed to work effectively even in low-bandwidth environments, ensuring that institutions can provide online learning without requiring extensive technological upgrades.",
  },
  {
    id: 4,
    title: "Engagement & Retention Issues.",
    challenge:
      "Traditional educational methods often fail to engage students, leading to low retention rates and poor academic performance.",
    solution:
      "Mobile Darasa incorporates interactive tools, multimedia content, and collaborative features that promote engagement and enhance the learning experience, leading to improved student retention and success.",
  },
  {
    id: 5,
    title: "Lack of Skilled Educators.",
    challenge:
      "There is a shortage of qualified educators in many regions, making it difficult for institutions to deliver high-quality education.",
    solution:
      "Mobile Darasa enables institutions to leverage online courses and materials from expert educators, providing students access to quality instruction that may not be locally available.",
  },
  {
    id: 6,
    title: "Limited Course Offerings.",
    challenge:
      " Many institutions have a narrow range of courses due to resource constraints, limiting students’ choices and career opportunities.",
    solution:
      "Mobile Darasa allows institutions to expand their course offerings quickly, enabling them to provide diverse educational programs tailored to the needs of their communities and the job market.",
  },
  {
    id: 7,
    title: "Administrative Burdens.",
    challenge:
      "Managing student information, course materials, and assessments can be cumbersome and time-consuming for institutions.",
    solution:
      "Mobile Darasa streamlines administrative processes through integrated management tools, allowing institutions to efficiently track student progress, manage courses, and generate reports.",
  },
  {
    id: 8,
    title: "Inclusivity and Accessibility Challenges.",
    challenge:
      "Students with disabilities or specific learning needs often face barriers in traditional educational settings.",
    solution:
      "Mobile Darasa is designed with accessibility in mind, ensuring that all students, regardless of their individual needs, can engage with educational content effectively.",
  },
  {
    id: 9,
    title: "Global Competitiveness.",
    challenge:
      " African institutions often lag in adopting innovative educational practices, affecting their competitiveness on a global scale.",
    solution:
      "By providing advanced e-learning solutions, Mobile Darasa helps institutions modernize their educational offerings, making them more competitive and attractive to both local and international students.",
  },
];
