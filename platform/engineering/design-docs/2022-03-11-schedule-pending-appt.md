# Scheduling Pending Appointments

**Author(s):** Andrew Herzberg  
**Last Updated:** March 11,2022  
**Status:** Draft | **In Review** | Approved  
**Approvers:** _Person A_ \[ \], _Person B_ \[ \], ...  

## Overview

### Objective
The goal is to add the feature to the mobile app to schedule pending appointments. This functionality is currently available in `vets-website` so much of the logic can be utilized in the mobile app.

The intended audience is for the engineering team.

### Background
Currently, the `vets-website` v2 scheduling feature is as follows:

![XL9BReCm4DrpYhb0Ue0igaIehRfgrQZT4tYGQOrDFKCaRbz3BOXYb6mGiZtly-RjH0klVMkoJu6dpICTuC_mMyfTs_QMTQ2yy11wCjpmaSruye7V7g94cNKACgXrIs_M35IUKFu8rSw7NoUmf4C7SZL9mEKIsJy-RG9LeBnB99spWkmq4RbnSX8QnaxE2OI-zXJ8yfoudhv2c00C4alFHJd2CeHURP3O5ihEhhgP3-jbflQk](https://user-images.githubusercontent.com/1910447/158439763-fd97627e-1bb7-4053-bb30-86436b64a2a4.png)

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
  - See parameters listed in `Detailed Design` below

### High Level Design
Implementation of this feature will be broken into five endpoints:
- Facility Info
   - List facilities information. Sorted by either home address, current location, alphbetically (determined by sort parameter). 
   - This is to be mapped to the facility ids in the service eligibility endpoint.
- Service Eligibility
   - For each service, will provide cc elgibility and list of va facilities that provide service.
- CC Providers
   - List cc providers information. Sorted by either home address, current location, or major cities with registered facilities (determined by sort parameter).
- Facility Eligibility
   - Will take list of facilities, type of service and type of eligibility (request or direct. Will only allow request until direct scheduling feature is built out )
   - Will return each facility eligibility. If not eligibile, will give reason why
- Create Appointment Request
   - Creates appointment request

These endpoints will largely follow the logic listed in the background, with changes to improving the user experience. We will provide as much information as possible in the beginning of the process, to avoid users will being denied making an appointment already part way into the process

Note: These endpoint will be utilizing VAOS v2 process.

## Specifics

### Detailed Design

#### Facility Info Endpoint 
Will consume following VAOS endpoints:
   - `/vaos/v2/facilities?children=true&ids[]={facility id}&ids[]={facility id}`
      - Will only provide user registred facilities but return all children as well. 

Parameters:
   - sort: string
      - by home address, by current location, alphbetical 
   
```json
{
   "data": {
      "type": "facility-info",
      "id": "abe3f152-90b0-45cb-8776-4958bad0e0ef",
      "attributes": {
         "facilities": [
            {
               "id": "983AB",
               "name": "Sun Valley CC Center",
               "city": "Sun Valley",
               "state": "OH",
               "cerner": "false",
               "miles": "1.0",
               "clinics": []
            },
            {
               "id": "983",
               "name": "Cheyenne VA Medical Center",
               "city": "Cheyenne",
               "state": "WY",
               "cerner": "true",
               "miles": "1.2",
               "clinics": []
            },
            {
               "id": "984",
               "name": "Dayton VA Medical Center",
               "city": "Dayton",
               "state": "OH",
               "cerner": "true",
               "miles": "0.6",
               "clinics": []
            }
         ]
      }
   }
}
```
Note: Clinics are only used in direct scheduling. Adding field to prepare for adding direct scheduling later but will still empty until then.

#### Service Eligibility Endpoint 
Will consume following VAOS endpoints:
   - `/vaos/v0/community_care/eligibility/{type of care}` 
      - Will be called for every type of service (~14)
   - `/vaos/v2/scheduling/configurations?facility_ids[]={facility_id}&facility_ids[]={facility_id}`
      - Will get schedule configurations for all registred facilities, including children. 

Parameters:
   - facility_ids: array
      
Endpoint data structure:
```json
{
   "data": {
      "type": "service-eligibility",
      "id": "abe3f152-90b0-45cb-8776-4958bad0e0ef",
      "attributes": {
         "services": [
            {
               "type":"optometry",
               "cc_eligible":"true",
               "va":["983","984"]
            },
            {
               "type":"amputation",
               "cc_eligible":"false",
               "va":[]
            }
         ],
      }
   }
}
```

#### CC Providers Endpoint
Will consume following VAOS endpoints:
   - `/facilities_api/v1/ccp/provider?{coordinate information}`

Parameters:
   - sort: string
      - by home location
      - by current location
      - by city registered facilties reside in
```json
{
   "data": {
      "type": "cc-providers",
      "id": "abe3f152-90b0-45cb-8776-4958bad0e0ef",
      "attributes": {
         "cc_providers": [
            {
               "name": "Ashinoff, Stephen",
               "address": "31-75 23rd st, Long Island City, NY 11106",
               "distance": "0.7 Miles"
            },
            {
               "name": "Nelson, Linda",
               "address": "2152 N 21st Ln, Long Island City, NY 11106",
               "distance": "1.2 Miles"
            }
         ]
      }
   }
}
```


#### Facility Eligibility Endpoint
Will consume following VAOS endpoints:
   - `/vaos/v2/eligibility?facility_id={id}&clinical_service_id={service_type}&type=request`
      - Will be called for every facility eligible for the chosen type of service.
Parameters:
   - facility_ids: array
   - service_type: string
   - type: string
      - Will always be request until direct scheduling feature is built out
```json
{
   "data": {
      "type": "facility-eligibility",
      "id": "abe3f152-90b0-45cb-8776-4958bad0e0ef",
      "attributes": {
         "facilities": [
            {
               "id": "983",
               "eligible": "true",
               "reason": "nil",
             
            },
            {
               "id": "984",
               "eligible": "false",
               "reason": "Non-primary facility with no visit within 12-24 months"
            }
         ]
      }
   }
}
```

#### Create Appointment Request Endpoint
This endpoint will act as a pass through directly passing the parameters given to the VAOS endpoint `/vaos/v2/appointments`. 

Payload:
```json
{
   "kind":"clinic",
   "status":"proposed",
   "locationId":"983GC",
   "serviceType":"optometry",
   "reasonCode":{
      "coding":[
         {
            "code":"Other"
         }
      ],
      "text":"Other"
   },
   "comment":"test",
   "contact":{
      "telecom":[
         {
            "type":"phone",
            "value":"7036753607"
         },
         {
            "type":"email",
            "value":"helen.hoenig@va.gov"
         }
      ]
   },
   "requestedPeriods":[
      {
         "start":"2022-03-17T00:00:00Z",
         "end":"2022-03-17T11:59:00Z"
      }
   ],
   "preferredTimesForPhoneCall":[
      "Morning"
   ]
}
```

### Code Location
In `vets-api`, 2 controllers will be created. one for checking eligibility called `appointment_eligibility_controller` and one for creating the appointment requests called `appointment_request_controller`. Serializers, models, and services will be placed in their corresponding folders in `modules/mobile/app`

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

This uses new VAOS endpoints that have not yet been finalized. By the time we finalize our implementation, theirs should also be, but we will need to ensure that is the case, so consumed APIs don’t change out from underneath us. 

Are endpoints we'll be consuming reliable enough to have a good user experience?

### Work Estimates
5-6 weeks.

### Alternatives
- Rather than relying on other endpoints, we could create these features from the ground up to ensure we have full control of all parts of development and maintenance but it has been a long established aim of the Mobile API to reuse backend integrations wherever possible and to not add complexity to an already complex system. Creating redundant logic would not serve either of these objectives.

- Use v1 scheduling endpoints. Since v2 will soon be finalized, most likely around the time we finalize the implementation of this feature, it makes sense to use the new process so we don't have to change our process shortly after finishing it. v2 also will be easier to use and will simplify complexity on our side.

- I originally wanted to aggregate all consumed VAOS endpoint into a single endpoint in order to front load all queries and provide all information from the start of the process. This became inpractical for a number of reasons:
   - `/vaos/v2/eligibility` check would have need to be called too many times. 
      - (# of registered facilities. Including child facilities) X (# of types of service). 
      - If a user has 2 registered facilities, it's not uncommon for that add up to 12 total facilities when including children facilities. 
      - There are ~14 types of service when including subtypes. 
      - 12*14=168
      - Double 168 when direct scheduling is added
   - Facilties and cc providers need to have the option to sort by different criteria. Separate endpoint needed to be created to re-make the call with new sorting criteria.

### Future Work
Eventually direct scheduling will be added to this flow as it is in `vets-website`

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
March 11, 2022 | Initial Draft | Andrew Herzberg
