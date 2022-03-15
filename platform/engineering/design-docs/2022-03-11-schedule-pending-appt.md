# Scheduling Pending Appointments

**Author(s):** Andrew Herzberg  
**Last Updated:** March 11,2022  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Person A_ \[ \], _Person B_ \[ \], ...  

## Overview

### Objective
The goal is to add the feature to the mobile app to schedule pending appointments. This functionality is currently available in `vets-website` so much of the logic can be utilized in the mobile app.

The intended audience is for the engineering team.

### Background
Currently, the `vets-website` scheduling feature is as follows:  

- Verify user is registered at a facility
   - `/v0/user`
- Pick type of care to schedule an appointment for
   - Check community care eligibility  
   - `/vaos/v0/community_care/eligibility/{type of care}`
   - Receive true or false for type of care
- If type of care is eligible, user can select to make appointment request at VA facility or community cares facility
- User is given list of facilities to choose from
  - Get facility data 
  - `/vaos/v2/facilities?children=true&ids[]={facility id}&ids[]={facility id}`
  - Note: facility id's come from registered facilities in `/v0/user`
  - Get additional facility scheduling information such as services provided and if available to schedule request (including child facilities)
  - `/vaos/v2/scheduling/configurations?facility_ids[]={facility_id}&facility_ids[]={facility_id}`
- User chooses facility
  - Check if able to schedule request at given facility and service 
  - `/vaos/v2/eligibility?facility_id={id}&clinical_service_id={service_type}&type=request`
  - Multiple checks and responses are done here:
      - Is this a Cerner facility? if so, return cerner portal link
      - Is primary facility? if not, ensure veteran has had visit within 12-24 months to proceed
      - Is facility allow scheduled requests?, 
      - Is request limit reached?
- If Community Cares facility, choose provider
  - `/facilities_api/v1/ccp/provider?{coordinate information}`
- Choose desired date and times then schedule appointment request and post appointment request
  - `/vaos/v2/appointments` 

### High Level Design
Implementation of this feature will largely follow the logic listed in the background, with the goal of improving the user experience. We will aggregate all consumed APIs at the beginning of the process in order to create a single new endpoint to provide all information needed to schedule a request. It will only list types of care that are supported, along with the facilities that support that type of service. This will benefit the process in multiple ways:
   - Move any business logic from the front end to the back end 
   - Simplify overall backend and front complexity. 
   - Create a better UX experience. Users will know of a service and facility eligibility before selecting it and waiting for a response.  

## Specifics

### Detailed Design
The backend business logic will mirror the process explained in the background above except rather than only querying the selected service and facilities, we will query all registered facilities to create a comprehensive list. If load times get unacceptably long due to front loading all queries, we will explore pre-caching results.

New endpoint data structure:
```json
{
   "data": {
      "type": "schedule-appointment",
      "id": "abe3f152-90b0-45cb-8776-4958bad0e0ef",
      "attributes": {
         "services": [
            {
               "type":"optometry",
               "eligible":"true",
               "cc":[
                  {
                     "name": "Phoenix CC center",
                     "city": "Phoenix",
                     "state": "AZ",
                     "eligible": {
                        "request": "false",
                        "request_reason": "Does not provide chosen service",
                        "direct": "false",
                        "direct_reason": "nil"   
                     }
                  },
                  {
                     "name": "Sun Valley CC Center",
                     "city": "Sun Valley",
                     "state": "OH",
                     "eligible": {
                        "request": "true",
                        "request_reason": "nil",
                        "direct": "false", 
                        "direct_reason": "nil"
                     }
                  }
               ],
               "cc_providers": [
                  {
                     "name": "Ashinoff, Stephen",
                     "address": "31-75 23rd st, Long Island City, NY 11106",
                     "distance": "0.7 Miles"
                  }
               ],
               "va":[
                  {
                     "name": "Cheyenne VA Medical Center",
                     "city": "Cheyenne",
                     "state": "WY",
                     "cerner": "true",
                     "eligible": {
                        "request": "false",
                        "request_reason": "Non-primary facility with no visit within 12-24 months",
                        "direct": "false", 
                        "direct_reason": "nil"
                     }
                  },
                  {
                     "name": "Dayton VA Medical Center",
                     "city": "Dayton",
                     "state": "OH",
                     "cerner": "true",
                     "eligible": {
                        "request": "true",
                        "request_reason": "nil",
                        "direct": "false", 
                        "direct_reason": "nil"
                     }
                  }
               ]
         }
      ]
      }
   }
}
```
Note: Direct scheduling will be hardcoded to false until direct schedule feature is added.

### Code Location
In `vets-api`, a controller will be created called `schedule_appointment_request_controller`. Serializers, models, and services will be placed in their corresponding folders in `modules/mobile/app`

### Testing Plan
Specs will be written for each service, adapter and controller, to provide full code coverage.

### Logging
Logging will be done similar to how other Mobile API endpoints are logged, through the Rails Logger and Sentry.

### Debugging
Debugging will be done similar to how other Mobile API endpoints are debugged, utilizing logs and Sentry to diagnose issues and testing individual endpoints to isolate issues.

### Caveats
To be determined.

### Security Concerns
N/A

### Privacy Concerns
N/A

### Open Questions and Risks
Will aggregating all external requests at the beginning of the process cause long load times? If so, we may want to precache results. 

Are endpoints we'll be consuming reliable enough to have a good user experience?

### Work Estimates
TODO

### Alternatives
Rather than relying on other endpoints, we could create these features from the ground up to ensure we have full control of all parts of development and maintenance but it has been a long established aim of the Mobile API to reuse backend integrations wherever possible and to not add complexity to an already complex system. Creating redundant logic would not serve either of these objectives.

### Future Work
Eventually direct scheduling will be added to this flow as it is in `vets-website`

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
March 11, 2022 | Initial Draft | Andrew Herzberg
