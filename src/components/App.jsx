import React from "react";
import Searchbar from "./Searchbar";
import SearchMetaData from "./SearchMetaData";

function App() {
    return (
        <>
            <div class="top-container">
                <Searchbar placeholder="Simple searchbar"/>
            </div>
            <div class="middle-container">
                <SearchMetaData numberHits="4900" searchSpeed="0.05"/>
                ...
                ...
            </div>
        </>
    )
}

export default App;