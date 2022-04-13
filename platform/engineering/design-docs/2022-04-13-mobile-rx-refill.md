# Mobile Rx Refill

**Author(s):** Andrew Herzberg  
**Last Updated:** April 13,2022  
**Status:** **Draft** | In Review | Approved
**Approvers:** FE, BE, Product, Design

## Overview

### Objective
The goal is to add the feature to the mobile app to view prescriptions, their tracking information and refill eligible prescriptions. This functionality is currently available on a vets-api service so much of the logic can be utilized from that. 

### Background

### High Level Design
Implementation of this feature will be broken into 3 endpoints:
  - Rx History 
  - Request Refill
  - Rx Tracking 
## Specifics

### Detailed Design

#### Rx History Endpoint 

Considerations: 
  - The station number and facility name fields do not seem to map directly to a facility id we can locate. Investigating further to see if this is just bad test data or if that is actually the case.
  - We may want to separate out the active history into a separate endpoint since it uses a different MHV service but the prescription controller this is based off of keeps it in one endpoint.

Parameters:
   - refill_status: string
      - If set to "Active", will only show active prescriptions that are available for refill
      - Active is a separate MHV endpoint so cannot be lumped in with the filter parameter 
   - page: integer
      -  the paginated page to fetch
      -  can be omitted for when pagination is not wanted. Like for active prescriptions to refill. 
   - per_page: integer
      - the number of items to fetch per page
      - Will want to set a hard limit on this to avoid tracking calls from being too expensive.
   - filter: string
      - Can filter by status (active, deleted, discontinued, discontinuedByProvider, discontinuedEdit, expired, hold, nonVerified, providerHold, refillinprocess, submitted, suspended, unknown, activeParked)

```json
{
  "data": [
    {
      "type": "rxHistory",
      "id": "3097e489-ad75-5746-ab1a-e0aabc1b426a",
      "attributes": {
        "refillStatus": "refillinprocess",
        "refillSubmitDate": "1/30/2017",
        "refillDate": "1/30/2017",
        "refillRemaining": 5,
        "facilityName": "DAYT29",
        "isRefillable": false,
        "isTrackable": false,
        "prescriptionId": 13568747,
        "orderedDate": "1/30/2017",
        "quantity": 10,
        "expirationDate": "1/30/2017",
        "prescriptionNumber": "2719536",
        "dispensedDate": "1/30/2017",
        "stationNumber": "989"
      }
    },
    {
      "type": "rxHistory",
      "id": "3097e489-ad75-5746-ab1a-e0aabc1b426a",
      "attributes": {
        "refillStatus": "discontinued",
        "refillSubmitDate": "1/30/2017",
        "refillDate": "1/30/2017",
        "refillRemaining": 5,
        "facilityName": "DAYT29",
        "isRefillable": false,
        "isTrackable": false,
        "prescriptionId": 13568747,
        "orderedDate": "1/30/2017",
        "quantity": 10,
        "expirationDate": "1/30/2017",
        "prescriptionNumber": "234323",
        "dispensedDate": "1/30/2017",
        "stationNumber": "989"
      }
    }
  ]
}
```
#### Request Refill Endpoint 

Considerations: 
  - MHV API docs specify that this the service used for posting a refill is technically just requesting a refill and a returned 200 success response is just indicating a "Successful retrieval of Active Prescriptions". For this reason, a new fetch of RX history will be required to see a change of status. 

Parameters:
   - id: integer
      - rx number
   
```json
{
   "data": {
      "type": "rx-refill",
      "id": "abe3f152-90b0-45cb-8776-4958bad0e0ef",
      "attributes": {
         "status": "success"
      }
   }
}
```
#### Rx Tracking Endpoint 

Considerations: 
   - This endpoint is currently under the assumption that FE will be utilizing the USPS api to get all needed tracking data. With this assumption, FE will only need the tracking # of the prescriptions to use the USPS api.
   - The Rx tracking service used does have additional tracking information beyond the tracking number but misses many key data points such as the expected delivery, tracking destination history, map, etc. Because the expected delivery date is on the index page, this data alone cannot be used on the index page. It may be preferable to exclude the expected delivery date from the index page, so the USPS api is not needed until a particular shipment is clicked.
   - The current wireframes have all shipments listed on index page, this means that BE will need to call to check if every prescription on the current page to see if there is a corresponding shipment to be tracked for it. This requires that the Rx history endpoint pagination is used, otherwise, checking tracking for every prescription of that user could get very expensive and slow.  
   - There is also some performance implications aside from the parallel calls. FE cannot make this call until Rx history endpoint is returned with the rx numbers. FE then needs to wait for this Rx Tracking endpoint to return with the tracking numbers to call the USPS api.

Parameters:
   - ids: array of integers
      - rx numbers
   
```json
{
   "data": [
     {
        "type": "rx-tracking",
        "id": "12345",
        "attributes": {
           "tracking_number": "23049471232"
        }
     },
     {
        "type": "rx-tracking",
        "id": "5678",
        "attributes": {
           "tracking_number": "23049473322"
        }
     },
     {
        "type": "rx-tracking",
        "id": "4923",
        "attributes": {
           "tracking_number": "nil"
        }
     }
   ]
}
```
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


### Work Estimates
2-3 sprints

### Alternatives

### Future Work
None currently planned.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
April 13, 2022 | Initial Draft | Andrew Herzberg
