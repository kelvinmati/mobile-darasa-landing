import React from "react";
import { useState } from "react";

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className=" text-white ">
      <div className="">
        <div className="pb-10">
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, officia.
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
                <p>Effortless Sign-Up & Onboarding</p>
              </div>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 2 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(2)}
            >
              <p>Scalability and Flexibility for Growtht</p>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 3 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(3)}
            >
              <p>Dedicated Success Manager for Ongoing Support</p>
            </div>
            <div
              className={`cursor-pointer  ${
                activeTab === 4 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(4)}
            >
              <p>Simple and Transparent Pricing</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 5 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(5)}
            >
              <p>Enhanced Data Security and Compliance</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 6 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(6)}
            >
              <p>Comprehensive Integration Options</p>
            </div>{" "}
            <div
              className={`cursor-pointer  ${
                activeTab === 7 ? "text-primaryBlue" : ""
              }`}
              onClick={() => setActiveTab(7)}
            >
              <p>Engaging User Experience and Accessibility</p>
            </div>{" "}
          </div>
          <div className="col-span-2 ">
            {reasons.map((reason) => {
              const { id, title, contents } = reason;
              console.log("reason is", reason);

              return (
                activeTab === id && (
                  <div key={id} className="space-y-2  ">
                    <h3 className="text-lg font-bold">{title}</h3>
                    {contents.map((content) => (
                      <div>
                        <div className="flex space-x-2 items-center text-black">
                          <ion-icon name="star"></ion-icon>
                          <p>{content.sub_title}</p>
                        </div>
                        <p className="text-gray-200">{content.text}</p>
                      </div>
                    ))}
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

export default WhyUs;

const reasons = [
  {
    id: 1,
    title: "Effortless Sign-Up & Onboarding.",
    contents: [
      {
        sub_title: "Quick Start",
        text: "We understand that time is critical, and our onboarding process is designed to be as quick and smooth as possible. Institutions can get set up and start reaching students in just a few steps. Our Mobile Darasa team handles the technical setup and ensures everything is customized to your branding requirements.",
      },
      {
        sub_title: "Personalized Training",
        text: "To ensure your staff are comfortable and confident using the platform, Mobile Darasa provides personalized training sessions tailored to your institution’s specific needs, covering everything from course uploads to student management.",
      },
    ],
  },
  {
    id: 2,
    title: "Scalability and Flexibility for Growth.",
    contents: [
      {
        sub_title: "No Student or Course Limitations",
        text: "Mobile Darasa’s infrastructure is built to support institutions of all sizes. Whether you’re onboarding hundreds or thousands of students, the platform can scale effortlessly to meet increasing demands without any restrictions.",
      },
      {
        sub_title: "Adaptive Course Management",
        text: "As your curriculum expands, so does your capacity to add new courses, departments, or programs. Mobile Darasa grows with you, adapting to evolving needs and ensuring that you always have the resources to support your academic goals.",
      },
    ],
  },
  {
    id: 3,
    title: "Dedicated Success Manager for Ongoing Support.",
    contents: [
      {
        sub_title: "Personal Point of Contact",
        text: "Each institution is assigned a dedicated success manager who understands your goals and works closely with you to ensure a smooth, successful experience with Mobile Darasa.",
      },
      {
        sub_title: "Proactive Support",
        text: "Beyond technical troubleshooting, your success manager will provide ongoing insights into best practices, helping your institution make the most of the platform’s features to drive student engagement and satisfaction.",
      },
    ],
  },
  {
    id: 4,
    title: "Simple and Transparent Pricing.",
    contents: [
      {
        sub_title: "No Hidden Fees",
        text: "Our pricing structure is straightforward, with no surprise fees for support or customization. Mobile Darasa’s goal is to provide value without burdening institutions with unexpected costs.",
      },
      {
        sub_title: "Flexible Packages",
        text: "Choose a package that aligns with your institutions’ needs and growth potential. Our flexible pricing scales with your growth, so you only pay for what you need, when you need it.",
      },
    ],
  },
  {
    id: 5,
    title: "Enhanced Data Security and Compliance.",
    contents: [
      {
        sub_title: "Protecting Your Data",
        text: "Mobile Darasa uses industry-standard encryption and strict access controls to safeguard student and institution data.",
      },
      {
        sub_title: "Compliance Assurance",
        text: "Our platform is fully compliant with data protection regulations, giving institutions peace of mind regarding data privacy and legal obligations. With Mobile Darasa, your data is always secure, ensuring a trustworthy environment for both staff and students.",
      },
    ],
  },
  {
    id: 6,
    title: "Comprehensive Integration Options",
    contents: [
      {
        sub_title: "Seamless Integration with Existing Tools",
        text: "Seamless Integration with Existing Tools: Mobile Darasa is designed to work well with a range of popular education and administrative tools, so institutions can continue using systems they’re comfortable with. This includes options to integrate with LMS, CRM, or data reporting tools.",
      },
      {
        sub_title: "Customizable Integration Solutions",
        text: "Customizable Integration Solutions: If you have unique requirements, our team is prepared to discuss tailored integration options to ensure that Mobile Darasa aligns seamlessly with your institution’s ecosystem.",
      },
    ],
  },
  {
    id: 7,
    title: "Engaging User Experience and Accessibility.",
    contents: [
      {
        sub_title: "User-Friendly Interface",
        text: "User-Friendly Interface: Mobile Darasa prioritizes an intuitive, easy-to-navigate interface that caters to both tech-savvy users and those new to online learning platforms, making it ideal for a diverse student body.",
      },
      {
        sub_title: "Accessible Learning for All",
        text: "The platform is designed to be accessible to users with different learning abilities, ensuring an inclusive learning environment. Mobile Darasa’s commitment to accessibility helps institutions cater to a broader range of students, enhancing reach and inclusivity.",
      },
    ],
  },
];
