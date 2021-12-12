import React from "react";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
    return (
        <div className="navigation">
            <HashLink smooth to="/" className="nav-btn">Start</HashLink>
            <HashLink smooth to="#three-columns" className="nav-btn">O co chodzi?</HashLink>
            <HashLink smooth to="#about" className="nav-btn">O nas</HashLink>
            <HashLink smooth to="#who-we-help" className="nav-btn">Fundacja i organizacje</HashLink>
            <HashLink smooth to="#contact" className="nav-btn">Kontakt</HashLink>
        </div>
    )
}

export default Navigation;