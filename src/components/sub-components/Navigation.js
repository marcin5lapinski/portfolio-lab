import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/" className="nav-btn">Start</Link>
            <Link to="three-columns" spy={true} smooth={true} className="nav-btn">O co chodzi?</Link>
            <Link to="about" spy={true} smooth={true} className="nav-btn">O nas</Link>
            <Link to="who-we-help"  spy={true} smooth={true} className="nav-btn">Fundacja i organizacje</Link>
            <Link to="contact"  spy={true} smooth={true} className="nav-btn">Kontakt</Link>
        </div>
    )
}

export default Navigation;