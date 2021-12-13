import React from "react";

const Column = ({ count, text }) => {
    return (
        <div className="column-box">
            <p className="col-counter">{count}</p>
            <h3 className="col-text">{text}</h3>
            <p className="col-description">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
        </div>
    )
}

export default Column;