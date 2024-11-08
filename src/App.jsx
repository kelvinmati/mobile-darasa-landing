import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import { Routes, Route } from "react-router-dom";
import MoreAbout from "./components/MoreAbout";
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
              <Offers />
              <Pricing />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<MoreAbout />} />
      </Routes>
    </div>
  );
}

export default App;
