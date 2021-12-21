import React from "react";
import { useState } from "react";

const msgPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
+ "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," + 
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Message = () => {
    const [message, setMessage] = useState(msgPlaceholder);

    const messageChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className="message-textarea">
            <label className="label-message">
                Wpisz swoją wiadomość
                <textarea value={message} onChange={messageChange} />
            </label>
        </div>
    )
}

export default Message;