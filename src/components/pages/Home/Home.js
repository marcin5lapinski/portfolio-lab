import React from "react";
import About from "./About";
import Contact from "./Contact";
import FourSteps from "./FourSteps";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import WhoWeHelp from "./WhoWeHelp";

const Home = () => {
    return (
        <div>
            <Header />
            <ThreeColumns />
            <FourSteps />
            <About />
            <WhoWeHelp />
            <Contact />
        </div>
    )
}

export default Home;