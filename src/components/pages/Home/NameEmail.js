import React from "react";
import { useState } from "react";

const NameEmail = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="name-email">
            <label className="label-name">
                Wpisz swoje imię
                <input type="text" placeholder="Krzysztof" value={name} onChange={nameChange} />
            </label>
            <label className="label-email">
                Wpisz swój email
                <input type="email" placeholder="abc@xyz.pl" value={email} onChange={emailChange} />
            </label>
        </div>
    )
}

export default NameEmail;