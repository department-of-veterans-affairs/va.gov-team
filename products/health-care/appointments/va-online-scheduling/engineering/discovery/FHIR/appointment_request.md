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
- Type (**Unknown**)
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

### Differences in scope of data returned

- N/A

## Outstanding questions

- Does user generated messaging go in Appointment.comment?
- How do we distinguish between sending a request or self-schedule appointment?
- How do we distinguish between sending a CC or VA request?
- Do we need to include the current patient as a participant?
- How can a user update their contact details for an appointment/request?
  - This is done through the preferences service now
