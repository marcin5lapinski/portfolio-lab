import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import ThreeColumns from "./components/ThreeColumns";
import FourSteps from "./components/FourSteps";
import About from "./components/About";
import WhoWeHelp from "./components/WhoWeHelp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/three-columns" element={<ThreeColumns />} />
        <Route exact path="/four-steps" element={<FourSteps />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/who-we-help" element={<WhoWeHelp />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;