import React from "react";
import people from "../../../assets/People.jpg"
import AboutInfo from "./AboutInfo";

const About = () => {
    return (
        <section className="about-container" id="about">
            <AboutInfo />
            <img src={people} alt="people" />
        </section>
    )
}

export default About;