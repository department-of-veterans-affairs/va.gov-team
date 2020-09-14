# Search Implmentation

## Schools or Employers searches

An institution comes from data provided in the Weams CSV along with other CSVs.

When searching for either a “Schools” or an “Employers” “Type of Institution” results will meet all of the following:
- in Weams CSV
- Approved
- Not a VET TEC provider
- In the selected “Type of Institution” category
- Is not an extension

Additionally at least one of the following must be true:
- The facility_code equals the search term
- The city equals the search term
- The zip equals the search term
- The alias contains the search term
- The name is at least 40% similar to the search term after both name and search term have had common words and characters removed

These results are then sorted by a calculated weight followed by alphabetical order of the name.
The calculated weight is determined by adding all of the following together:
- If the alias equals the search term: + 1
- If the alias contains the search term as standalone word: + 1.4; ex “smith” +0 but “MIT” +1;
- If the city equals the search term: + 1
- If the name equals the search term: + 1;
- If the name starts with the search term: + 1;
- The similarity of the name and the search value; The value added is between 0.0-1.0;
- The similarity of the name and the search value after both name and search term have had common words and characters removed; The value added is between 0.4-1.0
- The number of students divided by the max number of students within the provided data; this is multipled by 1/3 to reduce weight; ex (8000/17635)/3 = +0.15

## VET TEC searches

A VET TEC program comes from data provided in the Programs CSV.

When searching for a VET TEC program results will meet all of the following:
- In Programs CSV

Additionally zero or more of the following must be true:
- The associated institution's name is at least 40% similar to the search term
- The associated institution's physical city equals the search term
- The associated institution's physical zip equals the search term
- The associated institution's facility_code equals the search term
- The description contains the search term
