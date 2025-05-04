import { algoliasearch } from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

// ADD AUTHENTICATION
const appID = "S7MEP37Z1R";
const apiKey = "10d378365771fa4741c471a7971d359d";
const indexName = "restaurants";
    
// INITIALIZE CLIENT
const client = algoliasearch(appID, apiKey);
   
// DECLARE ASYNC SEARCH FUNCTION -- CODE WILL PAUSE UNTIL IT RESOLVES
async function runSearch() {

    // INITIALIZE algoliasearch-helper WITH CORRECT FACETS
    const helper = algoliasearchHelper(client, indexName, {
      disjunctiveFacets: ["food_type", "stars_count", "payment_options"]
    });
      
    // MODIFY THE SEARCH FOR A QUICK START
    helper
      .setQuery("San Diego")
      .addNumericRefinement("stars_count", "=", 5);
      
    // INITIALIZE SEARCH RESULTS VARIABLE WITH OUTCOME OF THE SEARCH
    const searchResults = await (async function (helper) {

      // RETURN A PROMISE -- REPRESENTING OUTCOME OF THE SEARCH
      return new Promise((resolve, reject) => {

        // DEFINE FUNCTION TO BE CALLED WHEN helper.search() RETURNS A RESULT
        function onResult(event) {
          helper.removeListener("result", onResult);
          resolve(event.results);
        };
      
        // ADD EVENT LISTENERS TO THE HELPER
        // WHEN event = "result", CALL onResult()
        helper.once("result", onResult);
        // WHEN event = "error", PROMISE IS REJECTED -- HANDLING UNDEFINED‚
        helper.once("error", reject);
            
        // TRIGGER SEARCH
        helper.search();
      });

    })(helper);
      
    console.log('Processing time:', searchResults.processingTimeMS);
    console.log('Total hits:', searchResults.nbHits);
};

export default runSearch;
