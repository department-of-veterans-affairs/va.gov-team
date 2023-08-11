# Travel Pay Road Map

## Definations

- **Simple Claim** : A round trip claim for a single appointment that a Veteran used their own vehicle to travel to and from. 
- **Next Step Claim** : A `yet be determined` use case to allow Veterans to submit a more than a Simple claim 

## Completed Summer 2023

- PCI Pilot has concluded. See results in [../discovery/README.md] TL;DR; Success
- Analytics have been created/reported in the early stages
- MVP for GET status of a claim has been completed. 
- Updated the submit endpoint to handle multiple appoinments 

## Known issues 

- Performant Sumbit claim is currently still in development
- There is an Thing of interest happening with Claims being created with a `Payment Facility not verified VAMC` error
- Claims are being created before appointments are marked complete. This is leading to ever claim to be reviewed by a Travel Clerk.


## Next for API focused team - Fall 2023

- Address the [Known Issues](#known-issues) (performant, Payment Facility)
- Update API to create claims when the appointment is marked complete
- Create a performant endpoint for determining a Veteran Eligility 
- Support teams integration with Claims API; including documentation, meetings, etc.
  - va.gov BTSSS team
  - Appointments team
  - Mobile team 
- Create and add any supporting analytics
- Aid in creating and delievering on `how to make better claims get processed more efficiently`

## Next for va.gov submission tool focused team - Fall 2023
- Refactor the Travel Pay routes out of the PCI API into their own module
- Spike: LHDI for a possible solution instead of using vets-api
- Create an app on VA.gov that allows a Veteran to submit a Simple Claim
- Expand the experience on VA.gov that allows a Veteran to submit a Next Step Claim
- Integration with the Appointments team. 
- Integration with the static BTSSS page on va.gov
- Create and add any supporting analytics

## Next for va.gov Appointments team - Fall 2023

- Add a link to the submission tool for past appointments 
- Query for claim status when viewing past appointments 

## Next for va.gob mobile team - Fall 2023

- Add ability to submit a simple claim for relative appointments
- Integrate viewing claims status in the claims/benefits section. 

## Next for va.gov benefits - Winter 2023/Early 2024

- Start design research into where viewing claim status could be incorporated 

## Next for va.gov `My VA team` and/or cartography team /Early 2024

- Start design research into where viewing claim status could be incorporated 
