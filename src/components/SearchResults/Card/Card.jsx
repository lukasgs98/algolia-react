import React from "react";
import "./Card.css"

import ReviewStarsImage from "./ReviewStarsImage/ReviewStarsImage"

function Card(props) {
    return (
        <div class="card">
            <div class="restaurant-photo">
                <img alt={props.name} src={props.photo}/>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-name">{props.name}</div>
                <div class="restaurant-reviews">
                    <span class="restaurant-reviews-number-stars">{props.numberStars}</span>
                    <span class="restaurant-reviews-stars-img">
                        <ReviewStarsImage numberStars={props.numberStars} />
                    </span>
                    <span class="restaurant-reviews-number-reviews">({props.numberReviews}) reviews</span>
                </div>
                <div class="restaurant-description">
                    <span class="restaurant-description-cuisine">{props.cuisine}</span> 
                    <span class="restaurant-description-area">{props.area}</span>
                    <span class="restaurant-description-priceRange">{props.priceRange}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;