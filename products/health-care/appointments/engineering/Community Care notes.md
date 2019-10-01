# Community Care notes

## API

Four primary API calls:

- `/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/{assigning-authority}/{patient-id}/community-care-appointment`
   - Creates a new CC request
- `/VeteranAppointmentRequestService/v4/rest/community-care-services/type-of-cares`
   - Returns static type of care list
- `/adr/v2/patients/{patient-icn}/eligibility/communityCare`
   - Returns eligibility codes
- `/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/{assigning-authority}/{patient-id}/booked-cc-appointments` 
   - Returns successfully booked CC appointments
   
Pending community care requests are in the normal requests service (`/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/{assigning-authority}/{patient-id}/appointments`). They are distinguished by having a `ccAppointmentRequest` object in the data.
   
## Eligibility

Currently (pre-drive time, 9/2019), you must have one of the following codes to be eligible:

- `H` (Hardship)
- `G` (Grandfathered)
- `N` (State No Full-Service VA)

Source: [isVceEligible](https://coderepo.mobilehealth.va.gov/projects/VAR/repos/var-web/browse/veteran-appointment-requests/app/models/community-care-eligibility-collection.js#27), [list of codes](https://coderepo.mobilehealth.va.gov/projects/VAR/repos/var-web/browse/veteran-appointment-requests/app/models/community-care-vce-codes.json).

## Drive time

- Current understanding is that this will be an additional code in the the `/eligibility/communityCare` service.
- The address being used is from the E&E system, which Vet360 writes addresses to, so we may be able to provide a way for Veterans to update their address.
