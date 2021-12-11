import React from "react";
import FSTitleBox from "./FSTitleBox";
import StepsBox from "./StepsBox";
import FSButtonBox from "./FSButtonBox";

const FourSteps = () => {
    return (
        <section className="four-steps-container">
            <FSTitleBox />
            <StepsBox />
            <FSButtonBox />
        </section>
    )
}

export default FourSteps;