# Slots (Direct and Requests)

Status: Blocked by outstanding questions
## Services
### Current services used

#### Direct Scheduling

* /vaos/facilities/{facilityId}/available_appointments

#### Requests
* No services used

### Equivalent FHIR resource

* Slot

## Data
### Data to FHIR model mapping

#### Direct Scheduling 

* startDateTime (Slot.start)

* endDateTime (Slot.end)

  


#### Currently unused in VAOS-R and Legacy
* bookingStatus (Slot.status?)
* remainingAllowedOverBookings (Slot.overbooked?)
* availability (Slot.status)

### Missing/incomplete data list

* remainingAllowedOverBookings
  * This is an integer on legacy, but the nearest equivalent on FHIR is Slot.overbooked which is a boolean

### Differences in scope of data returned

* `Slot.freeBusyType` is required in FHIR spec, but we can probably just search for Slots where `freeBusyType === free`

## Outstanding questions

- Do we need to fetch the Schedule resource, or is there a way to use chained params to fetch slots and schedules at once?
- There does not appear to be an end date search param. VAOS currently fetches 60 day chunks of time slot data, otherwise there are timeouts in the underlying service.

### Answered questions
* How will we search for slots?  Currently we use a combination of `facilityId`, `typeOfCareId` and an array of`clinicIds` as search parameters in addition to `startDate` and `endDate`.
   - It looks like we would fetch HealthcareService, Schedule, then Slots. Most of our paramters will be used to pull in HealthcareServices, then the start and end date will be used on Schedule/Slots.
* Slots don't have a general AM/PM option, so I'm unsure how we'll map these to VAOS
   - Request flow is currently unknown
* Will we be using the `Schedule` FHIR entity?
   - Yes, but may be able to combine calls
