# Things to know about the 10-10EZ
This document contains tidbits, odds & ends, and information about the 10-10EZ form, development, testing and anything else that isn't captured in other documents.

### Abbreviations
- ES = Enrollment System/Service
- EE/E&E = Eligibility and Enrollment
- HEC = Heathcare Enrollment Services
- HCA - Health Care Application (AKA 10-10EZ)
- ..

### Development
- 7/29/22 - The Place of Birth state dropdown must only include 50 states, DC and Other. ES will not accept any other values at this time.
- 11/12/22 - The Certificate CN being sent to ES for SSL (Security layers) is "es-prod.va.gov"  
     - If this changes, we need to be sure to communicate to Joshua Faulkner and ES team.  If Joshua is not available, update Tarsha Tremble to pass on the communications.
- 1/31/23 - Here is the [10-10EZ Schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/eccf2e8f98967e2d8841331935e8f8ce8a36e74d/dist/10-10EZ-schema.json)



### Testing
- 8/5/22 When testing end2end in **Preprod** environment, the testing team uses Boston for the Facility locator, which is one of 4 acceptable locations for ES
- 8/5/22 When testing end2end in **SQL** environment, the testing team uses Spokane for the Facility locator
- 8/5/22 our Staging environment points to the Enrollment System SQL environment (not pre-prod)


### Miscellaneous
- Military History - Prefilled data
     - Military history is prefilled for authenticated Veterans.
     - This information is pulled from the VA.gov Profile
     - The VA.gov Profile pulls this information from the VA Profile (different team/system)
     - The VA Profile pulls the information from the DoD DEERS and VADIR repository
     - Technical specs and details can be found in this [VA.gov Profile Backend document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/military_info/backend_documentation.md)

- Tarsha Tremble has moved to another position and is no longer the POC Project manager for 10-10EZ.
     - Update coming soon.  Until then, we can contact Edward Horne (edward.horne@va.gov)
