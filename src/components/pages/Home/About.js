import React from "react";
import AboutInfo from "./AboutInfo";
import people from "../../../assets/People.jpg";

const About = () => {
    return (
        <section className="about-container" id="about">
            <AboutInfo />
            <img src={people} alt="people" />
        </section>
    )
}

export default About;