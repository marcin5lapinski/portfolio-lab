import React from "react";
import decoration from "../../assets/Decoration.svg";

const TitleWithDecoration = ( { title } ) => {
    return (
        <div className="title-box">
            <h1>{title}</h1>
            <img src={decoration} alt="decoration" />
        </div>
    )
}

export default TitleWithDecoration;