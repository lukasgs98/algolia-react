import React from "react";
import CuisineFilter from "./CuisineFilter/CuisineFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PaymentOptionsFilter from "./PaymentOptionsFilter/PaymentOptionsFilter";

function Sidebar() {
    return (
        <div class="sidebar">
            <CuisineFilter />
            <RatingFilter />
            <PaymentOptionsFilter />
        </div>
    );
};

export default Sidebar;