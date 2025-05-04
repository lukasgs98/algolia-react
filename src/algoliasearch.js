import { algoliasearch } from "algoliasearch";
import algoliasearchHelper from "algoliasearch-helper";

// ADD AUTHENTICATION
const appID = "S7MEP37Z1R";
const apiKey = "10d378365771fa4741c471a7971d359d";
const indexName = "restaurants";

// INITIALIZE CLIENT
const client = algoliasearch(appID, apiKey);

// DECLARE ASYNC SEARCH FUNCTION
async function runSearch(query, cuisineFilter, ratingsFilter, paymentOptionsFilter) {
  // INITIALIZE algoliasearch-helper WITH CORRECT FACETS
  const helper = algoliasearchHelper(client, indexName, {
    disjunctiveFacets: ["food_type", "payment_options"]
  });

  // MODIFY THE SEARCH FOR A QUICK START
  helper.setQuery(query)
    .addDisjunctiveFacetRefinement("food_type", cuisineFilter)
    .addDisjunctiveFacetRefinement("payment_options", paymentOptionsFilter)
    .addNumericRefinement("stars_count", "=", ratingsFilter);

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
