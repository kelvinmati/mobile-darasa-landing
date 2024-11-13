import React from "react";
import faq_img from "../assets/images/faq.jpg";
import Footer from "./Footer";
const Faq = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <div
        className=" text-white h-[350px] bg-no-repeat bg-contain bg-center bg-blend-multiply"
        style={{
          backgroundImage: `url(${faq_img})`,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className=" w-mobile md:w-containerWidth mx-auto flex flex-col justify-center  h-full">
          <div className="breadcrumbs max-w-xs text-sm">
            <ul>
              <li>Home</li>
              <li>FAQs</li>
            </ul>
          </div>
          <p className="text-primaryRed">Frequently Asked Questions.</p>
        </div>
      </div>
      <div className="w-mobile md:w-containerWidth mx-auto space-y-3 py-10">
        {faqs.map((faq) => {
          const { quiz, answer } = faq;
          return (
            <div className="collapse collapse-arrow bg-white shadow-lg">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium text-primaryBlue">
                {quiz}
              </div>
              <div className="collapse-content">
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-secondaryBlue">
        <Footer />
      </div>
    </div>
  );
};

export default Faq;

const faqs = [
  {
    quiz: "Can Mobile Darasa be completely branded to our institution without any visible mention of your company?",
    answer:
      "Yes. Mobile Darasa will fully customize the platform to reflect your institution’s identity, from logos to theme colors, ensuring a seamless experience where our brand is not visible to end-users.",
  },
  {
    quiz: "What if our institution does not have a website?",
    answer:
      "No problem! We can create a branded landing page specifically for your institution. This page will serve as the portal where students can learn about your offerings and log in to their courses.",
  },
  {
    quiz: "How is data privacy and security handled?",
    answer:
      "Mobile Darasa adheres to strict data security protocols to protect student and institutional information. Our platform complies with data protection regulations to ensure privacy and security for all users.",
  },
  {
    quiz: "What types of content can we upload?",
    answer:
      "You can upload various types of content, including videos, documents, quizzes, assignments, and interactive modules. Our team will guide you on best practices for optimal content delivery.",
  },
  {
    quiz: "How long does it take to set up and launch the platform?",
    answer:
      "Typically, the onboarding and setup process takes between 2-4 weeks, depending on customization needs and content volume. This timeline ensures adequate time for customization, testing, and training.",
  },
  {
    quiz: "Can we integrate Mobile Darasa with existing tools or systems?",
    answer:
      "We support integrations with popular educational and administrative tools. During onboarding, we can discuss specific integration needs to optimize your platform experience.",
  },
  {
    quiz: "Is there a limit on the number of students or courses?",
    answer:
      "No, Mobile Darasa is designed to scale with your institution’s growth. You can add courses and increase enrollment without any limitations.",
  },
];
