# Find a Representative 1.0 (MVP) Overview

Developed by the Accredited Representation Management team, the Find a Representative product will allow Veterans to search for an accredited representative on VA.gov.

The MVP will include desktop & mobile experiences and the pathway is `/src/applications/representative-search`

⚠️ Due to concerns around the data powering our search results being only ~50% accurate, the team has decided not to release at 1.0 and move right into [version 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/find-a-representative-2.0-overview.md).

#### Find a Representative
1. Search
     1. Location 
         1. Single consolidated field that accepts address 1, city, state, zip code
         2. `Use my location` feature to populate this location field
     2. Select type of rep (single select)
        1. Veteran Service Organization (VSO)
        2. Attorney (Lawyer)
        3. Claims agent
     3. Search by name
        1. Organization name
        2. Representative first name
        3. Representative last name
     4. Rep definitions
        1. Veteran Service Organization (VSO)
        2. Attorney
        3. Claims agent
2. Display search results
   1. List display
   3. Filter results by
      1. Distance
      2. Representative Name / Organization Name
    

## Future Iteration

1. Consider additional search parameters
   1. VSO Representative rep type
   2. Email
   3. Remote support
   4. Gender
3. Satisfaction survey to assess the user perceptions of our product experience
4. Consider adding [Representative Status Widget](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/mvp-representative-status-widget.md) to the experience
5. Integrate with OGC APIs for direct access to accredited representative data
