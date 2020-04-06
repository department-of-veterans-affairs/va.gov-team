# Appointment direct schedule submission

Status: Blocked by questions

## Services
### Current services used

- /v4/rest/direct-scheduling/site/{site}/patient/ICN/{icn}/booked-appointments
- /v4/rest/patient/ICN/{icn}/preference

### Equivalent FHIR resource

- http://hl7.org/fhir/dstu2/appointment.html

## Data
### Data to FHIR model mapping

- Appointment type (**Unknown**)
- Status (Appointment.status)
- Clinic (Appointment.particpant[HealthcareService])
  - name
- Appointment date and time (Appointment.start, Appointment.end, or Appointment.slot)
- Booking notes (Appointment.reason, Appointment.comment)
- User contact details (**Appointment.participant[Patient]**)
   - Email
   - Phone
### Missing/incomplete data list
- Appointment type

### Differences in scope of data submitted

N/A

## Outstanding questions

- Will this update user preferences (i.e. contact info)?
- Do we need to send appointment type?
- Do we send a slot reference, or a start/end time?
- Do we need to send additional clinic info, or just a reference?
