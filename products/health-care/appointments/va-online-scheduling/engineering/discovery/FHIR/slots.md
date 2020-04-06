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

* `Slot.status` is required in FHIR spec, but we can probably just search for Slots where `status === free`

## Outstanding questions
* How will we search for slots?  Currently we use a combination of `facilityId`, `typeOfCareId` and an array of`clinicIds` as search parameters in addition to `startDate` and `endDate`.
* Slots don't have a general AM/PM option, so I'm unsure how we'll map these to VAOS
* Will we be using the `Schedule` FHIR entity?
* What other FHIR parameters will be used for Slot?
