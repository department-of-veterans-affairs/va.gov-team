//DRAFT WIP //

//Overview
The documentation is to provide definition and clarity as to how we are tracking analytics for the new VA Online Scheduling tool (VAOS-R). Use this document as a guide when looking into the analytics and performance of the VAOS tool on VA.gov. 

// Events Tracking
- 'schedule appointment' button clicked on homepage
  - `vaos-schedule-appointment-button-clicked`
- 'New Appointment' on confirmation page
  - `vaos-schedule-another-appointment-button-clicked`
- 'submit request/appointment' button clicked
  - `vaos-community-care-submission-attempted`
  - `vaos-direct-submission-attempted`
  - `vaos-request-submission-attempted`
  - As additional data, capture type of care and flow (VA Req, CC Req, DS)
    - `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}`
- Form submission succeeded
  - `vaos-community-care-submission-succeeded`
  - `vaos-direct-submission-succeeded`
  - `vaos-request-submission-succeeded`
  - As additional data, capture type of care and flow (VA Req, CC Req, DS)
    - `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}`
- Form submission failed
  - `vaos-community-care-submission-failed`
  - `vaos-direct-submission-failed`
  - `vaos-request-submission-failed`
  - As additional data, capture type of care and flow (VA Req, CC Req, DS)
    - `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}`
- 'return to legacy VAOS' link clicked
	- `vaos-return-to-legacy-link-clicked`
	    - `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}`
- 'Cancel' link clicked
  - `vaos-cancel-appointment-attempted`
  - As additional data, capture confirmed vs pending & whether VA or CC
    - `{ appointmentType: ‘pending’, facilityType: ‘va’}`
- 'Cancel' succeeded
  - `vaos-cancel-appointment-succeeded`
  - As additional data, capture confirmed vs pending & whether VA or CC
    - `{ appointmentType: ‘confirmed’, facilityType: ‘va’}`
- 'Cancel' failed
  - `vaos-cancel-appointment-failed`
  - As additional data, capture confirmed vs pending & whether VA or CC
    - `{ appointmentType: ‘pending’, facilityType: ‘va’}`
 
 // Events Tracking Errors
 Failure - Exceeded outstanding requests limit
Errored - Exceeded outstanding requests limit
 Failure - Doesn't meet requests past visits requirement
errored - Doesn't meet requests past visits requirement
 Failure - Doesn't meet direct schedule past visits requirement
errored - Doesn't meet direct schedule past visits requirement
 Failure - Doesn't have any available clinics
errored - Doesn't have any available clinics
 Failure - Doesn't have any clinics available that match past clinics
errored - Doesn't have any clinics available that match past clinics
 Failure - Doesn't have active PACT members
errored - Doesn't have active PACT members
