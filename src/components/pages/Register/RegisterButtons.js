import React from "react";
import { Link } from "react-router-dom";

const RegisterButtons = () => {
    return (
        <div className="login-btns">
            <Link to="/login" className="home-btn register-btn">Zaloguj się</Link>
            <Link to="/" className="home-btn">Załóż konto</Link>
        </div>
    )
}

export default RegisterButtons;