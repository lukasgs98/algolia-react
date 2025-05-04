import React from "react";
import SearchMetaData from "./SearchMetaData/SearchMetaData";
import Card from "./Card/Card";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton";
import "./SearchResults.css"

function SearchResults(props) {
    // SEPARATE SEARCH METADATA AND HITS //
    const metadata = props.results.metadata;
    const hits = props.results.hits;
    
    // CREATE FUNCTION TO RENDER CARDS //
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
    
    return (
        <div className="search-results">
            {/* RENDER SEARCH META DATA */}
            <SearchMetaData 
                numberHits={metadata.numberOfHits} 
                searchSpeed={metadata.searchTimeSeconds}
            />

            {/* LOOP THROUGH HITS TO CREATE CARDS */}
            {hits.map(createCard)}
        </div>
    );
}

export default SearchResults;