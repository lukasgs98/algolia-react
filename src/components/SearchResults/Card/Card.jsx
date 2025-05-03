import React from "react";
import "./Card.css"

import zero_stars from "/assets/rating_0_of_5.svg";
import one_star from "/assets/rating_1_of_5.svg";
import two_stars from "/assets/rating_2_of_5.svg";
import three_stars from "/assets/rating_3_of_5.svg";
import four_stars from "/assets/rating_4_of_5.svg";
import five_stars from "/assets/rating_5_of_5.svg";

function Card(props) {

    function renderReviewStars(numberStars) {
            if (numberStars < 1) {
                return zero_stars;
            } else if (numberStars < 2) {
                return one_star;
            } else if (numberStars < 3) {
                return two_stars;
            } else if (numberStars < 4) {
                return three_stars;
            } else if (numberStars < 5) {
                return four_stars;
            } else {
                return five_stars;
            }
        };
    
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
                        <img alt="" src={renderReviewStars(props.numberStars)} />
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
}

export default Card;