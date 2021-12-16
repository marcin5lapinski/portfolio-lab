import React from "react";
import LoginRegister from "../../sub-components/LoginRegister";
import Navigation from "../../sub-components/Navigation";
import TitleWithDecoration from "../../sub-components/TitleWithDecoration";
import RegisterBox from "./RegisterBox";

const Register = () => {
    return (
        <section className="logout-container">
            <nav>
                <LoginRegister />
                <Navigation />
            </nav>
            <div className="login-content">
                <TitleWithDecoration title={"Załóż konto"} />
                <RegisterBox />
            </div>
        </section>
    )
}

export default Register;