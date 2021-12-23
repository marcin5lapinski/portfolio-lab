import React from "react";
import { useState } from "react";
import validator from 'validator';

const msgPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
+ "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," + 
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Message = () => {
    const [message, setMessage] = useState(msgPlaceholder);

    const messageChange = (e) => {
        setMessage(e.target.value);
    }

    const validateMessage = () => {

        if (validator.isLength(message, 120, undefined)) {
            return (
                <div className="validation-good">X</div>
            )
        } else if (message === "") {
            return (
                <div className="validation-good">X</div>
            )
        } else {
            return (
                <div className="validation-bad">Wiadomość musi składać się z min. 120 znaków!</div>
            )
        }
    }

    const checkStyleMessage = () => {
        let style;
        if (message !== "" && !validator.isLength(message, 120, undefined)) {
            return style = {borderBottom: "2px solid red"}
        } else if (message === "" || validator.isLength(message, 120, undefined)) {
            return style = {borderBottom: "2px solid #737373"}
        } else {
            return style = {borderBottom: "2px solid #737373"}
        }
    }

    return (
        <div className="message-textarea">
            <label className="label-message">
                Wpisz swoją wiadomość
                <textarea value={message} onChange={messageChange} style={checkStyleMessage()}/>
            </label>
            {validateMessage()}
        </div>
    )
}

export default Message;