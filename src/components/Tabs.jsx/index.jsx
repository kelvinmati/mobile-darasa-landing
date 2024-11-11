import React from "react";
import { useState } from "react";
import Challenges from "./Challenges";
import WhyUs from "./WhyUs";

const TabsConfig = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Tab 1");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Render different components based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Tab 1":
        return <Challenges />;
      case "Tab 2":
        return <WhyUs />;

      default:
        return null;
    }
  };
  return (
    <div className="bg-secondaryRed text-white py-12">
      <div className="md:w-containerWidth w-mobile mx-auto">
        <div role="tablist" className="tabs tabs-lifted mb-4 ">
          <a
            role="tab"
            className={`tab text-black font-medium text-lg uppercase pb-2 ${
              activeTab === "Tab 1" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Tab 1")}
          >
            Challenges that Mobile Darasa Addresses.
          </a>
          <a
            role="tab"
            className={`tab text-black font-medium text-lg uppercase pb-2 ${
              activeTab === "Tab 2" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Tab 2")}
          >
            Why Choose mobile Darasa.
          </a>
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default TabsConfig;
