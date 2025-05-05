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
                return [];
            } else {
                return rating;
            }
        });
    };
    
    // USE STATE TO REMEMBER SEARCH RESULTS
    const [hasMounted, setHasMounted] = React.useState(false); // REMEMBER IF APP COMPONENT HAS MOUNTED BEFORE
    const [facets, setFacets] = React.useState([]); // DECLARE STATE FOR AVAILABLE FACETS -- NEEDED FOR SIDEBAR CUISINE FILTER
    const [results, setResults] = React.useState(null);

    // RUN SEARCH WHEN OTHER STATES CHANGE
    React.useEffect(() => {
        // IF APP HASN'T MOUNTED BEFORE, USE EMPTY ARRAYS FOR FACETS -- DISPLAYS ALL RECORDS BY DEFAULT
        let cuisineFilter = hasMounted ? selectedCuisines : [];
        let paymentOptionsFilter = hasMounted ? selectedPaymentOptions : [];
        let ratingsFilter = hasMounted ? selectedRatings : [];

        // RUN THE SEARCH WITH OTHER STATES AS PARAMETERS
        runSearch(query, cuisineFilter, paymentOptionsFilter, ratingsFilter)
            .then((res) => {
                // SET RESULTS STATE TO RESULT OF SEARCH
                setResults(res);
                // IF APP HASN'T MOUNTED BEFORE, SET FACETS STATE WITH DISCJUNTIVE FACETS
                if (!hasMounted) {
                    setFacets(res.disjunctiveFacets);
                    setHasMounted(true);
                }
            }).catch((err) => {
                console.error("Search error:", err);
            })
      }, [query, selectedCuisines, selectedPaymentOptions, selectedRatings]); // MAKE HOOK DEPENDENT ON OTHER STATES

    // RENDER PAGE
    return (<>
              <div className="top-container">
                  <Searchbar 
                      placeholder="Search for restaurants by name, cuisine or location"
                      value={query}
                      handleTyping={handleTyping}
                  />
              </div>
              
              {/* RENDER ONLY IF RESULTS AND FACETS STATE HAVE DATA */}
              {results && facets && (
              <div className="middle-container">
                  <Sidebar 
                      availableCuisines={facets.find(facet => facet.name === "food_type")?.data}
                      handleCuisineFilter={filterCuisine} 
                      handleRatingsFilter={filterRatings}
                      handlePaymentOptionsFilter={filterPaymentOptions}
                      selectedCuisines={selectedCuisines}
                      selectedRatings={selectedRatings}
                      selectedPaymentOptions={selectedPaymentOptions}
                  />
                  <SearchResults results={results}/>
              </div>
              )}
            </>)
}

export default App;