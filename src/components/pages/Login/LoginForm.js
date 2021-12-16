import React from "react";

const LoginForm = () => {
    return (
        <form className="login-form">
            <label className="label-email">
                Email
                <input type="email" />
            </label>
            <label className="label-email">
                Hasło
                <input type="password" />
            </label>
        </form>
    )
}

export default LoginForm;