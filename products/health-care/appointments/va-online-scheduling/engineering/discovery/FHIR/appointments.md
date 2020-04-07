# Appointments List

Status: Blocked by outstanding questions

## Services
### Current services used

- /vaos/appointments
- /vaos/appointment_requests

### Equivalent FHIR resource
Appointment: http://hl7.org/fhir/dstu2/appointment.html

## Data
### Data to FHIR model mapping

- Type of care (Appointment.type)
- Type (Appointment.status)
   - Request
   - Appointment
- Status (Appointment.status)
   - Confirmed
   - Pending
   - Cancelled
- Method (**derived from Appointment.participant?**)
   - Community Care
   - VA facility
   - VA video
   - Mobile GFE video
- Facility (Appointment.participant[Location])
- Video link (Appointment.particpant[HealthcareService])
   - Contained resource
- Clinic (Appointment.particpant[HealthcareService])
   - name (HealthcareService.name)
   - facility name (Location.name)
   - facility address (Location.address)
   - facility phone number (Location.telecom)
- Appointment date and time (Appointment.start, Appointment.end, or Appointment.slot)
   - Timezone of facility
   - Both requested times and confirmed times
- User provided detail (**Appointment.comment?**)
- Appointment context (Appointment.reason)
   - Routine
   - Medication concern
   - New issue
   - Other
- User contact details (Appointment.participant[Patient])
   - Email
   - Phone
- Allowed cancel reasons (**Unknown**)
- Request messages
   - Filtered by: ICN, request id
   - Data for first item:
      - Message text (**Appointment.reason or Appointment.comment**)
            
### Missing/incomplete data list

- Method
- Status might not tell us if a cancelled appt was a request or booked appt
- Community Care locations
- Cancel reasons

### Differences in scope of data returned
- Requests may be broken into one item per timeslot
- Location data not necessarily included inline

## Outstanding questions
- Can we use `_include` to pull in Location references?
- Do we need to send the whole appointment object to cancel?
- Canceling requests will take one api call per timeslot?
- Does the comments field mean patient comments, and does it have a character limit?
- Would we also need to fetch a Patient reference for contact info?
