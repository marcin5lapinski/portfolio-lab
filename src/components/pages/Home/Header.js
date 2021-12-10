import React from "react";
import Navigation from "../../sub-components/Navigation";
import LoginRegister from "./LoginRegister";
import HeaderBox from "./HeaderBox";

const Header = () => {
    return (
        <section className="header-container">
            <div className="header-image"></div>
            <div className="header-content">
                <nav>
                    <LoginRegister />
                    <Navigation />
                </nav>
                <HeaderBox />
            </div>
        </section>
    )
}

export default Header;