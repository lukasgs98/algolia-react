import React from "react";
import CuisineFilter from "./CuisineFilter/CuisineFilter";
import RatingFilter from "./RatingFilter/RatingFilter";

function Sidebar() {
    return (
        <div class="sidebar">
            <CuisineFilter />
            <RatingFilter />
        </div>
    );
}

export default Sidebar;