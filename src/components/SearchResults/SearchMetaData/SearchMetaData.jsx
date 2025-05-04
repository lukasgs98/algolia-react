import React from "react";
import "./SearchMetaData.css";

function SearchMetaData (props) {
    return (
        <div className="search-metadata">
            <span className="search-results-number">{props.numberHits} results found </span>
            <span className="seach-results-speed">in {props.searchSpeed} seconds</span>
        </div>
    );
}

export default SearchMetaData;