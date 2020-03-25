# /appointments page

Cerner api: http://fhir.cerner.com/millennium/dstu2/scheduling/appointment/#search

- Data needed
  - Type (VA, CC, VA request, CC request)
    - http://hl7.org/fhir/DSTU2/appointment-definitions.html#Appointment.type
  - Location (Video link or facility name and address)
    - Location reference in participant list
  - Time
    - http://hl7.org/fhir/DSTU2/appointment-definitions.html#Appointment.start
  - Clinic/practioner
  - Request fields
    - Preferred times
      - Preliminary answer I have is that we'll get an appointment record for each timeslot
    - Contact details
      - Appears to be missing, maybe this would come from the Patient reference?
    - User comments
      - I see a comment field, but not sure how this would be used
    - Appointment context (Routine, new, medication concern, etc)
      - If this isn't a separate field, we can roll it into comments, like we do for some appts now

## Other requirements
- We need to efficiently access Location data for each record
  - Batch fetch of location resources, or location resource bundling
  - Location resource includes address and phone
- If requests are one appt record per timeslot, we need some way of connecting requests together

## Questions
- Where do video links fit in? Location?
- Do we need to send the whole appointment object to cancel? Maybe this is a good time to consider use of DELETE based on id?
  - Not a blocker, just something we have to account for on the FE
- Canceling requests will take one api call per timeslot?
- Does the comments field mean patient comments, and does it have a character limit?
- Would we also need to fetch a Patient reference for contact info?
  - The current system has you entering contact info for each appointment request
    - Do we need this?
    - How are we handling email?
      - Is this going to be stored somewhere in Cerner? Or are we going to only use the VA profile email?
