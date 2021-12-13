import React from "react";

const DescriptionBox = ({ description }) => {
    return (
        <div className="description-box">
           <p className="description-text">{description}</p>
        </div>
    )
}

export default DescriptionBox;