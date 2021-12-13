import React from "react";
import DescriptionBox from "./DescriptionBox";
import OrganizationsContainer from "./OrganizationsContainer";
import PagesNumbers from "./PagesNumbers";

const WWHContent = ({ description }) => {
    return (
        <div className="wwh-content">
            <DescriptionBox description={description} />
            <OrganizationsContainer />
            <PagesNumbers />
        </div>
    )
}

export default WWHContent;