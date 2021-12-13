import React from "react";
import { description1, description2, description3 } from "./textVariables";
import WWHButton from "./WWHButton";

const WWHButtonsBox = ({ setDescription }) => {
    return (
        <div className="wwh-buttons--box">
            <div onClick={() => setDescription(description1)}>
                <WWHButton text={"Fundacjom"} />
            </div>
            <div onClick={() => setDescription(description2)}>
                <WWHButton text={"Organizacjom pozarządowym"} />
            </div>
            <div onClick={() => setDescription(description3)}>
                <WWHButton text={"Lokalnym zbiórkom"} />
            </div>
        </div>
    )
}

export default WWHButtonsBox;