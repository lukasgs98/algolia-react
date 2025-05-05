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
    
    const BATCH_SIZE = 4;
    const [visibleCount, setVisibleCount] = React.useState(BATCH_SIZE);
    
    function showMore() {
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, props.hits.length));
    };
    
    return (
        <div className="results-list">
            <ul className="results-list-ul">
                {props.hits.slice(0, visibleCount).map(createCard)}
            </ul>
            {visibleCount < props.hits.length && (
                <div className="show-more-button" onClick={showMore}>Show More</div>
            )}
        </div>
    );
};

export default ResultsList;