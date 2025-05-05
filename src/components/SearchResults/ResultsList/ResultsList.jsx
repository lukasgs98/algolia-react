import React from "react";
import Card from "./Card/Card";
import "./ResultsList.css";


function ResultsList(props) {
    function createCard(hit) {
        return (
            <Card 
                name={hit.name}
                photo={hit.image_url}
                numberStars={hit.stars_count}
                numberReviews={hit.reviews_count}
                cuisine={hit.food_type}
                area={hit.area}
                priceRange={hit.price_range}
            />
        )
    };
    
    // DEFINE BATCH SIZE OF VISIBLE ITEMS
    const BATCH_SIZE = 4;
    const [visibleCount, setVisibleCount] = React.useState(BATCH_SIZE);
    
    // DEFINE FUNCTION TO INCREASE NUMBER OF VISIBLE ITEMS WHEN THERE ARE MORE TOTAL ITEMS
    function showMore() {
        // MAKE SURE THE VISIBLE COUNT DOES NOT EXCEED TOTAL NUMBER OF ITEMS
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, props.hits.length));
    };
    
    return (
        <div className="results-list">
            <ul className="results-list-ul">
                {/* LOOP OVER hits ARRAY FOR NUMBER OF VISIBLE ITEMS AND CREATE Cards */}
                {props.hits.slice(0, visibleCount).map(createCard)}
            </ul>
            {/* IF THERE ARE MORE TOTAL OPTIONS THAN VISIBLE, RENDER show-more BUTTON */}
            {visibleCount < props.hits.length && (
                <div className="results-list-show-more-button" onClick={showMore}>Show More</div>
            )}
        </div>
    );
};

export default ResultsList;