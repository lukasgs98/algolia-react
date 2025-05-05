import { algoliasearch } from "algoliasearch";
import algoliasearchHelper from "algoliasearch-helper";

// ADD AUTHENTICATION
const appID = "S7MEP37Z1R";
const apiKey = "10d378365771fa4741c471a7971d359d";
const indexName = "restaurants";

// INITIALIZE CLIENT
const client = algoliasearch(appID, apiKey);

// DECLARE ASYNC SEARCH FUNCTION
async function runSearch(query, cuisineFilter, paymentOptionsFilter, ratingsFilter) {

  // INITIALIZE algoliasearch-helper WITH CORRECT FACETS
  const helper = algoliasearchHelper(client, indexName, {
    disjunctiveFacets: ["food_type", "payment_options"],
    getRankingInfo: true,
    aroundLatLngViaIP: true // LOCATE USER BY IP ADDRESS INSTEAD OF GEOLOCATION -- NOT AS ACCURATE, BUT NO FALLBACK NEEDED
  });

  // MODIFY THE SEARCH WITH ARGUMENTS
  helper.setQuery(query).addNumericRefinement("stars_count", ">=", ratingsFilter);
  
  cuisineFilter.forEach(element => {
    helper.addDisjunctiveFacetRefinement("food_type", element);
  });

  paymentOptionsFilter.forEach(element => {
    helper.addDisjunctiveFacetRefinement("payment_options", element);
  });

  // RETURN A PROMISE WITH THE RESULT OF THE SEARCH
  return new Promise((resolve, reject) => {
    
    // DEFINE FUNCTION TO BE CALLED WHEN helper.search() RETURNS A RESULT
    function onResult(event) {
      helper.removeListener("result", onResult);
      resolve(event.results); // RESOLVE PROMISE WITH THE RESULT
    }

    // ADD EVENT LISTENERS TO THE HELPER
    helper.once("result", onResult); // CALL on_result() WHEN SUCCESSFUL
    helper.once("error", reject); // REJECT PROMISE ON ERROR

    // TRIGGER SEARCH
    helper.search();
  });
}

export default runSearch;
