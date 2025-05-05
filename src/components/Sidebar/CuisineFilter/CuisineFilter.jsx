import React from "react";
import ListItem from "../ListItem/ListItem";
import "./CuisineFilter.css";

function CuisineFilter(props) {
    // CONVERT availableCuisines OBJECT INTO AN ARRAY OF KEY-VALUE PAIRS
    const availableCuisinesData = Object.entries(props.availableCuisines);
    
    // DECLARE FUNCTION RENDER listItems WITH PARAMETERS FROM CUISINEDATA
    function createListItem(cuisine, count, index) {
        // DECLARE FUNCTION TO GENERATE TEXTCONTENT FOR listItem
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

    // SET BATCH SIZE FOR DISPLAYED OPTIONS
    const BATCH_SIZE = 8;
        const [visibleCount, setVisibleCount] = React.useState(BATCH_SIZE);
        
        // DECLARE FUNCTION TO INCREASE NUMBER OF VISIBLE OPTIONS
        function showMore() {
            // MAKE SURE THE NUMBER DOES NOT EXCEED TOTAL NUMBER OF OPTIONS
            setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, availableCuisinesData.length)); 
        };

    return (
        <div className="cuisine-filter">
            <div className="cuisine-filter-title">Cuisine/Food Type</div>
            <ul className="cuisine-filter-list">
                {/* LOOP OVER availableCuisinesData ARRAY FOR NUMBER OF VISIBLE ITEMS AND CREATE listItems */}
                {availableCuisinesData.slice(0, visibleCount).map(([cuisine, count], index) => 
                    createListItem(cuisine, count, index)
                )}
            </ul>
            {/* IF THERE ARE MORE TOTAL OPTIONS THAN VISIBLE, RENDER show-more BUTTON */}
            {visibleCount < availableCuisinesData.length && (
                <div className="available-cuisines-list-show-more-button" onClick={showMore}>Show More</div>
            )}
        </div>
    );
};

export default CuisineFilter;