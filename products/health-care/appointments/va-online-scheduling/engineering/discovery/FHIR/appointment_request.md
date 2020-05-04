# Appointment request submission

Status: Blocked by questions

## Services
### Current services used
- /v4/rest/appointment-service/patient/ICN/{icn}/appointments
- /v4/rest/appointment-service/patient/ICN/{icn}/appointment-requests/system/var/id/{request_id}/messages
- /v4/rest/patient/ICN/{icn}/preference

### Equivalent FHIR resource

- http://hl7.org/fhir/dstu2/appointment.html

## Data
### Data to FHIR model mapping
- Type of care (Appointment.type)
- Visit Type (**Unknown**)
- Status (Appointment.status)
  - Looks like we have to send "proposed"
- Method (**Unknown**)
   - Community Care
   - VA facility
- Location (Appointment.participant[Location])
- Appointment date and time (Appointment.slot)
- User provided detail (**Appointment.comment?**)
- Appointment reason (Appointment.reason)
   - Routine
   - Medication concern
   - New issue
   - Other
- User contact details (**Unknown**)
### Missing/incomplete data list

- Appointment "system" (Community Care or VA)
- Visit Type

### Differences in scope of data returned

- N/A

## Outstanding questions

- How can we determine what Locations support requests for a given type of care
   - Support meaning that they're enabled in VATS, the patient meets the past visit criteria, and they are not over the request limit
- Does user generated messaging go in Appointment.comment? Or some other field?
- How do we distinguish between sending a request or self-schedule appointment? The status?
- It's been mentioned that requests are submitted using the requested periods extension. Is there documentation for that?
   - Does it support multiple requested periods?
- Do we need to include the current patient as a participant when creating a request?
- Currently the front end updates contact information on each request submission, which affects contact info used in Scheduling Manager. Is this functionality captured in EAS/VSP?

### Answered questions
- How do we distinguish between sending a CC or VA request?
  - The location participant
