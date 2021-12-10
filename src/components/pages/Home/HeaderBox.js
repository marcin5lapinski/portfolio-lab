import React from "react";
import { Link } from "react-router-dom";
import TitleWithDecoration from "../../sub-components/TitleWithDecoration";

const HeaderBox = () => {
    return (
        <div className="header-content--box">
            <TitleWithDecoration title={"Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"} />
            <div className="header-content--buttons">
                <Link to="/login" className="header-btn">Oddaj rzeczy</Link>
                <Link to="/login" className="header-btn">Zorganizuj zbiórkę</Link>
            </div>
        </div>
    )
}

export default HeaderBox;