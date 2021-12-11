import React from "react";
import { Link } from "react-router-dom";

const FSButtonBox = () => {
    return (
        <div className="btn-box-content">
            <Link to="/login" className="four-steps-btn">Oddaj rzeczy</Link>
        </div>
    )
}

export default FSButtonBox;