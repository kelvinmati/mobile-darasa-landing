import React from "react";
import contact from "../assets/images/contact.jpg";
const Contact = () => {
  return (
    <div id="contact" className="pt-16 pb-28">
      <div className=" w-mobile md:w-containerWidth mx-auto grid grid-cols-3 rounded-3xl bg-white items-center">
        <div className="p-7 space-y-8 col-span-2">
          <p className="text-4xl">
            Let’s discuss how Mobile Darasa is a valuable asset in running your
            institution.
          </p>
          <button className=" px-6 py-2 bg-primaryRed text-white rounded-full hover:bg-secondaryRed ">
            <span>Contact us</span>{" "}
          </button>
        </div>
        <div>
          <img className="rounded-e-3xl" src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
