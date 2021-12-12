import React from "react";
import ContactButton from "./ContactButton";
import Message from "./Message";
import NameEmail from "./NameEmail";

const ContactForm = () => {
    return (
        <form className="contact-form">
            <NameEmail />
            <Message />
            <ContactButton />
        </form>
    )
}

export default ContactForm;