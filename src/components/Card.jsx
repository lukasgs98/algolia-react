import React from "react";

function Card(props) {
    return (
        <>
            <div class="restaurant-photo">
                <img alt={props.restaurantName} src={props.restaurantPhoto}/>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-name">{props.restaurantName}</div>
                <div class="restaurant-reviews">{props.restaurantReviews}</div>
                <div class="restaurant-description">
                    <span>{props.restaurantCuisine}</span> | 
                    <span>{props.restaurantArea}</span> | 
                    <span>{props.restaurantPriceRange}</span>
                </div>
            </div>
        </>
    )
}

export default Card;