# Facility Filtering and setup
- This document is informational as to how the Facility search was set up and how we needed to filter out certain facilities.
- This search functionality is dependent on a parent/child relationship between facilities with and without caregiver support.

## Facility set up
- The facility search uses the Facilities API through Lighthouse
- The Caregiver tech team provides any updates if a facility gains or loses caregiver support
- This ensures the list of facilities that return are valid choices to be displayed
     - The facilities that display in the search results either have caregiver support services or have a parent that has caregiver support services
 
