# New VAOS api notes

Notes regarding the APIs defined at
- https://coderepo.mobilehealth.va.gov/projects/VAR/repos/vaos-service/browse/vaos-service/src/main/resources/swagger.json
- https://coderepo.mobilehealth.va.gov/projects/VDMS/repos/mobile-facility-service/browse/mobile-facility-service/src/main/resources/swagger.json?at=refs%2Fheads%2Fmain-v2

## General

- The api design of the new VAOS and MFS services is much better than the current api, but I don't believe it will making switching to FHIR later significantly easier
   - Conceptually, the data models are more similar, but the implementation is still very different, with different field names and structures within them
- Do we have a general idea of the timeframe for this and EAS?
   - Not really, though the VAOS service shouldn't be a huge lift and work will start soon
- Does this approach mean that EAS will no longer contain new functionality, just the FHIR interface?
   - Probably? It seems like new functionality is going to be accessible through MFS and the new VAOS service
- It's not clear how video appointments fit in here
  - Specifically ATLAS info and providers

## VAOS service schemas

### Status

- We also use the `pending` status for Express Care, because requests go from Submitted > Escalated > Booked/Cancelled and `pending` seemed like the best fit for escalated requests

## Clinic

- Clinic name appears to be missing in the Clinic schema, could we call it `serviceName` and do the same friendly name logic that's in VSP?
- Can we use `id` instead of `clinicIen` or `clinicId`? It's nice to have a consistent `id` field across the different schemas

### Appointment

- What would be in the practitioner field?
- Does facilityId mean sta3n or sta6aid? Are we using consistent names for facilities and sites in the new API?
- We submit contact info with a request (phone and email), how would that be handled through here?
- Appointment requests also have a visit type, which is office, phone, or video, I don't see a spot for that. Maybe type?
- What's the slot field for?

### Type

- Should this also include video and express care appointments/requests? Or possibly the visit type options we use for requests (office, phone, video)?

### AppointmentTimeSlot

- Can we name these fields like the FHIR slot resource: start, end, freeBusyType (for availability or booking status, not sure which)?
- Do slots need an id? Or do we just send the dates back?

### ScheduleConfiguration

- We'd want to be able search by multiple parent sites here

### PatientAppointmentMetadataResponse

- Would be nice to have the request limit in here, too
- Could we request multiple facility ids at once? We want to make a single request for the request limit check across multiple facilities for EC

### Slots

- Does site code mean sta3n or sta6aid?

## Services

### Slots

- We need to be able to search by facility (sta6aid)

### Patient Appointment Metadata

- We'd want to be able search by multiple parent sites here

### Clinics

- The clinics request doesn't have any patient context, but currently for primary care clinics are filtered by PACT (via CDW)
- The FE has logic that only returns clinics that have been interacted with by a patient in the past two years, it would be nice to get that into the backend
