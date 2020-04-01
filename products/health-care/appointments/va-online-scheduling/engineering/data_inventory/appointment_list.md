# Appointment list

FHIR equivalent in parentheses, bold items are uncertain/unknown

- Appointment list
   - Filtered by: ICN, start date, end date
   - Data for each item (Appointment)
      - Type of care (Appointment.type)
         - Requests only
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
      - Location (Appointment.participant[Location])
         - Video link
         - Clinic
            - name
            - facility name
            - facility address
            - facility phone number
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
         
