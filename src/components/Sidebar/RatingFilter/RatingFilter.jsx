import React from "react";
import "./RatingFilter.css"

import ListItem from "../ListItem/ListItem";
import ReviewStarsImage from "../../SearchResults/Card/ReviewStarsImage/ReviewStarsImage";

function RatingFilter(props) {
    return (
        <div className="rating-filter">
            <div className="cuisine-filter-title">Rating</div>
            <ul className="rating-filter-list">
                <ListItem 
                    id="0" 
                    value="0"
                    className={props.selectedRatings.includes("0") ? "selected" : null}
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="0" />}    
                />
                <ListItem 
                    id="1" 
                    value="1"
                    className={props.selectedRatings.includes("1") ? "selected" : null}
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="1" />}    
                />
                <ListItem 
                    id="2" 
                    value="2"
                    className={props.selectedRatings.includes("2") ? "selected" : null}
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="2" />}    
                />
                <ListItem 
                    id="3" 
                    value="3"
                    className={props.selectedRatings.includes("3") ? "selected" : null}
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="3" />}    
                />
                <ListItem 
                    id="4" 
                    value="4"
                    className={props.selectedRatings.includes("4") ? "selected" : null}
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="4" />}    
                />
                <ListItem 
                    id="5" 
                    value="5"
                    className={props.selectedRatings.includes("5") ? "selected" : null}
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="5" />}    
                />
            </ul>
        </div>
    );
};

export default RatingFilter;