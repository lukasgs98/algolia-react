import React from "react";

function SearchMetaData (props) {
    return (
        <>
            <span class="search-results-number">{props.numberHits} results found </span>
            <span class="seach-results-speed">in {props.searchSpeed} seconds</span>
        </>
    )
}

export default SearchMetaData;