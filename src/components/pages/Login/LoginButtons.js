import React from "react";
import { Link } from "react-router-dom";

const LoginButtons = () => {
    return (
        <div className="login-btns">
            <Link to="/register" className="home-btn register-btn">Załóż konto</Link>
            <Link to="/" className="home-btn">Zaloguj się</Link>
        </div>
    )
}

export default LoginButtons;