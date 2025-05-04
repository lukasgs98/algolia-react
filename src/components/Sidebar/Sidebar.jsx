import React from "react";
import CuisineFilter from "./CuisineFilter/CuisineFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PaymentOptionsFilter from "./PaymentOptionsFilter/PaymentOptionsFilter";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <CuisineFilter />
            <RatingFilter />
            <PaymentOptionsFilter />
        </div>
    );
};

export default Sidebar;