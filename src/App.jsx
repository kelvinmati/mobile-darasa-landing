import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Offers />

      <Footer />
    </div>
  );
}

export default App;
