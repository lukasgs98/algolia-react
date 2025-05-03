import React from "react";
import "./RatingFilter.css"

import zero_stars from "/assets/rating_0_of_5.svg";
import one_star from "/assets/rating_1_of_5.svg";
import two_stars from "/assets/rating_2_of_5.svg";
import three_stars from "/assets/rating_3_of_5.svg";
import four_stars from "/assets/rating_4_of_5.svg";
import five_stars from "/assets/rating_5_of_5.svg";

function RatingFilter() {
    return (
        <div class="rating-filter">
            <div class="cuisine-filter-title">Rating</div>
            <div class="rating-filter-list">
                <img id="zero" alt="0/5 stars" src={zero_stars}/>
                <img id="one" alt="1/5 stars" src={one_star}/>
                <img id="two" alt="2/5 stars" src={two_stars}/>
                <img id="three" alt="3/5 stars" src={three_stars}/>
                <img id="four" alt="4/5 stars" src={four_stars}/>
                <img id="five" alt="5/5 stars" src={five_stars}/>
            </div>
        </div>
    );
}

export default RatingFilter;