import React from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../../sub-components/LoginRegister";
import Navigation from "../../sub-components/Navigation";
import TitleWithDecoration from "../../sub-components/TitleWithDecoration";

const Logout = () => {
    return (
        <section className="logout-container">
            <nav>
                <LoginRegister />
                <Navigation />
            </nav>
            <div className="logout-content">
            <TitleWithDecoration title={"Wylogowanie nastąpiło pomyślnie!"} />
            <Link to="/" className="home-btn">Strona główna</Link>
            </div>
        </section>
    )
}

export default Logout;