import React from "react";
import ListItem from "./ListItem/ListItem";
import "./CuisineFilter.css";

function CuisineFilter() {
    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                <ListItem id="1" textContent="Asian" />
            </ul>
        </div>
    );
};

export default CuisineFilter;