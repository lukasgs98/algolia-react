import React from "react";
import ListItem from "./ListItem/ListItem";
import "./CuisineFilter.css";

function CuisineFilter(props) {

    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                <ListItem id="1" onClick={props.handleCuisineFilter} textContent="Asian" />
                <ListItem id="2" onClick={props.handleCuisineFilter} textContent="Mexican" />
            </ul>
        </div>
    );
};

export default CuisineFilter;