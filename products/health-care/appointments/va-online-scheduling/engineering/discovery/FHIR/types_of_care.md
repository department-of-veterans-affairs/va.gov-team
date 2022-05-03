# Type of care

Status: Blocked by outstanding questions

## Services
### Current services used
- None, but UI types are defined here
  - https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/utils/constants.js
- Current backend types defined in 
  - `/VeteranAppointmentRequestService/v4/rest/clinical-services/types-of-care`
  - `/VeteranAppointmentRequestService/v4/rest/community-care-services/type-of-cares`
### Equivalent FHIR resource
- Unclear, possibly some property on HealthcareService

## Data
### Data to FHIR model mapping
- Type of care id/stop code (**HealthcareService.serviceType?**)

### Missing/incomplete data list
- N/A 

### Differences in scope of data returned
- We're not fetching these types now

## Outstanding questions
- What is the HealthcareService.type mapping to the current types of care?

### Answered questions
- How are stop codes used in VSP?
  - Stop codes combinations will be mapped to serviceType on HealthcareService, which will map to our existing types of care in some way
- Will we be able to only show Locations that support given types of care with VSP?
  - Yes, we will be able to do this through collecting the Locations included on a HealthcareService search
