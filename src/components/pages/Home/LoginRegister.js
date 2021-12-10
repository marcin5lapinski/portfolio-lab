import React from "react";
import { Link } from "react-router-dom";

const LoginRegister = () => {
    return (
        <div className="login-register">
            <Link to="/login" className="login-btn">Zaloguj</Link>
            <Link to="/register" className="login-btn">Załóż konto</Link>
        </div>
    )
}

export default LoginRegister;