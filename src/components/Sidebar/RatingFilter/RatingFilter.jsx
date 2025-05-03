import React from "react";

function RatingFilter() {
    return (
        <div class="rating-filter">
            <div class="cuisine-filter-title">Rating</div>
            <div class="rating-filter-list">
                <img id="zero" alt="☆☆☆☆☆"/>
                <img id="one" alt="★☆☆☆☆"/>
                <img id="two" alt="★★☆☆☆"/>
                <img id="three" alt="★★★☆☆"/>
                <img id="four" alt="★★★★☆"/>
                <img id="five" alt="★★★★★"/>
            </div>
        </div>
    );
}

export default RatingFilter;