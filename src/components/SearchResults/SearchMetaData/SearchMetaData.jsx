import React from "react";
import "./SearchMetaData.css";

function SearchMetaData (props) {
    return (
        <div class="search-metadata">
            <span class="search-results-number">{props.numberHits} results found </span>
            <span class="seach-results-speed">in {props.searchSpeed} seconds</span>
        </div>
    );
}

export default SearchMetaData;