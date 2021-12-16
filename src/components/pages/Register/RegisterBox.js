import React from "react";
import RegisterButtons from "./RegisterButtons";
import RegisterForm from "./RegisterForm";

const RegisterBox = () => {
    return (
        <div className="login-box">
            <RegisterForm />
            <RegisterButtons />
        </div>
    )
}

export default RegisterBox;