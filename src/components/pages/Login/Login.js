import React from "react";
import LoginRegister from "../../sub-components/LoginRegister";
import Navigation from "../../sub-components/Navigation";
import TitleWithDecoration from "../../sub-components/TitleWithDecoration";
import LoginBox from "./LoginBox";


const Login = () => {
    return (
        <section className="logout-container">
            <nav>
                <LoginRegister />
                <Navigation />
            </nav>
            <div className="login-content">
                <TitleWithDecoration title={"Zaloguj się"} />
                <LoginBox />
            </div>
        </section>
    )
}

export default Login;