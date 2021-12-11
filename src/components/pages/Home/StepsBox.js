import React from "react";
import Step from "./Step";
import iconOne from "../../../assets/Icon-1.svg";
import iconTwo from "../../../assets/Icon-2.svg";
import iconThree from "../../../assets/Icon-3.svg";
import iconFour from "../../../assets/Icon-4.svg";

const StepsBox = () => {
    return (
        <div className="steps-box">
            <Step icon={iconOne} title={"Wybierz rzeczy"} text={"ubrania, zabawki, sprzęt i inne"} />
            <Step icon={iconTwo} title={"Spakuj je"} text={"skorzystaj z worków na śmieci"} />
            <Step icon={iconThree} title={"Zdecyduj komu chcesz pomóc"} text={"wybierz zaufane miejsce"} />
            <Step icon={iconFour} title={"Zamów kuriera"} text={"kurier przyjedzie w dogodnym terminie"} />
        </div>
    )
}

export default StepsBox;