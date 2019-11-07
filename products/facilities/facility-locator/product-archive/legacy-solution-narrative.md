# Legacy Solution Narrative

Creating this file to house legacy decisions found in closed issues and archived repos


## Community Care
**Summary from [18878](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/18878), June 11, 2019**
  - As of this issue, Service type was required and live
  - There was a decision to hold off on reducing the search radius to see what resulted from requiring service type, largely because reducing the search radius for community care searches tends to yield fewer results. which might also impact the default zoom level.

**This issue also documents the error messaging**
- 1- No facilities found
- 2- Search timed out
> The timed out message was revised to add a reminder that the user can still search for community urgent care facilities and to go to the ER if it's an emergency, aligning with a desire to give the user a possible path forward.

## Regarding Facility types
- In this issue, a Homesless Center was identified in Facility Locator as a VA Clinic. As documented in [16749](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/16749), "VA Clinic" is what these types of facilities are named by VA policy, even though it's very confusing to users and the 'solution' will likely be an update to FL where we provide more information about the type of facility it is (beyond just "VA Health", which is insufficient).

## Link to Legacy Directory for "other tools"
- Epic [13647](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13647) "Allow users to access the old VA.gov Locations tools from the new VA.gov Facility Locator"

## Data caching
[11661](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/11661)
- Don't allow data to be purged if the results from arcGIS are empty. 






