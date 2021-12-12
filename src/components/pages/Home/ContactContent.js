import React from "react";
import TitleWithDecoration from "../../sub-components/TitleWithDecoration";
import ContactForm from "./ContactForm";

const ContactContent = () => {
    return (
        <div className="contact-content">
            <TitleWithDecoration title={"Skontaktuj się z nami"} />
            <ContactForm />
        </div>
    )
}

export default ContactContent;