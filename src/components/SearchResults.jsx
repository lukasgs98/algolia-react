import React from "react";
import SearchMetaData from "./SearchMetaData";
import Card from "./Card";
import ShowMoreButton from "./ShowMoreButton";

function SearchResults(props) {
    const metadata = props.results.metadata;
    const hits = props.results.hits;
    
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
        <>
            <SearchMetaData 
                numberHits={metadata.numberOfHits} 
                searchSpeed={metadata.searchTimeSeconds}
            />
            {hits.map(createCard)}
        </>
    );
}

export default SearchResults;