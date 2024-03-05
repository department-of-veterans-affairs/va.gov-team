# Legacy Solution Narrative

Creating this file to house legacy decisions found in closed issues and archived repos


## Community Care

**Summary from June 11, 2019**
  - As of this issue, Service type was required and live
  - There was a decision to hold off on reducing the search radius to see what resulted from requiring service type, largely because reducing the search radius for community care searches tends to yield fewer results. which might also impact the default zoom level.

**This issue also documents the error messaging**
- 1- No facilities found
- 2- Search timed out
> The timed out message was revised to add a reminder that the user can still search for community urgent care facilities and to go to the ER if it's an emergency, aligning with a desire to give the user a possible path forward.

## Regarding Homeless Center as VA Clinic
- In this issue, a Homeless Center was identified in Facility Locator as a VA Clinic. As documented, "VA Clinic" is what these types of facilities are named by VA policy, even though it's very confusing to users and the 'solution' will likely be an update to FL where we provide more information about the type of facility it is (beyond just "VA Health", which is insufficient).

## Link to Legacy Directory for "other tools"
- Epic: "Allow users to access the old VA.gov Locations tools from the new VA.gov Facility Locator"

## Data caching
Don't allow data to be purged if the results from arcGIS are empty. 

## State Cemeteries

> From data poc: We are currently adding state cemeteries to NCA’s GIS. Just last week we began reconciling the list of state and tribal cemeteries being maintained by VACO (OEI) with our GIS. The intent was to use internally but see the need for this outside NCA. It appears from the discussion below state cemeteries maintain their data separately and may update it as needed. We noticed some address differences in the VACO list and what is published on the web. In many cases it looks like the cities/counties/states just built more roads so the addresses changed slightly. We are still trying to work these out before committing the records in GIS.

> While we can use the state cemetery points for Vets.gov (will be added to our Enterprise GIS and can be pulled the same as our NCA maintained sites) do we want to show data we don’t maintain? The point locations will never change, but addresses, hours, phone #’s might and don’t think there are any policies in place to update VA. Additionally, we won’t have all of the site information requested in the past (business hours, visitation hours, etc.). If all this can be obtained in a table format we can join and update GIS, but we don’t have the resources to compile/verify it.






