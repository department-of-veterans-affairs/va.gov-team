# Scheduling Pending Appointments

**Author(s):** Andrew Herzberg  
**Last Updated:** March 11,2022  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Person A_ \[ \], _Person B_ \[ \], ...  

## Overview

### Objective
The goal is to add the feature to the mobile app to schedule pending appointments. This functionality is currently available in `vets-website` so much of the logic can be utilized in the mobile app. A non-goal is to migrate as much data transformation/logic from `vets-website` front end into the to `vets-api` mobile module. 

The intended audience is for the engineering team.

### Background
Currently, the `vets-website` scheduling feature is as follows:  

- Verify user is registered at a facility
   - `/v0/user`
- Pick type of care to schedule an appointment for
   - Check community care eligibility  
   - `/vaos/v0/community_care/eligibility/{type of care}`
   - Recieve true or false for type of care
- If type of care is eligible, user can select to make appointment request at VA facility or community cares facility
- User is given list of facilities to choose from
  - Get facility data 
  - `/vaos/v2/facilities?children=true&ids[]={facility id}&ids[]={facility id}`
  - Note: facility id's come from registered facilities in `/v0/user`
  - Get additional facility scheduling information such as services provided and if available to schedule request (including childen facilities)
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
- Choose desired date and times then schedule appointment request
  - `/vaos/v2/appointments` 

### High Level Design
Implementation of this feature will largely follow the logic listed in the background with a few key differences to improve user experience. Key differences are as follows:
- Check facility eligibility (`/vaos/v2/eligibility`) before user select facility and return elgibility status and if not elgibile, reason for unelgibility (EX: 'Non-primary facility - no appointment in last 12-24 months')
- Create new endpoint to provide list of type of care that are supported (accept appointment requests and at at least one registered facility provides that service). For each type of service, provide elgibility status of each user registered facility and if not elgibible, why it is not. This prevents users from choosing a type of care, then later being told no facilities they can schedule with support it. 

- Move data manipulations logic from `vets-website` to `vets-api` mobile module 

## Specifics

### Detailed Design
New endpoint data structure

### Code Location
In `vets-api`, a controller will be created called `schedule_appointment_request_controller`. Serializers, models, and services will be placed in their corresponding folders in `modules/mobile/app`

### Testing Plan
Specs will be written for each service, adapter and controller, to provide full code coverage.

### Logging
Logging will be done similarily to how other Mobile API endpoints are logged, through the Rails Logger and Sentry.

### Debugging
Debugging will be done similarily to how other Mobile API endpoints are debugged, utilizing logs and Sentry to diagnose issues and testing individual endpoints to isolate issues.

### Caveats
To be determined.

### Security Concerns
N/A

### Privacy Concerns
N/A

### Open Questions and Risks
Are endpoints we'll be consuming reliable enough and quick enough to have a good user experience?

### Work Estimates
_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives
- Rather then relying on other endpoints, we could create these features from the ground up to ensure we have full control of all parts of development and maintaince but it has been a long established objective of the Mobile API to reuse backend integrations wherever possible and to not add complexity to an already complex system. Creating redudant logic would not serve either of these objectives

### Future Work
Eventually direct scheduling will be added to this flow as it is in `vets-website`

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
March 11, 2022 | Initial Draft | Andrew Herzberg
