import React from "react";
import SearchMetaData from "./SearchMetaData/SearchMetaData";
import Card from "./Card/Card";
import ResultsList from "./ResultsList/ResultsList";
import "./SearchResults.css"

function SearchResults(props) {

    if (props.results && props.results.hits.length != 0) {
        return (
            <div className="search-results">
                <SearchMetaData numberHits={props.results.nbHits} searchSpeed={props.results.processingTimeMS / 1000} />
                <ResultsList hits={props.results.hits} />
            </div>
        );
    }
    return <div className="search-results">Oops, no results found!</div>;
};

export default SearchResults;