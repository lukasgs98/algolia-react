import React from "react";
import SearchMetaData from "./SearchMetaData/SearchMetaData";
import Card from "./Card/Card";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton";
import "./SearchResults.css"

function SearchResults(props) {
    
    // CREATE FUNCTION TO RENDER CARDS //
    function createCard(hit) {
        return (
            <Card 
            name="Name"
            photo="Image"
            numberStars="Stars"
            numberReviews="Reviews"
            cuisine="Food Type"
            area="Area"
            priceRange="Price Range"
        />
        )
    };
    
    return (
        <div className="search-results">
            {/* RENDER SEARCH META DATA */}
            <SearchMetaData 
                numberHits="500"
                searchSpeed="0.05"
            />

            {/* LOOP THROUGH HITS TO CREATE CARDS */}
            <Card 
            name="Name"
            photo="Image"
            numberStars="Stars"
            numberReviews="Reviews"
            cuisine="Food Type"
            area="Area"
            priceRange="Price Range"
            />
        </div>
    );
}

export default SearchResults;