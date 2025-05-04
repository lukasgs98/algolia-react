import React from "react";
import SearchMetaData from "./SearchMetaData/SearchMetaData";
import Card from "./Card/Card";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton";
import "./SearchResults.css"

function SearchResults(props) {

    function createCard(hit) {
        return (
            <Card 
                name={hit.name}
                photo={hit.image_url}
                numberStars={hit.stars_count}
                numberReviews={hit.reviews_count}
                cuisine={hit.food_type}
                area={hit.area}
                priceRange={hit.price_range}
            />
        )
    };
    
    if (props.results && props.results.hits.length != 0) {
        return (
            <div className="search-results">
                <SearchMetaData numberHits={props.results.nbHits} searchSpeed={props.results.processingTimeMS / 1000} />
                {props.results.hits.map(createCard)}
            </div>
        );
    }
    return <div className="search-results">Oops, no results found!</div>;
};

export default SearchResults;