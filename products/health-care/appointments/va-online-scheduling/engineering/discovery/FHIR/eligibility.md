# Eligibility

Status: Blocked by questions

## Services
### Current services used

- /v4/rest/direct-scheduling/site/{site-code}/patient/{assigning-authority}/{patient-id}/{eligibility}/visited-in-past-months
- /v4/rest/direct-scheduling/site/{site-code}/patient/{assigning-authority}/{patient-id}/pact-team
- /v4/rest/direct-scheduling/patient/{assigning-authority}/{patient-id}/request-limit
- /v4/rest/clinical-services/patient/{assigning-authority}/{patient-id}/clinics
- /appointments/v1/patients/{patient-id}/appointments
- /VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions
  - Supported flags

### Equivalent FHIR resource

- No direct equivalent, but is likely covered by a lack of resources among Location, Schedule, and/or Slot

Based on past discussions, we would like to move to a model where resources are not returned if they're not usable, making eligibility checks implicit, rather than explicit. So we should expect not to have FHIR equivalents for most of these services.

## Data
### Data to FHIR model mapping

- Request limit (**Unknown**)
  - Filtered by: ICN, facility id, type of care id
  - Data:
     - Request limit
     - Oustanding request count
- Past visits  (**Unknown**)
  - Filtered by: ICN, facility id, type of care id, direct or request type
  - Data:
     - Time frame for required visit (typically 12 or 24 months)
     - Has past visit in time frame flag
- PACT members  (**Unknown**)
  - Filtered by: ICN, site id
  - Data:
     - Member count
- Appointment history (Appointment)
  - Filtered by: ICN, start date, end date
  - Data for each item:
     - Clinic id (Appointment.participant[HealthcareService].identifier)
     - Site id (Appointment.participant[Location].identifier)
- Clinics (HealthcareService)
   - Filtered by: ICN, facility id, site id, type of care id

### Missing/incomplete data list

- We don't have any of the eligibility data through the FHIR api

### Differences in scope of data returned

- N/A

## Outstanding questions

- How will request limits and other request related eligibility checks be incorporated into the FHIR flow?

### Answered questions

- Are all of the above eligibility checks integrated into the logic for pulling different resources?
  - Past visits
  - Request limit
  - Schedulable clinics exist
  - Has previously visited clinics
  - Has a PACT (primary care only)

For the direct scheduling flow, those checks are incorporated into the Appointment resource creation, as well as the logic for searching for HealthcareServices.
  
- What resources should we expect not to see when different checks fail?
  - Should Locations not come back if you can't direct schedule or request with them?
  - Or maybe a Schedule wouldn't come back in those cases?
  - How would being eligible to request but not to self schedule manifest in the resource calls?
  
We would expect HealthcareServices to not come back. For requests, this is unknown still.
