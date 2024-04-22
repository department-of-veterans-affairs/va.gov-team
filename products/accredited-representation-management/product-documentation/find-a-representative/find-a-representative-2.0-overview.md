# Find a Representative 2.0 Overview

Developed by the Accredited Representation Management team, the Find a Representative product will allow Veterans to search for an accredited representative on VA.gov.

The following overview demonstrates the changes we'll be implementing for version 2.0, based on research findings and our discovery of inaccurate representative data.  This experience will continue to include desktop & mobile experiences and the pathway is `/src/applications/representative-search`

#### Find a Representative
1. Search
    1. Rep definitions
    2. Required fields
        1. Rep Type
            1. ~Veteran Service Organization~
            2. Veteran Service Officer 🆕
            3. Attorney
            4. Claims agent
        2. Location 
            1. Single consolidated field that accepts address 1, city, state, zip code
            2. `Use my location` feature to populate this location field
   3. Optional fields
      1. Name of accredited representative (accepts individual representative first/last names and organization names)
2. Display search results
   1. List display
      1. Distance in miles
      2. Name
      3. Address
      4. Phone number
      5. Email 🆕
   3. Filter results by
      1. Distance (Closest to farthest)
      2. Representative Name / Organization Name (First/last name A to Z and Z to A)
   4. Search Radius 
      1. Default to 50 miles
      2. Drop down for user to slect additional options (50, 100, 150, 200, 250, 300, 350, 400, 450 miles + show all) 🆕
3. Include transparency around data accuracy 🆕
   1. Disclaimer/alert up top that our listings are a work in progress
   2. Option for users to flag inaccurate data in the search results 
    

## Future Iteration

1. Partner with OGC and ARF to consider additional search parameters (email, website, remote support, gender, service area, capacity, ratings, attorney specialization)
2. Satisfaction survey to assess the user perceptions of our product experience
3. Consider adding [Representative Status Widget](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/mvp-representative-status-widget.md) to the experience
4. Integrate with OGC APIs for direct access to accredited representative data
5. Examine user-reports of inaccurate data and consider hiding information if it's been reported by x amount of users
6. Consider adding organizations back in (perhaps search for an organization and see all representatives within that organization, in the search radius)
