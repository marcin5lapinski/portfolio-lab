import React from "react";

const Step = ( { icon, title, text } ) => {
    return (
        <div className="step">
            <img src={icon} alt="icon" />
            <h5 className="step-title">{title}</h5>
            <div className="deco-line"></div>
            <p className="step-text">{text}</p>
        </div>
    )
}

export default Step;