# New VAOS api notes

Notes regarding the API defined at https://coderepo.mobilehealth.va.gov/projects/VAR/repos/vaos-service/browse/vaos-service/src/main/resources/swagger.json
New MFS api WIP design: https://app.swaggerhub.com/apis-docs/crosbyb/MFS/2.0.0#/

## General

- So far, the schemas are pretty far from the FHIR specs, except in a couple instances like requested periods.
   - I don't want the extra boilerplate, or the going down to the level of putting things in participant or contained arrays, but structuring clinics as HealthcareServices, etc, would be useful to the FE

## Schemas

### Appointment

- Does facilityId mean sta3n or sta6aid? Are we using consistent names for facilities and sites in the new API?
- Clinic name appears to be missing
- I can see the appeal of making the preferred time to call values Periods, but seems like overkill
- Where would we get the contact info associated with a request?

### PatientAppointmentMetadataResponse

- Missing request limit value?

## Services

### Slots

- Does site code mean sta3n or sta6aid? The FE would need to request by sta6aid
