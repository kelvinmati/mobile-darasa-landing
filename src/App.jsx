import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Offers from "./components/Offers";
import Footer from "./components/Bottom.jsx";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import { Routes, Route } from "react-router-dom";
import MoreAbout from "./components/MoreAbout";
import TabsConfig from "./components/Tabs.jsx";
import Faq from "./components/Faq.jsx";
import Bottom from "./components/Bottom.jsx";
import Challenges from "./components/Challenges.jsx";
import Gain from "./components/Gain.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Partners />
              <About />
              <Features />
              <Challenges />
              <Gain />
              <Offers />
              <Pricing />
              <Contact />
              <Bottom />
            </>
          }
        />
        <Route path="/about" element={<MoreAbout />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
