import React from "react";
import ListItem from "./ListItem/ListItem";
import "./CuisineFilter.css";

function CuisineFilter() {

    const [selectedCuisines, setSelectedCuisines] = React.useState([]);
    function handleClick(event) {
        const cuisine = event.target.textContent;
        setSelectedCuisines(prevSelection => {
            if (prevSelection.includes(cuisine)) {
                return prevSelection.filter(item => item !== cuisine);
            } else {
                return [...prevSelection, cuisine];
            }
        });
    };

    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                <ListItem id="1" onClick={handleClick} textContent="Asian" />
                <ListItem id="2" onClick={handleClick} textContent="Mexican" />
            </ul>
        </div>
    );
};

export default CuisineFilter;