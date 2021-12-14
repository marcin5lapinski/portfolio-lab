import React from "react";
import DescriptionBox from "./DescriptionBox";
import OrganizationsContainer from "./OrganizationsContainer";
import ReactPaginate from "react-paginate";

const WWHContent = ({ description, funds, pageNumber, setPageNumber }) => {

    const fundsPerPage = 3;
    const pagesVisited = pageNumber * fundsPerPage;

    const displayFunds = funds
        .slice(pagesVisited, pagesVisited + fundsPerPage)
        .map((fundation) => {
            return (
                <div key={fundation.id} className="fund-container">
                    <div className="fund-left">
                        <h3 className="fund-name">{fundation.name}</h3>
                        <p className="fund-mission">{fundation.mission}</p>
                    </div>
                    <div className="fund-right">
                        <p className="fund-givings">{fundation.givings}</p>
                    </div>
                </div>
            )
        });

    const pageCount = Math.ceil(funds.length / fundsPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="wwh-content">
            <DescriptionBox description={description} />
            <OrganizationsContainer displayFunds={displayFunds} />
            <div className="num-pages--container" style={{display: pageCount <= 1 ? "none" : "flex"}}>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pages-count"}
                    disabledClassName={"disabled-page"}
                    activeClassName={"active-page"}
                    previousLinkClassName={"previous"}
                    nextLinkClassName={"next"}
                    forcePage={0}
                />
            </div> 
        </div>
    )
}

export default WWHContent;