import React from "react";
import "./RatingFilter.css"

import ListItem from "../ListItem/ListItem";
import ReviewStarsImage from "../../SearchResults/Card/ReviewStarsImage/ReviewStarsImage";

function RatingFilter(props) {
    return (
        <div className="rating-filter">
            <div className="cuisine-filter-title">Rating</div>
            <div className="rating-filter-list">
                <ListItem 
                    key="0" 
                    value="0"
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="0" />}    
                />
                <ListItem 
                    key="1" 
                    value="1"
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="1" />}    
                />
                <ListItem 
                    key="2" 
                    value="2"
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="2" />}    
                />
                <ListItem 
                    key="3" 
                    value="3"
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="3" />}    
                />
                <ListItem 
                    key="4" 
                    value="4"
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="4" />}    
                />
                <ListItem 
                    key="5" 
                    value="5"
                    onClick={props.handleRatingsFilter} 
                    textContent={<ReviewStarsImage numberStars="5" />}    
                />
            </div>
        </div>
    );
};

export default RatingFilter;