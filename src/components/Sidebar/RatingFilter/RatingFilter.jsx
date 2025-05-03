import React from "react";
import "./RatingFilter.css"

function RatingFilter() {
    return (
        <div class="rating-filter">
            <div class="cuisine-filter-title">Rating</div>
            <div class="rating-filter-list">
                <img id="zero" alt="☆☆☆☆☆" src="/algolia-react/assets/rating_0_of_5.svg"/>
                <img id="one" alt="★☆☆☆☆" src="/algolia-react/assets/rating_0_of_5.svg"/>
                <img id="two" alt="★★☆☆☆" src="/algolia-react/assets/rating_0_of_5.svg"/>
                <img id="three" alt="★★★☆☆" src="/algolia-react/assets/rating_0_of_5.svg"/>
                <img id="four" alt="★★★★☆" src="/algolia-react/assets/rating_0_of_5.svg"/>
                <img id="five" alt="★★★★★" src="/algolia-react/assets/rating_0_of_5.svg"/>
            </div>
        </div>
    );
}

export default RatingFilter;