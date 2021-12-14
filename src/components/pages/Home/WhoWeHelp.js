import React from "react";
import { useState } from "react";
import WWHButtonsBox from "./WWHButtonsBox";
import WWHContent from "./WWHContent";
import WWHTitle from "./WWHTitle";
import { description1 } from "./textVariables";
import { fundations } from "./textVariables";


const WhoWeHelp = () => {
    const [description, setDescription] = useState(description1);
    const [funds, setFunds] = useState(fundations);
    const [pageNumber, setPageNumber] = useState(0);

    return (
        <section className="wwh-container" id="who-we-help">
            <WWHTitle />
            <WWHButtonsBox 
                setDescription={setDescription}
                setFunds={setFunds}
                setPageNumber={setPageNumber}
            />
            <WWHContent 
                description={description}
                funds={funds}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </section>
    )
}

export default WhoWeHelp;