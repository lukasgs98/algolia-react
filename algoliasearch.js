import { algoliasearch } from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const appID = "S7MEP37Z1R";
const apiKey = "10d378365771fa4741c471a7971d359d";
const indexName = "test-index";

const client = algoliasearch(appID, apiKey);

const helper = algoliasearchHelper(client, indexName);

helper.on('result', function (event) {
    console.log(event.results);
  });

helper.search();