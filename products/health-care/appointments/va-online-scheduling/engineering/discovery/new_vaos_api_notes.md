# New VAOS api notes

Notes regarding the APIs defined at
- https://coderepo.mobilehealth.va.gov/projects/VAR/repos/vaos-service/browse/vaos-service/src/main/resources/swagger.json
- https://coderepo.mobilehealth.va.gov/projects/VDMS/repos/mobile-facility-service/browse/mobile-facility-service/src/main/resources/swagger.json?at=refs%2Fheads%2Fmain-v2

## General

- So far, the schemas are pretty far from the FHIR specs, except in a couple instances like requested periods.
   - I don't want the extra boilerplate, or the going down to the level of putting things in participant or contained arrays, but structuring clinics as HealthcareServices, etc, would be useful to the FE
- Do we have a general idea of the timeframe for this and EAS?
- Does this approach mean that EAS will no longer contain new functionality, just the FHIR interface?
- It's not clear how video appointments fit in here

## Schemas

### Appointment

- Does facilityId mean sta3n or sta6aid? Are we using consistent names for facilities and sites in the new API?
- I can see the appeal of making the preferred time to call values Periods, but seems like overkill
- Where would we get the contact info associated with a request?

### ScheduleConfiguration

- We'd want to be able search by multiple parent sites here

### PatientAppointmentMetadataResponse

- Would be nice to have the request limit in here, too
- Could we request multiple facility ids at once? We want to make a single request for the request limit check across multiple facilities for EC

## Clinics

- Clinic name appears to be missing in the Clinic schema
- The clinics request doesn't have any patient context, but currently for primary care clinics are filtered by PACT (via CDW)
- The FE has logic that only returns clinics that have been interacted with by a patient in the past two years, it would be nice to get that into the backend

### Slots

- Does site code mean sta3n or sta6aid? The FE would need to request by sta6aid


