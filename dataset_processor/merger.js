import { readFile, writeFile } from "fs/promises";
import { parse } from "csv-parse/sync";

// PARSE BOTH FILES IN DATASET INTO ARRAY OF OBJECTS
// restaurants_list.json
const restaurantsList = JSON.parse(
  await readFile("./dataset/restaurants_list.json", "utf8")
);

// restaurants_info.csv
const csvText = await readFile("./dataset/restaurants_info.csv", "utf8");
const restaurantsInfo = parse(csvText, {
  columns: true,
  skip_empty_lines: true,
  delimiter: ";"
});

// CREATE LOOK-UP FOR RESTAURANT INFO BY OBJECTID
const infoById = new Map(
  restaurantsInfo.map(info => [info.objectID, info])
);


// APPEND RESTAURANT LIST WITH RESTAURANT INFO AND CREATE NEW ARRAY
const mergedRestaurants = restaurantsList.map(restaurant => {
  const extraInfo = infoById.get(restaurant.objectID.toString());
  const numericFields = ["stars_count", "reviews_count"];
  const parsedInfo = extraInfo
  ? Object.fromEntries(
      Object.entries(extraInfo)
        .map(([key, value]) => {
          if (numericFields.includes(key)) {
            const number = parseFloat(value);
            return [key, isNaN(number) ? undefined : number];
          }
          return [key, value];
        })
    )
  : {};
  return {
    ...restaurant,
    ...(parsedInfo || {})
  };
});


// WRITE MERGED DATA INTO NEW JSON
await writeFile(
  "./dataset/merged_restaurants.json",
  JSON.stringify(mergedRestaurants, null, 2),
  "utf8"
);