import React from "react";
import SearchMetaData from "./SearchMetaData";
import Card from "./Card";
import ShowMoreButton from "./ShowMoreButton";

function SearchResults({results}) {
    return (
        <>
            <SearchMetaData 
                numberHits={results.metadata.numberOfHits} 
                searchSpeed={results.metadata.searchTimeSeconds}
            />
            <Card 
                name="Restaurant name"
                photo="Photo of restaurant"
                reviews="Number of reviews"
                cuisine="Type of cuisine"
                area="Area"
                priceRange="Price range"
            />
        </>
    )
}

export default SearchResults