import React from "react";
import "./RatingFilter.css"

function RatingFilter() {
    return (
        <div class="rating-filter">
            <div class="cuisine-filter-title">Rating</div>
            <div class="rating-filter-list">
                <img id="zero" alt="☆☆☆☆☆" src="./rating_0_of_5.svg"/>
                <img id="one" alt="★☆☆☆☆" src="./rating_1_of_5.svg"/>
                <img id="two" alt="★★☆☆☆" src="./rating_2_of_5.svg"/>
                <img id="three" alt="★★★☆☆" src="./rating_3_of_5.svg"/>
                <img id="four" alt="★★★★☆" src="./rating_4_of_5.svg"/>
                <img id="five" alt="★★★★★" src="./rating_5_of_5.svg"/>
            </div>
        </div>
    );
}

export default RatingFilter;