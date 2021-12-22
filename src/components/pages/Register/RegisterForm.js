import React from "react";
import { useState } from "react";
import validator from 'validator';

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPass] = useState("");

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

    const changeRepeatPass = (e) => {
        setRepeatPass(e.target.value);
    }

    const validateReapeatPass = () => {

        if (validator.isLength(repeatPass, 6, undefined) && validator.equals(repeatPass, password)) {
            return (
                <div className="validation-good">X</div>
            )
        } else if (repeatPass === "") {
            return (
                <div className="validation-good">X</div>
            )
        } else {
            return (
                <div className="validation-bad">Podane hasła sie różnią!</div>
            )
        }
    }

    const checkStyleRepeatPass = () => {
        let style;
        if (repeatPass !== "" && !validator.equals(repeatPass, password)) {
            return style = {borderBottom: "2px solid red"}
        } else if (repeatPass === "" && validator.isLength(repeatPass, 6, undefined) && validator.equals(repeatPass, password)) {
            return style = {borderBottom: "2px solid #737373"}
        } else {
            return style = {borderBottom: "2px solid #737373"}
        }
    }

    return (
        <form className="login-form">
            <label className="label-email">
                Email
                <input type="email" id="email-register" value={email} onChange={changeEmail} style={checkStyleEmail()} />
            </label>
            {validateEmail()}
            <label className="label-email">
                Hasło
                <input type="password" id="password-register" value={password} onChange={changePassword} style={checkStylePassword()} />
            </label>
            {validatePassword()}
            <label className="label-email">
                Powtórz hasło
                <input type="password" id="repeat-pass" value={repeatPass} onChange={changeRepeatPass} style={checkStyleRepeatPass()} />
            </label>
            {validateReapeatPass()}
        </form>
    )
}

export default RegisterForm;