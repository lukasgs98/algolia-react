import React from "react";
import ListItem from "../ListItem/ListItem";
import "./CuisineFilter.css";

function CuisineFilter(props) {
    const availableCuisinesData = Object.entries(props.availableCuisines);
    
    function createListItem(cuisine, count, index) {
        const textContent = () => {
            return (
                <div className="cuisine-filter-list-item-content">
                    <span className="cuisine-filter-list-item-content-type">{cuisine}</span>
                    <span className="cuisine-filter-list-item-content-count">{count}</span>
                </div>
            );
        };

        return (
            <ListItem
                id={index}
                className={props.selectedCuisines.includes(cuisine) ? "cuisine-filter-list-item selected" : "cuisine-filter-list-item"}
                value={cuisine}
                onClick={props.handleCuisineFilter} 
                textContent={textContent()}
            />
        );
    };

    const BATCH_SIZE = 8;
        const [visibleCount, setVisibleCount] = React.useState(BATCH_SIZE);
        
        function showMore() {
            setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, availableCuisinesData.length));
        };

    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                {availableCuisinesData.slice(0, visibleCount).map(([cuisine, count], index) => 
                    createListItem(cuisine, count, index)
                )}
            </ul>
            {visibleCount < availableCuisinesData.length && (
                <div className="available-cuisines-list-show-more-button" onClick={showMore}>Show More</div>
            )}
        </div>
    );
};

export default CuisineFilter;