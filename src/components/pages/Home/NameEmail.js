import React from "react";
import { useState } from "react";
import validator from 'validator';

const NameEmail = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const validateName = () => {

        if (!validator.contains(name, " ", { ignoreCase: false, minOccurrences: 1 })) {
            return (
                <div className="validation-good">X</div>
            )
        } else if (name === "") {
            return (
                <div className="validation-good">X</div>
            )
        } else {
            return (
                <div className="validation-bad">Imię musi być jednym wyrazem!</div>
            )
        }
    }

    const checkStyleName = () => {
        let style;
        if (name !== "" && validator.contains(name, " ", { ignoreCase: false, minOccurrences: 1 })) {
            return style = {borderBottom: "2px solid red"}
        } else if (name === "" && !validator.contains(name, " ", { ignoreCase: false, minOccurrences: 1 })) {
            return style = {borderBottom: "2px solid #737373"}
        } else {
            return style = {borderBottom: "2px solid #737373"}
        }
    }

    const emailChange = (e) => {
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

    return (
        <div className="name-email">
            <div>
            <label className="label-name">
                Wpisz swoje imię
                <input type="text" placeholder="Krzysztof" value={name} onChange={nameChange} style={checkStyleName()} />
            </label>
            {validateName()}
            </div>
            <div>
            <label className="label-email">
                Wpisz swój email
                <input type="email" placeholder="abc@xyz.pl" value={email} onChange={emailChange} style={checkStyleEmail()} />
            </label>
            {validateEmail()}
            </div>
        </div>
    )
}

export default NameEmail;