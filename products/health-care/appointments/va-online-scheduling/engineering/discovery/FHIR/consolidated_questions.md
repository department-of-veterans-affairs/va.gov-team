# Consolidated questions

Summarized high priority questions:

- Generally, we don't have a good sense of what happens in the Location > HealthcareService > Schedule > Slot part of the flow
  - What resources use (or will use) the VATS-configured eligibility criteria?
  - How do HealthcareService and Schedule relate to the current VistA scheduling process?
     - For both requests and self scheduling
  - How are stop codes used with the VSP FHIR implementation?
     - Can we search for Locations based on the stop codes they support?
- Can we expect `_include` and `_revinclude` support?
   - This enables resource bundling and appears to cover all the UI use cases
- How are timezones handled?

## Appointments list
- Can we use _include to pull in Location references?
- Do we need to send the whole appointment object to cancel?
- Will canceling requests will take one api call per timeslot?
  - Is it still the plan that we have one entry per timeslot for requests?
- Does the comments field mean patient comments, and does it have a character limit?
- Would we also need to fetch a Patient reference to update contact info?

## Type of care

- How are stop codes used in VSP?
- Will we be able to only show Locations that support given types of care with VSP?

## Facilities

- How can we get the timezone for a Location?
- How do we get request/direct scheduling supported flag information?
- Sometimes there are five digit "parent" VAMCs returned from the `parent-sites` endpoint, are those considered Organizations or Locations?
- Do we have different fields for friendly vs institution name?

## Eligibility

- Will all of the eligibility checks integrated into the logic for pulling different resources?
  - Past visits
  - Request limit
  - Schedulable clinics exist
  - Has previously visited clinics
  - Has a PACT (primary care only)
- What resources should we expect not to see when different checks fail?
  - Should Locations not come back if you can't direct schedule or request with them?
  - Or maybe a Schedule wouldn't come back in those cases?
  - How would being eligible to request but not to self schedule manifest in the resource calls?

## Clinics

- What resource do clinics map to?
  - Location, HealthcareService, Schedule?
- Would the type "CodeableConcept" be used to model
  - siteCode
  - primaryStopCode
  - secondaryStopCode
  - institutionCode
- How are flags modeled in general?
- Can the Organization.typeOf field be used to retrieve the siteId since Organization is hierarchical?

## Time slots

- How will we search for slots? 
   - Currently we use a combination of facilityId, typeOfCareId and an array ofclinicIds as search parameters in addition to startDate and endDate.
- Slots don't have a general AM/PM option, so how would we map these to VAOS for requests?
- Will we be using the Schedule FHIR entity?
- What other FHIR parameters will be used for Slot?

## Request submission

- Does user generated messaging go in Appointment.comment?
- How do we distinguish between sending a request or self-schedule appointment?
- How do we distinguish between sending a CC or VA request?
- Do we need to include the current patient as a participant?
- How can a user update their contact details for an appointment/request?
   - This is done through the preferences service now
   
## Direct schedule submission

- Will this update user preferences (i.e. contact info)?
- Do we need to send appointment type?
- Do we send a slot reference, or a start/end time?
- Do we need to send full additional clinic info, or just a reference?

## Community Care

- Will we still need to include the VA organization when sending a request?
- We currently allow you to omit the provider and also for users to enter the details on their own. Is that supported?
- How do we specify a slot, since this is a request, not a self-schedule?
- Does user generated messaging go in Appointment.comment?
- How can a user update their contact details for an appointment/request?
  - This is done through the preferences service now
