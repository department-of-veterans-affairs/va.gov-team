# Performance Product Thesis 
## Why are we working on this next?
- Changes made to integrate Community Care into Va.gov Facility Locator introduced latency issues which have not been able to be prioritized. 
- Existing functionality should return results with performance consistent with private sector inducstry standards before other work begins. 
## What are the use cases for this?
- As a Veteran or caregiver, I want to be able to quickly search for a Community Care provider. 
## What problems do we need to solve?
- Users searching for Community Care locations have reported that it could take up to 2 minutes to return data.
  - Instead of making a call to a database, it makes a call to the PPMS web service, the Community Care API. Phone numbers, addresses and services are not returned in the first call  to PPMS. In order to get that information, a second call is made for every every result they get up to 20, to get the additional information and add it to the record before returning it to the front end.
## What cross-functional teams should be included?
## What are the future considerations?
- We anticipate future design changes for Community Care workflows. 
## What is our KPI for this work?
- Performance metrics (TBD)
## Further Reading
- Facility Locator PPMS#977 (epic)
- [Issues](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/facility-locator-update-outline-18058/Products/Global/Facilities_Locator/community_care/Issues.md)
- PPMS API docs
