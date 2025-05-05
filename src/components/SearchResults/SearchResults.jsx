import React from "react";
import SearchMetaData from "./SearchMetaData/SearchMetaData";
import ResultsList from "./ResultsList/ResultsList";
import "./SearchResults.css"

function SearchResults(props) {

    // RENDER SEARCH RESULTS IF THERE ARE ANY
    if (props.results && props.results.hits.length != 0) {
        return (
            <div className="search-results">
                <SearchMetaData numberHits={props.results.nbHits} searchSpeed={props.results.processingTimeMS / 1000} />
                <ResultsList hits={props.results.hits} />
            </div>
        );
    }
    
    // SHOW MESSAGE WHEN THERE ARE NO RESULTS
    return <div className="search-results">Oops, no results found!</div>;
};

export default SearchResults;