import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import Sidebar from "./Sidebar/Sidebar";
import SearchResults from "./SearchResults/SearchResults";
import "./App.css"

import runSearch from "../algoliasearch.js";

function App() {

    // USE STATE TO REMEMBER SEARCH QUERY
    const [query, setQuery] = React.useState("");
    function handleTyping(value) {
        setQuery(value);
        console.log(query);
    };
      
    // USE STATE TO REMEMBER SELECTED CUISINE
    const [selectedCuisines, setSelectedCuisines] = React.useState([]);
    function filterCuisine(value) { 
        const cuisine = value;
        setSelectedCuisines(prevSelection => {
            if (prevSelection.includes(cuisine)) {
                return prevSelection.filter(item => item !== cuisine);
            } else {
                return [...prevSelection, cuisine];
            }
        });
    };

    // USE STATE TO REMEMBER SELECTED PAYMENTOPTIONS
    const [selectedPaymentOptions, setSelectedPaymentOptions] = React.useState([]);
    function filterPaymentOptions(value) {
        const paymentOption = value;
        setSelectedPaymentOptions(prevSelection  => {
            if (prevSelection.includes(paymentOption)) {
                return prevSelection.filter(item => item !== paymentOption);
            } else {
                return [...prevSelection, paymentOption];
            }
        });
    };    

    // USE STATE TO REMEMBER SELECTED RATINGS
    const [selectedRatings, setSelectedRatings] = React.useState([]);
    function filterRatings(value) {
        const rating = value;
        setSelectedRatings(prevSelection  => {
            if (prevSelection.includes(rating)) {
                return prevSelection.filter(item => item !== rating);
            } else {
                return [...prevSelection, rating];
            }
        });
    };
    
    // USE STATE TO REMEMBER SEARCH RESULTS
    const [results, setResults] = React.useState(null);

    // INITIALIZE SEARCH WITH ALL 5 STAR RESTAURANTS -- IF FUNCTION RUNS AGAIN DUE TO DEPENDENCY => FILL IN THE SELECTION
    React.useEffect(() => {
        let query = "";
        let cuisineFilter = selectedCuisines.length != 0 ? selectedCuisines : "";
        let paymentOptionsFilter = selectedPaymentOptions.lengt != 0 ? selectedPaymentOptions : "";
        let ratingsFilter = selectedRatings.length != 0 ? selectedRatings : 5;

        runSearch(query, cuisineFilter, paymentOptionsFilter, ratingsFilter)
            .then((res) => {
                setResults(res);
            }).catch((err) => {
                console.error("Search error:", err);
            })
      }, [selectedCuisines, selectedPaymentOptions, selectedRatings]);

    if (results) console.log(results);

    // RENDER PAGE
    return (<>
              <div className="top-container">
                  <Searchbar 
                      placeholder="Search for restaurants by name, cuisine or location"
                      value={query}
                      handleTyping={handleTyping}
                  />
              </div>
              <div className="middle-container">
                  <Sidebar 
                      handleCuisineFilter={filterCuisine} 
                      handleRatingsFilter={filterRatings}
                      handlePaymentOptionsFilter={filterPaymentOptions} 
                  />
                  <SearchResults results={results}/>
              </div>
            </>)
}

export default App;