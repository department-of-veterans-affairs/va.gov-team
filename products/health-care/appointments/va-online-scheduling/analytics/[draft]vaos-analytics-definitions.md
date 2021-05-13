## // DRAFT WIP //

## Overview
The documentation is to provide definition and clarity as to how we are tracking analytics for the new VA Online Scheduling tool (VAOS-R). Use this document as a guide when looking into the analytics and performance of the VAOS tool on VA.gov. 

## Events Tracking
- 'schedule appointment' button clicked on homepage
  - `vaos-schedule-appointment-button-clicked`
- 'New Appointment' on confirmation page
  - `vaos-schedule-another-appointment-button-clicked`
- 'submit request/appointment' button clicked
  - `vaos-community-care-submission`
    - `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-community-care-preferred-language: "english", vaos-number-of-preferred-providers: 0 }`
  - `vaos-direct-submission`
    - `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-number-of-preferred-providers: 0 }` (preferrred providers is a bug)
  - `vaos-request-submission`
    - `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-community-care-preferred-language: undefined, vaos-number-of-preferred-providers: 0 }` (cc and preferred providers is a bug)
  - `vaos-covid19-submission`
    - `{ flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }`
- Form submission succeeded
  - `vaos-community-care-submission-successful`
    - `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-number-of-preferred-providers: 0 }`
  - `vaos-direct-submission-successful`
    - `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-number-of-preferred-providers: 0 }` (preferred providers is a bug)
  - `vaos-request-submission-successful`
    - `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-number-of-preferred-providers: 0 }` (preferred providers is a bug)
  - `vaos-covid19-submission-successful`
    - `{ facility-id: "983", flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }`
- Form submission failed
  - `vaos-community-care-submission-failed`
    - `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-number-of-preferred-providers: 0 }`
  - `vaos-direct-submission-failed`
    - `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-number-of-preferred-providers: 0 }` (preferrred providers is a bug)
  - `vaos-request-submission-failed`
    - `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-number-of-preferred-providers: 0 }` (preferrred providers is a bug)
  - `vaos-covid19-submission-failed`
    - `{ flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }`
- 'return to legacy VAOS' link clicked
	- `vaos-return-to-legacy-link-clicked`
	    - `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}`
- 'Cancel' link clicked
  - `vaos-cancel-appointment-submission`
  - As additional data, capture confirmed vs pending & whether VA or CC
    - `{ appointmentType: ‘pending’, facilityType: ‘va’}`
- 'Cancel' succeeded
  - `vaos-cancel-appointment-submission-successful`
  - As additional data, capture confirmed vs pending & whether VA or CC
    - `{ appointmentType: ‘confirmed’, facilityType: ‘va’}`
- 'Cancel' failed
  - `vaos-cancel-appointment-submission-failed`
  - As additional data, capture confirmed vs pending & whether VA or CC
    - `{ appointmentType: ‘pending’, facilityType: ‘va’}`
 
## Events Tracking Errors
- Failure - Exceeded outstanding requests limit
  - Errored - Exceeded outstanding requests limit
- Failure - Doesn't meet requests past visits requirement
  - Errored - Doesn't meet requests past visits requirement
- Failure - Doesn't meet direct schedule past visits requirement
  - Errored - Doesn't meet direct schedule past visits requirement
- Failure - Doesn't have any available clinics
  - Errored - Doesn't have any available clinics
- Failure - Doesn't have any clinics available that match past clinics
  - Errored - Doesn't have any clinics available that match past clinics
- Failure - Doesn't have active PACT members
  - Errored - Doesn't have active PACT members
  
## Full List  
  | Event label (custom event name from data layer)| Definition
| ------------- |:-------------:|
vaos-cancel-appointment-submission |
vaos-cancel-appointment-submission-failed |
vaos-cancel-appointment-submission-successful |
vaos-cc-eligible-yes |
vaos-community-care-path-started |
vaos-community-care-submission |
vaos-community-care-submission-failed |
vaos-community-care-submission-successful |
vaos-direct-path-started |
vaos-direct-submission |
vaos-direct-submission-failed |
vaos-direct-submission-successful |
vaos-eligibility-direct-available-clinics-failed |
vaos-eligibility-direct-check-past-visits-failed |
vaos-eligibility-direct-no-matching-past-clinics-failed |
vaos-eligibility-direct-supported-failed |
vaos-eligibility-request-exceeded-outstanding-requests-failed |
vaos-eligibility-request-past-visits-failed |
vaos-eligibility-request-supported-failed |
vaos-eligibility-supported-facilities-failed |
vaos-error |
vaos-express-care-facilities-link-clicked |
vaos-express-care-path-cancelled |
vaos-express-care-path-started |
vaos-express-care-request-button-clicked |
vaos-express-care-request-continue-flow |
vaos-express-care-submission |
vaos-express-care-submission-failed |
vaos-express-care-submission-successful |
vaos-express-care-switch-to-appointment-flow-clicked |
vaos-express-care-view-your-appointments-button-clicked |
vaos-get-future-appointments-failed |
vaos-get-future-appointments-retrieved |
vaos-get-future-appointments-started |
vaos-get-past-appointments-failed |
vaos-get-past-appointments-retrieved |
vaos-get-past-appointments-started |
vaos-get-pending-appointments-failed |
vaos-get-pending-appointments-retrieved |
vaos-get-pending-appointments-started |
vaos-number-of-items-retrieved |
vaos-past-appointments-legacy-link-clicked |
vaos-request-current-location-allowed |
vaos-request-current-location-blocked |
vaos-request-current-location-clicked |
vaos-request-path-started |
vaos-request-submission |
vaos-request-submission-failed |
vaos-request-submission-successful |
vaos-return-to-legacy-link-clicked |
vaos-schedule-another-appointment-button-clicked |
vaos-schedule-appointment-button-clicked |
vaos-schedule-new-appointment-started |
vaos-update-address-alert-displayed |
vaos-view-your-appointments-button-clicked |

