import React from "react";
import LoginButtons from "./LoginButtons";
import LoginForm from "./LoginForm";

const LoginBox = () => {
    return (
        <div className="login-box">
            <LoginForm />
            <LoginButtons />
        </div>
    )
}

export default LoginBox;