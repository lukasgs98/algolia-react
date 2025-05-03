import React from "react";

function Card(props) {
    return (
        <>
            <div class="restaurant-photo">
                <img alt={props.name} src={props.photo}/>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-name">{props.name}</div>
                <div class="restaurant-reviews">
                    <span class="restaurant-reviews-number-stars">{props.numberStars}</span>
                    <span class="restaurant-reviews-number-reviews">({props.numberReviews})</span>
                </div>
                <div class="restaurant-description">
                    <span>{props.cuisine}</span> | 
                    <span>{props.area}</span> | 
                    <span>{props.priceRange}</span>
                </div>
            </div>
        </>
    );
}

export default Card;