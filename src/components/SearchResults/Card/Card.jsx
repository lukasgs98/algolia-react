import React from "react";
import ReviewStarsImage from "./ReviewStarsImage/ReviewStarsImage"
import "./Card.css"

function Card(props) {
    return (
        <div className="card">
            <div className="restaurant-photo">
                <img alt={props.name} src={props.photo}/>
            </div>
            <div className="restaurant-info">
                <div className="restaurant-name">{props.name}</div>
                <div className="restaurant-reviews">
                    <span className="restaurant-reviews-number-stars">{props.numberStars}</span>
                    <span className="restaurant-reviews-stars-img">
                        <ReviewStarsImage numberStars={props.numberStars} />
                    </span>
                    <span className="restaurant-reviews-number-reviews">({props.numberReviews}) reviews</span>
                </div>
                <div className="restaurant-description">
                    <span className="restaurant-description-cuisine">{props.cuisine}</span> 
                    <span className="restaurant-description-area">{props.area}</span>
                    <span className="restaurant-description-priceRange">{props.priceRange}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;