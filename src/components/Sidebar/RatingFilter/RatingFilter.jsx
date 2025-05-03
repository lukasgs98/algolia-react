import React from "react";
import "./RatingFilter.css"

import ReviewStarsImage from "../../SearchResults/Card/ReviewStarsImage/ReviewStarsImage";

function RatingFilter() {
    return (
        <div class="rating-filter">
            <div class="cuisine-filter-title">Rating</div>
            <div class="rating-filter-list">
                <ReviewStarsImage numberStars="0" />
                <ReviewStarsImage numberStars="1" />
                <ReviewStarsImage numberStars="2" />
                <ReviewStarsImage numberStars="3" />
                <ReviewStarsImage numberStars="4" />
                <ReviewStarsImage numberStars="5" />

            </div>
        </div>
    );
};

export default RatingFilter;