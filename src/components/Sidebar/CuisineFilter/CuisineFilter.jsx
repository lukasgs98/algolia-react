import React from "react";
import ListItem from "../ListItem/ListItem";
import "./CuisineFilter.css";

function CuisineFilter(props) {
    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                <ListItem 
                    id="1" 
                    className={props.selectedCuisines.includes("Asian") ? "selected" : null}
                    value="Asian" 
                    onClick={props.handleCuisineFilter} 
                    textContent="Asian" 
                />
                <ListItem 
                    id="2"
                    className={props.selectedCuisines.includes("Mexican") ? "selected" : null}
                    value="Mexican" 
                    onClick={props.handleCuisineFilter} 
                    textContent="Mexican" />
            </ul>
        </div>
    );
};

export default CuisineFilter;