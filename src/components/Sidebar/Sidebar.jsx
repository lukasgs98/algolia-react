import React from "react";
import CuisineFilter from "./CuisineFilter/CuisineFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PaymentOptionsFilter from "./PaymentOptionsFilter/PaymentOptionsFilter";
import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <CuisineFilter handleCuisineFilter={props.handleCuisineFilter} />
            <RatingFilter handleRatingsFilter={props.handleRatingsFilter} />
            <PaymentOptionsFilter />
        </div>
    );
};

export default Sidebar;