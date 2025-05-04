import { algoliasearch } from "algoliasearch";
import algoliasearchHelper from "algoliasearch-helper";

const appID = "S7MEP37Z1R";
const apiKey = "10d378365771fa4741c471a7971d359d";
const indexName = "restaurants";

// INITIALIZE CLIENT
const client = algoliasearch(appID, apiKey);

// DECLARE ASYNC SEARCH FUNCTION
async function runSearch(query) {
  // INITIALIZE algoliasearch-helper WITH CORRECT FACETS
  const helper = algoliasearchHelper(client, indexName, {
    disjunctiveFacets: ["food_type", "stars_count", "payment_options"]
  });

  // MODIFY THE SEARCH FOR A QUICK START
  helper.setQuery(query).addDisjunctiveFacetRefinement("food_type", "Italian");

  // RETURN A PROMISE WITH THE RESULT
  return new Promise((resolve, reject) => {
    // DEFINE FUNCTION TO BE CALLED WHEN helper.search() RETURNS A RESULT
    function onResult(event) {
      helper.removeListener("result", onResult);
      resolve(event.results); // Resolving with the results
    }

    // ADD EVENT LISTENERS TO THE HELPER
    helper.once("result", onResult);
    helper.once("error", reject); // Reject the promise on error

    // TRIGGER SEARCH
    helper.search();
  });
}

export default runSearch;
