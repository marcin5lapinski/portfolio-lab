import React from "react";
import { useState } from "react";
import WWHButtonsBox from "./WWHButtonsBox";
import WWHContent from "./WWHContent";
import WWHTitle from "./WWHTitle";
import { description1 } from "./textVariables";


const WhoWeHelp = () => {
    const [description, setDescription] = useState(description1);

    return (
        <section className="wwh-container" id="who-we-help">
            <WWHTitle />
            <WWHButtonsBox setDescription={setDescription} />
            <WWHContent description={description} />
        </section>
    )
}

export default WhoWeHelp;