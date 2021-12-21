import React from "react";
import { useState } from "react";
import validator from 'validator';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const validateEmail = () => {

        if (validator.isEmail(email)) {
            return (
                <div className="validation-good">X</div>
            )
        } else if (email === "") {
            return (
                <div className="validation-good">X</div>
            )
        } else {
            return (
                <div className="validation-bad">Podany email jest nieprawidłowy!</div>
            )
        }
    }

    const checkStyleEmail = () => {
        let style;
        if (email !== "" && !validator.isEmail(email)) {
            return style = {borderBottom: "2px solid red"}
        } else if (email === "" || validator.isEmail(email)) {
            return style = {borderBottom: "2px solid #737373"}
        } else {
            return style = {borderBottom: "2px solid #737373"}
        }
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const validatePassword = () => {

        if (validator.isLength(password, 6, undefined)) {
            return (
                <div className="validation-good">X</div>
            )
        } else if (password === "") {
            return (
                <div className="validation-good">X</div>
            )
        } else {
            return (
                <div className="validation-bad">Podane hasło jest za krótkie!</div>
            )
        }
    }

    const checkStylePassword = () => {
        let style;
        if (password !== "" && !validator.isLength(password, 6, undefined)) {
            return style = {borderBottom: "2px solid red"}
        } else if (password === "" || validator.isLength(password, 6, undefined)) {
            return style = {borderBottom: "2px solid #737373"}
        } else {
            return style = {borderBottom: "2px solid #737373"}
        }
    }

    return (
        <form className="login-form">
            <label className="label-email">
                Email
                <input type="email" id="email" value={email} onChange={changeEmail} style={checkStyleEmail()} />
            </label>
            {validateEmail()}
            <label className="label-email">
                Hasło
                <input type="password" id="password" value={password} onChange={changePassword} style={checkStylePassword()} />
            </label>
            {validatePassword()}
        </form>
    )
}

export default LoginForm;