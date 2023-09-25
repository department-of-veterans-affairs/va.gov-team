# Travel Pay Road Map

## Definitions

- **Simple Claim** : A round trip claim for a single appointment that a Veteran used their own vehicle to travel to and from. 
- **Next Step Claim** : A `yet be determined` use case to allow Veterans to submit a more than a Simple claim 


## Completed Summer 2023

- PCI Pilot has concluded. See results in [../discovery/README.md] TL;DR; Success
- Analytics have been created/reported in the early stages
- MVP for GET status of a claim has been completed. 
- Updated the submit endpoint to handle multiple appointments 

## Known issues 

- Performant Submit claim is currently still in development
- There is an Thing of interest happening with Claims being created with a `Payment Facility not verified VAMC` error
- Claims are being created before appointments are marked complete. This is leading to ever claim to be reviewed by a Travel Clerk.


## Next for API focused team - Fall 2023


### Top 3 Priorities  

1. Address the [Known Issues](#known-issues) (performant, Payment Facility)
    - Update API to create claims when the appointment is marked complete
1. Expand the performant Submit Claim endpoint to support more use cases 
1. BTSSS Veteran status API endpoint ; Given a Veteran return their BTSSS status (eligibility, account finalized, etc)

### Other priorities

1. Create and add any supporting analytics
1. Support teams integration with Claims API; including documentation, meetings, etc.
    - va.gov BTSSS team
    - Appointments team
    - Mobile team 
1. Aid in creating and delievering on `how to make better claims get processed more efficiently`
1. Add functionality to expose payment status (where, when, etc)
   - Could be apart of the existing status endpoint and include how much was paid
1. Sending Notifications to a Veteran on Claim status updates. 


## Next for va.gov submission tool focused team - Fall 2023


### Top 3
1. Create an accessible and monitored app on VA.gov linked from the appointments app that allows a Veteran to submit a Simple Claim
  1. Integration with the Appointments team. 
1. Create an experience on VA.gov that can be expanding to support Veteran submitting a `Next Step Claim``
1. Integration with the static BTSSS page on va.gov

### Other
1. SPIKE: LHDI for a possible solution instead of using vets-api
1. Create and add any supporting analytics 
1. SPIKE: What does a low auth submit app look like

## Next for va.gov Appointments team - Fall 2023

1. Add a link to the submission tool for past appointments 
1. Query for claim status when viewing past appointments 

## Next for va.gov mobile team - Fall 2023

1. Add ability to submit a simple claim for relative appointments
1. Integrate viewing claims status in the claims/benefits section. 

## Next for va.gov benefits - Winter 2023/Early 2024

1. Start design research into where viewing claim status could be incorporated 

## Next for va.gov `My VA team` and/or cartography team /Early 2024

1. Start design research into where viewing claim status could be incorporated 

