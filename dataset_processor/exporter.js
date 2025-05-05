import { algoliasearch } from "algoliasearch";
import { readFile } from 'fs/promises';

// SET UP AUTHENTICATION
const appID = "S7MEP37Z1R";
const apiKey = "10d378365771fa4741c471a7971d359d";
const indexName = "restaurants";
const client = algoliasearch(appID, apiKey);

// READ MERGED RESTAURANT DATA
const records = JSON.parse(
  await readFile("./dataset/merged_restaurants.json", "utf8")
);

// DECLARE FUNCTION TO PUSH RECORDS TO ALGOLIA INDEX
async function saveRecordsToIndex(records) {
  const taskIDs = [];

  for (const record of records) {
    try {
      const { taskID } = await client.saveObject({
        indexName,
        body: record,
      });
      taskIDs.push(taskID);
      console.log(`Record with objectID ${record.objectID} saved. Task ID: ${taskID}`);
    } catch (error) {
      console.error(`Error saving record with objectID ${record.objectID}:`, error);
    }
  }

  return taskIDs;
}

// PUSH RECORDS TO ALGOLIA INDEX
saveRecordsToIndex(records).then((taskIDs) => {
  console.log("All records saved. Task IDs:", taskIDs);
});