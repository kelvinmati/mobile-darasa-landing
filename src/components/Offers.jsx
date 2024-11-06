import React from "react";
import offers_img from "../assets/images/offers.jpg";
import offline from "../assets/icons/offline.png";
import mobile_friendly from "../assets/icons/mobile-friendly.png";
import scalability from "../assets/icons/sacalability.png";

const Offers = () => {
  return (
    <div className="py-20">
      <div className="w-mobile md:w-containerWidth mx-auto grid grid-cols-2 gap-10">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl pb-2"> WHAT WILL YOU GET?.</h2>
            <p className="text-primaryRed">
              Mobile Darasa is cloud-based, ensuring accessibility via mobile
              devices, tablets, and computers. It includes:
            </p>
          </div>

          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={offline} alt="" />
            <div>
              <h2 className="text-lg font-bold">Offline acess</h2>
              <p className="text-textColor">
                Limited content accessible without an internet connection to
                cater to areas with unstable internet connectivity.
              </p>
            </div>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={mobile_friendly} alt="" />
            <div>
              <h2 className="text-lg font-bold">Mobile friendly</h2>
              <p className="text-textColor">
                Designed to work efficiently on low-cost smartphones to
                accommodate users from different socio-economic backgrounds.
              </p>
            </div>
          </div>
          <div className="flex  space-x-2 shadow-lg bg-gray-100 p-4 rounded-lg">
            <img className="w-9 h-9" src={scalability} alt="" />
            <div>
              <h2 className="text-lg font-bold">Scalability</h2>
              <p className="text-textColor">
                Ability to accommodate large numbers of users, ensuring that
                both small institutions and large universities can use it
                seamlessly.
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
