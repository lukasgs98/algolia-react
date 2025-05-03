import React from "react";
import SearchMetaData from "./SearchMetaData";
import Card from "./Card";
import ShowMoreButton from "./ShowMoreButton";

function SearchResults({results}) {
    return (
        <SearchMetaData 
            numberHits={results.metadata.numberOfHits} 
            searchSpeed={results.metadata.searchTimeSeconds}
        />
    )
}

export default SearchResults