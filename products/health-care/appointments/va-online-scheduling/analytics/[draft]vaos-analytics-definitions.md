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
vaos-breadcrumb-/my-health-clicked | |
vaos-breadcrumb-health-care-clicked | |
vaos-breadcrumb-home-clicked | |
vaos-breadcrumb-schedule-managed-clicked | |
vaos-cancel-appointment-submission | `{ appointmentType: ‘pending’, facilityType: ‘va’}`; appointmentType possible values: `confirmed`, `pending`; facilityType possible values:  `va`, `cc` | Cancellation was attempted
vaos-cancel-appointment-submission-failed | `{ appointmentType: ‘pending’, facilityType: ‘va’}`; appointmentType possible values: `confirmed`, `pending`; facilityType possible values:  `va`, `cc` | Cancellation submission wasn't successful
vaos-cancel-appointment-submission-successful | `{ appointmentType: ‘pending’, facilityType: ‘va’}`; appointmentType possible values: `confirmed`, `pending`; facilityType possible values:  `va`, `cc` | Cancellation submission was successful
vaos-cancel-booked-clicked |
vaos-cancel-request-clicked |
vaos-cc-eligible-yes |
vaos-cerner-redirect-appointments-landing-page |
vaos-cerner-redirect-static-landing-page |
vaos-choose-provider-click
vaos-community-care-path-started |
vaos-community-care-provider-selection-page |
vaos-community-care-submission | `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-community-care-preferred-language: "english", vaos-number-of-preferred-providers: 0 }` | User completed the form and a submission was attempted
vaos-community-care-submission-failed | `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-number-of-preferred-providers: 0 }` | Submission wasn't successful
vaos-community-care-submission-successful | `{ flow: "cc-request", health-ReasonForAppointment: undefined, health-TypeOfCare: "Podiatry", vaos-number-of-preferred-providers: 0 }` | Submission was successful
vaos-contact-info-email-changed |
vaos-contact-info-email-not-changed |
vaos-contact-info-email-not-populated |
vaos-contact-info-email-populated |
vaos-contact-info-phone-changed |
vaos-contact-info-phone-not-changed |
vaos-contact-info-phone-not-populated |
vaos-contact-info-phone-populated |
vaos-continue-with-provider |
vaos-continue-without-provider |
vaos-COVID-19-vaccines-at-VA-link-clicked |
vaos-covid19-path-started |
vaos-covid19-screener-no |
vaos-covid19-screener-yes |
vaos-covid19-start-scheduling-button-clicked |
vaos-covid19-submission | `{ flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }` | User completed the form and a submission was attempted
vaos-covid19-submission-failed | `{ flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }` | Submission wasn't successful
vaos-covid19-submission-successful | `{ facility-id: "983", flow: "direct", health-TypeOfCare: "COVID-19 Vaccine" }` | Submission was successful
vaos-direct-confirmation-details-descriptive-back-link |
vaos-direct-path-started |
vaos-direct-submission | `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | User completed the form and a submission was attempted
vaos-direct-submission-failed | { flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | Submission wasn't successful
vaos-direct-submission-successful | `{ flow: "direct", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care"}` | Submission was successful
vaos-eligibility-direct-available-clinics-failed | `{ flow: "direct", health-TypeOfCare: "143", health-FacilityID: "984GB"}` | eligibility failed; service did not return any clinics
vaos-eligibility-direct-check-past-visits-failed | `{ flow: "direct", health-TypeOfCare: "143", health-FacilityID: "984GB"}` | eligibility failed; there has not been a recent visit
vaos-eligibility-direct-no-matching-past-clinics-failed | `{ flow: "direct", health-TypeOfCare: "143", health-FacilityID: "984GB"}` | eligibility failed; could not find any of the clinics returned in the past 24 months of appointments
vaos-eligibility-direct-supported-failed | Not implemented into GA | eligibility failed; Disabled in VATS for this location and type of care
vaos-eligibility-request-exceeded-outstanding-requests-failed | `{ flow: "request", health-TypeOfCare: "143", health-FacilityID: "984GB"}` | eligibility failed; reached the limit for appointment requests at this location
vaos-eligibility-request-past-visits-failed | `{ flow: "request", health-TypeOfCare: "143", health-FacilityID: "984GB"}` | eligibility failed; there has not been a recent visit
vaos-error |
vaos-facilities-not-listed-click |
vaos-facilities-not-listed-locator-click |
vaos-get-future-appointments-failed | | If any of the upcoming appointments fetches fail: va or cc
vaos-get-future-appointments-retrieved |
vaos-get-future-appointments-started | | When upcoming appointments are fetched on the homepage
vaos-get-past-appointments-failed | | When either the va or cc appointment fetches fail
vaos-get-past-appointments-retrieved |
vaos-get-past-appointments-started | | When past appointments are fetched
vaos-get-pending-appointments-failed | | If the request fetch fails
vaos-get-pending-appointments-retrieved |
vaos-get-pending-appointments-started | | When requests are fetched
vaos-new-appointment-list |
vaos-number-of-items-retrieved | types: `express_care`, `upcoming`, `video_home`, `video_va_facility`, `video_gfe`, `video_atlas`, `video_store_forward` | When a list of items are successfully fetched for the appt list
vaos-order-position-provider-selection |
vaos-past-appointment-details-descriptive-back-link |
vaos-pending-appointment-details-descriptive-back-link |
vaos-pending-confirmation-details-descriptive-back-link |
vaos-print-list-clicked |
vaos-provider-list-paginate |
vaos-request-current-location-allowed |
vaos-request-current-location-blocked |
vaos-request-current-location-clicked |
vaos-request-path-started |
vaos-request-submission | `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care", vaos-community-care-preferred-language: undefined }` | User completed the form and a submission was attempted
vaos-request-submission-failed | `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | Submission wasn't successful
vaos-request-submission-successful | `{ flow: "va-request", health-ReasonForAppointment: "routine-follow-up", health-TypeOfCare: "Primary care" }` | Submission was successful
vaos-schedule-another-appointment-button-clicked |
vaos-schedule-appointment-button-clicked |
vaos-schedule-covid19-button-clicked |
vaos-status-past-link-clicked |
vaos-status-pending-link-clicked |
vaos-upcoming-appointment-details-descriptive-back-link |
vaos-update-address-alert-displayed |
vaos-variant-default-alphabetical |
vaos-variant-default-distanceFromCurrentLocation |
vaos-variant-default-distanceFromResidentialAddress |
vaos-variant-final-alphabetical |
vaos-variant-final-distanceFromCurrentLocation |
vaos-variant-final-distanceFromResidentialAddress |
vaos-variant-method-alphabetical |
vaos-variant-method-distanceFromCurrentLocation |
vaos-variant-method-distanceFromResidentialAddress |
vaos-variant-shown |
vaos-view-your-appointments-button-clicked |

### Custom Dimensions/Metrics in Google Analytics
| Dimension/Metric Name | Associated Event | Description |
| ------------- | ------------- | ------------- |
Health Care VAOS - Appointment Type | `vaos-cancel-appointment-submission`, `vaos-cancel-appointment-submission-successful`, `vaos-cancel-appointment-submission-failed` 
Health Care VAOS - Facility Type | `vaos-cancel-appointment-submission`, `vaos-cancel-appointment-submission-successful`, `vaos-cancel-appointment-submission-failed` 
Health Care VAOS - Flow | `vaos-community-care-submission`, `vaos-direct-submission`, `vaos-request-submission`, `vaos-covid19-submission`, `vaos-community-care-submission-successful`, `vaos-direct-submission-successful`, `vaos-request-submission-successful`, `vaos-covid19-submission-successful`, `vaos-community-care-submission-failed`, `vaos-direct-submission-failed`, `vaos-request-submission-failed`, `vaos-covid19-submission-failed` 
Health Care VAOS - Number of Days from Preference | `vaos-community-care-submission`, `vaos-request-submission`, `vaos-community-care-submission-successful`, `vaos-request-submission-successful`, `vaos-community-care-submission-failed`, `vaos-request-submission-failed` | Numbers of days from date of submission the user is asking for an appointment
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
nav-tab-clicked | | When a tab is clicked, would've occured on original tab design of appointments list
vaos-community-care-legacy-provider-page |
vaos-community-care-preferences-continue |
vaos-eligibility-request-supported-failed | Not implemented into GA | eligibility failed; Disabled in VATS for this location and type of care
vaos-eligibility-supported-facilities-failed | `{ health-TypeOfCare: "Mental health", health-FacilityID: "000XYZ"}` | eligibility failed; faciity failed support check
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
vaos-facilities-not-listed-click |
vaos-int-radio-button-option-click |
vaos-past-appointments-legacy-link-clicked |
vaos-return-to-legacy-link-clicked | `{ typeOfCare: ‘Primary Care’, flow: ‘direct’}` | "Return to legacy VAOS" link clicked
vaos-schedule-new-appointment-started |


### Removed Custom Dimensions/Metrics in Google Analytics
| Dimension/Metric Name | Associated Event | Description |
| ------------- | ------------- | ------------- |
Health Care VAOS - Express Care Reason | 
Health Care VAOS - Express Care Number of Cards | 



