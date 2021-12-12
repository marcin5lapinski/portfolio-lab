import React from "react";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";

const Footer = () => {
    return (
        <div className="footer-box">
            <p>Copyright by CodersLab</p>
            <div className="socialmedia-icons">
                <img src={facebook} alt="facebook-logo" />
                <img src={instagram} alt="instagram-logo" />
            </div>
        </div>
    )
}

export default Footer;