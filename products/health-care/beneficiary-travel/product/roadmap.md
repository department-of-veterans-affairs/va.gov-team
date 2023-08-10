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


## Next for va.gov focused team 

- Refactor the Travel Pay routes out of the PCI API into their own module
- Spike: LHDI for a possible solution instead of using vets-api
- Create an app on VA.gov that allows a Veteran to submit a Simple Claim
- Expand the experience on VA.gov that allows a Veteran to submit a Next Step Claim
- Integration with the Appointments team. 
- Integration with the static BTSSS page on va.gov
- Create and add any supporting analytics


## Next for API focused team 

- Address the [Known Issues](#known-issues) (performant, Payment Facility)
- Update API to create claims when the appointment is marked complete
- Create a performant endpoint for determining a Veteran Eligility 
- Support teams integration with Claims API; including documentation, meetings, etc.
  - va.gov BTSSS team
  - Appointments team
  - Mobile team 
- Create and add any supporting analytics
- Aid in creating and delievering on `how to make better claims get processed more efficiently`