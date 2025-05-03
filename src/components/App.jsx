import React from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";



function App() {
    const results = {
        "metadata": {
          "query": "restaurants near me",
          "numberOfHits": 3,
          "searchTimeSeconds": 0.45
        },
        "results": [
          {
            "name": "Pasta Palace",
            "address": "123 Main St, Springfield",
            "rating": 4.5,
            "distanceMiles": 0.3,
            "cuisine": "Italian"
          },
          {
            "name": "Curry Corner",
            "address": "456 Elm St, Springfield",
            "rating": 4.7,
            "distanceMiles": 0.5,
            "cuisine": "Indian"
          }
        ]
      }

    return (
        <>
            <div class="top-container">
                <Searchbar placeholder="Simple searchbar"/>
            </div>
            <div class="middle-container">
                <SearchResults results={results}/>
            </div>
        </>
    )
}

export default App;