# New VAOS api notes

Notes regarding the APIs defined at
- https://coderepo.mobilehealth.va.gov/projects/VAR/repos/vaos-service/browse/vaos-service/src/main/resources/swagger.json
- https://coderepo.mobilehealth.va.gov/projects/VDMS/repos/mobile-facility-service/browse/mobile-facility-service/src/main/resources/swagger.json?at=refs%2Fheads%2Fmain-v2

## General

- The api design of the new VAOS and MFS services is much better than the current api, but I don't believe it will making switching to FHIR later significantly easier
   - Conceptually, the data models are more similar, but the implementation is still very different, with different field names and structures within them
- Do we have a general idea of the timeframe for this and EAS?
   - Answer: not really, though the VAOS service shouldn't be a huge lift and work will start soon
- Does this approach mean that EAS will no longer contain new functionality, just the FHIR interface?
   - Answer: Probably? It seems like new functionality is going to be accessible through MFS and the new VAOS service
- It's not clear how video appointments fit in here. Specifically ATLAS info and providers

## VAOS service schemas

### Status

- We also use the `pending` status for Express Care, because requests go from Submitted > Escalated > Booked/Cancelled and `pending` seemed like the best fit for escalated requests

## Clinic

- Clinic name appears to be missing in the Clinic schema, could we call it `serviceName` and do the same friendly name logic that's in VSP?
- Can we use `id` instead of `clinicIen` or `clinicId`? It's nice to have a consistent `id` field across the different schemas

### Appointment

- What would be in the practitioner field?
- It's not clear to me how Community Care provider info would come through.
- Does facilityId mean sta3n or sta6aid? Are we using consistent names for facilities and sites in the new API?
- We submit contact info with a request (phone and email), how would that be handled through here?
- Appointment requests also have a visit type, which is office, phone, or video, I don't see a spot for that. Maybe type?
- What's the slot field for?
- I'm assuming cancelationReason can be used for both requests and appointments?
   - We show different views depending on who cancelled an Express Care request

### Type

- Should this also include video and express care appointments/requests? Or possibly the visit type options we use for requests (office, phone, video)?

### AppointmentTimeSlot

- Can we name these fields like the FHIR slot resource: start, end, freeBusyType (for availability or booking status, not sure which)?
- Do slots need an id? Or do we just send the dates back?

### PatientAppointmentMetadataResponse

- Would be nice to have the request limit in here, too

## VAOS service endpoints

### Appointments

- The appointments GET is missing start and end date parameters

### Slots

- Can we use clinicIds instead of clinicIens in the query params?

### Patient Appointment Metadata

- Would it be feasible to request multiple facility ids at once? 
   - We want to make a single request for the request limit check across multiple facilities for Express Care, and it could also be useful for regular VA requests

## Mobile Facility Service endpoints

### Clinics

- The clinics request doesn't have any patient context, but currently for primary care clinics are filtered by PACT (via CDW)
   - Maybe there needs to be a clinics service in the VAOS service?
- The FE has logic that only returns clinics that have been interacted with by a patient in the past two years, it would be nice to get that into the backend
   - Another thing that would make more sense in the VAOS service, probably

### Scheduling Configuration

- Can the configurations GET have the same ids and children params that the facilities GET does? Or is the expectation that we query the facilities GET first and use those ids?
   - It's more efficient for us to only fetch facility data after we filter out ones that aren't configured.
- I don't think we'd use the express care reasons GET
  
## Mobile Facility Service schemas

### Facility

- This one would probably a good candidate for a more FHIR like structure, if we wanted to do that, since the output actually seems better (to me) than the current facility schema carried over from Lighthouse.
   - `position` for lat/long
   - Matching address schema
   - Matching telecom schema
   - hoursOfOperation for hours
      - The Lighthouse hours are kind of a pain to parse, though
