import React from "react";
import { description1, description2, description3 } from "./textVariables";
import { fundations, organizations, charities } from "./textVariables";
import WWHButton from "./WWHButton";

const WWHButtonsBox = ({ setDescription, setFunds, setPageNumber }) => {

    const clickHandler = (text, org) => {
        setDescription(text);
        setFunds(org);
        setPageNumber(0);
    }

    return (
        <div className="wwh-buttons--box">
            <div onClick={() => clickHandler(description1, fundations)}>
                <WWHButton text={"Fundacjom"} />
            </div>
            <div onClick={() => clickHandler(description2, organizations)}>
                <WWHButton text={"Organizacjom pozarządowym"} />
            </div>
            <div onClick={() => clickHandler(description3, charities)}>
                <WWHButton text={"Lokalnym zbiórkom"} />
            </div>
        </div>
    )
}

export default WWHButtonsBox;