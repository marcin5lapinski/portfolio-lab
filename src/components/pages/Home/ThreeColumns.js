import React from "react";
import Column from "./Column";

const ThreeColumns = () => {
    return (
        <section className="columns-container" id="three-columns">
            <Column count={"10"} text={"Oddanych worków"} />
            <Column count={"5"} text={"Wspartych organizacji"} />
            <Column count={"7"} text={"Zorganizowanych zbiórek"} />
        </section>
    )
}

export default ThreeColumns;