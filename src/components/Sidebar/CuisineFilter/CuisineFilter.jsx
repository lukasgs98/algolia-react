import React from "react";
import "./CuisineFilter.css";

function CuisineFilter() {
    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                <li>Asian</li>
                <li>Mexican</li>
            </ul>
        </div>
    );
};

export default CuisineFilter;