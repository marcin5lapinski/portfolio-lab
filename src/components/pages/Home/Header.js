import React from "react";
import LoginRegister from "../../sub-components/LoginRegister";
import Navigation from "../../sub-components/Navigation";
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