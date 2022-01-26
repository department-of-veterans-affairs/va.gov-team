# VAOS Analytics // DRAFT WIP //

## Overview
The documentation is to provide definition and clarity as to how we are tracking analytics for the new VA Online Scheduling tool (VAOS-R). Use this document as a guide when looking into the analytics and performance of the VAOS tool on VA.gov. 

## Events Tracking
- "Start scheduling" button clicked on homepage (top of the page or within the no appointments found alert)
  - `vaos-schedule-appointment-button-clicked`
- "New appointment" link clicked on confirmation page
  - `vaos-schedule-another-appointment-button-clicked`
- "Confirm appointment"/"Request appointment" button clicked on the review page
  - `vaos-community-care-submission`
  - `vaos-direct-submission`
  - `vaos-request-submission`
  - `vaos-covid19-submission`
- Form submission succeeded
  - `vaos-community-care-submission-successful`
  - `vaos-direct-submission-successful`
  - `vaos-request-submission-successful`
  - `vaos-covid19-submission-successful`
- Form submission failed
  - `vaos-community-care-submission-failed`
  - `vaos-direct-submission-failed`
  - `vaos-request-submission-failed`
  - `vaos-covid19-submission-failed`
- "Cancel appointment"/"Cancel request" link clicked on appointment details
  - `vaos-cancel-appointment-submission`
- Cancel succeeded
  - `vaos-cancel-appointment-submission-successful`
- Cancel failed
  - `vaos-cancel-appointment-submission-failed`

 
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
| Event Label (custom event name from data layer) | Parameters | Definition |
|-----|----------|-----|
vaos-cancel-appointment-submission | `{ appointmentType: ‘pending’, facilityType: ‘va’}`; appointmentType possible values: `confirmed`, `pending`; facilityType possible values:  `va`, `cc` | Cancellation was attempted
vaos-cancel-appointment-submission-failed | `{ appointmentType: ‘pending’, facilityType: ‘va’}`; appointmentType possible values: `confirmed`, `pending`; facilityType possible values:  `va`, `cc` | Cancellation submission wasn't successful
vaos-cancel-appointment-submission-successful | `{ appointmentType: ‘pending’, facilityType: ‘va’}`; appointmentType possible values: `confirmed`, `pending`; facilityType possible values:  `va`, `cc` | Cancellation submission was successful
vaos-cc-eligible-yes |
vaos-community-care-path-started |
vaos-community-care-submission | `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-community-care-preferred-language: "english", vaos-number-of-preferred-providers: 0 }` | User completed the form and a submission was attempted
vaos-community-care-submission-failed | `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-number-of-preferred-providers: 0 }` | Submission wasn't successful
vaos-community-care-submission-successful | `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-number-of-preferred-providers: 0 }` | Submission was successful
vaos-covid19-path-started |
vaos-covid19-start-scheduling-button-clicked |
vaos-covid19-submission | `{ flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }` | User completed the form and a submission was attempted
vaos-covid19-submission-failed | `{ flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }` | Submission wasn't successful
vaos-covid19-submission-successful | `{ facility-id: "983", flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }` | Submission was successful
vaos-direct-path-started |
vaos-direct-submission | `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | User completed the form and a submission was attempted
vaos-direct-submission-failed | { flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | Submission wasn't successful
vaos-direct-submission-successful | `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care"}` | Submission was successful
vaos-eligibility-direct-available-clinics-failed |
vaos-eligibility-direct-check-past-visits-failed |
vaos-eligibility-direct-no-matching-past-clinics-failed |
vaos-eligibility-direct-supported-failed |
vaos-eligibility-request-exceeded-outstanding-requests-failed |
vaos-eligibility-request-past-visits-failed |
vaos-eligibility-request-supported-failed |
vaos-eligibility-supported-facilities-failed |
vaos-error |
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
vaos-request-current-location-allowed |
vaos-request-current-location-blocked |
vaos-request-current-location-clicked |
vaos-request-path-started |
vaos-request-submission | `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-community-care-preferred-language: undefined }` | User completed the form and a submission was attempted
vaos-request-submission-failed | `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | Submission wasn't successful
vaos-request-submission-successful | { flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | Submission was successful
vaos-schedule-another-appointment-button-clicked |
vaos-schedule-appointment-button-clicked |
vaos-schedule-new-appointment-started |
vaos-update-address-alert-displayed |
vaos-view-your-appointments-button-clicked |

### Custom Dimensions/Metrics in Google Analytics
| Dimension/Metric Name | Associated Event | Description |
| ------------- | ------------- | ------------- |
Health Care VAOS - Appointment Type |
Health Care VAOS - Facility Type | 
Health Care VAOS - Flow | 
Health Care VAOS - Number of Days from Preference | 
Health Care VAOS - Number of Preferred Providers | 
Health Care VAOS - Preferred Combination | 
Health Care VAOS - Preferred Language | 
Health Care VAOS - Reason for Appointment | 
Health Care VAOS - Returned Item Type | 
Health Care VAOS - Returned Number of Items | 
Health Care VAOS - Type of Care | 
Health Care VAOS - Upcoming Number of Cards | 
Product - Health Care VAOS User | 
VAOS Facility ID | 


---


## Deprecated/Removed

| Event Label (custom event name from data layer)| Parameters | Definition |
| ------------- | ------------- | ------------- |
vaos-return-to-legacy-link-clicked | `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}` | "Return to legacy VAOS" link clicked
vaos-past-appointments-legacy-link-clicked |
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


### Removed Custom Dimensions/Metrics in Google Analytics
| Dimension/Metric Name | Associated Event | Description |
| ------------- | ------------- | ------------- |
Health Care VAOS - Express Care Reason | 
Health Care VAOS - Express Care Number of Cards | 



