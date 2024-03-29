
# Appointments Feature Reference

## Overview

Product, business, and technical documentation of [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling) features.

[How to update the feature reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/how-to-update-feature-reference.md)

## Backend documentation

[Backend logic](./backend-logic.md)  
[VistA appointments, facilities, and clinics](./vista-appointments-facilities-clinics.md)

## Access the Appointments Tool

| Feature | Usage | 
|---|---|
| [Login and access](./login-and-access.md) | Authentication and access rules. |
| [Appointments portal](./appointments-home.md) | Starting page to schedule or manage appointments |


## Manage appointments

### Appointment summary views

| Feature | Usage | 
|---|---|
| [Upcoming appointments](./appointment-lists/upcoming-list.md) | View all future and in progress appointments |
| [Past appointments](./appointment-lists/past-list.md) | View all appointments from the last two years |  
| [Pending appointments](./appointment-lists/pending-list.md) | View all pending and canceled requests | 

### Appointment details views
Booked appointments through VA or CC facilities.

| Feature | Description |
|---|---|
| [Data definitions](../../appointments-reference/data-reference/data-definitions.mddata-definitions.md) | Explanations of the data VAOS displays in appointment types |
| [VA In-person](./appointment-types/va-in-person.md)  | Scheduled, in person appointments at a VA facility |
| [VA In-person Vaccine](./appointment-types/va-in-person-vaccine.md) | Scheduled, in person appointments at a VA facility for a COVID-19 vaccine | Yes |
| [VA Video Care at Home](./appointment-types/va-video-care-at-home.md) | Scheduled telehealth appointments over VA Video Care |
| [VA Video Care at a VA location](./appointment-types/va-video-care-at-a-va-location.md) |  Scheduled telehealth appointments over VA Video Care that a Veteran joins at a VA facility |
| [VA Video Care on GFE](./appointment-types/va-video-care-on-gfe.md) |  Scheduled telehealth appointments over VA Video Care that a Veteran joins over a GFE provided by a VA facility | Yes |
| [VA Video Care at an ATLAS location](./appointment-types/va-video-care-at-atlas-location.md) |  Scheduled telehealth appointments that a Veteran joins at an ATLAS facility  |
| [VA Phone](./appointment-types/va-phone.md) |  Scheduled telehealth appointments that a Veteran joins over the phone. |
| [Community care](./appointment-types/community-care.md) |  Scheduled appointment that a Veteran joins at a community care provider |
| [Claim exam appointment](./appointment-types/claim-exam.md) | Scheduled appointment for a claim exam |

### Request details views
Appointments that Veterans have requested but VA has not booked.

| Feature | Description |
|---|---|
| [VA appointment request](./appointment-types/va-request.md)  | Request for a VA appointment |
| [Community care appointment request](./appointment-types/community-care-request.md) | Request for a community care appointment |

### Appointment management tools
Tools Veterans can use to manage their appointments and requests.

| Feature | Description | 
|---|---|
| [Cancel appointment/request](./tools/tool-cancel.md) | Veterans can cancel some appointments online. | 
| [Add to calendar](./tools/tool-add-to-calendar.md) | Veterans can download a file that will let them add an appointment to their calendar | 
| [Print](./tools/tool-print.md) | Veterans can print details for appointments | 

## Schedule appointments
Tools for Veterans to schedule or request appointments.

### Start of scheduling flows

These pages are the starting point for all the other scheduling flows. Users are redirected from these pages to the other flows depending on their choices and eligibility.

| Step # | Page |
|---|---|
| 1 | [Choose a type of care](./schedule-flow/all--type-of-care.md) |
| 1a | [Choose a type of sleep care](./schedule-flow/all--choose-a-type-of-sleep-care.md) |
| 1b | [Choose a type of eye care](./schedule-flow/all--choose-a-type-of-eye-care.md) |
| 1c | [Choose a type of audiology care](./schedule-flow/all--choose-a-type-of-audiology-care.md) |
| 2 | [Choose VA or CC facility](./schedule-flow/all--choose-va-or-cc-facility.md) |

### Direct schedule VA appointments

| Step # | Page |
|---|---|
| 1 | [Choose a location](./schedule-flow/va-direct--choose-location.md) | 
| 1a | [Cerner location redirect](./schedule-flow/va-direct--cerner-location-redirect.md) |
| 2 | [Choose a clinic](./schedule-flow/va-direct--choose-a-clinic.md) |
| 3 | [Preferred date](./schedule-flow/va-direct--preferred-date.md)
| 4 | [Choose a date](./schedule-flow/va-direct--choose-a-date.md) |
| 5 | [Reason for appointment](./schedule-flow/va-direct--reason-for-appointment.md) |
| 6 | [Confirm contact information](./schedule-flow/va-direct--contact-information.md) |
| 7 | [Review and submit](./schedule-flow/va-direct--review-and-submit.md) |

### Request VA appointments

| Step # | Page |
|---|---|
| 1 | [Preferred date](./schedule-flow/va-request--preferred-date.md) |
| 2 | [Reason for appointment](./schedule-flow/va-request--reason-for-appointment.md) |
| 3 | [Preferred modality](./schedule-flow/va-request--preferred-modality.md) |
| 4 | [Confirm contact information](./schedule-flow/va-request--contact-information.md) |
| 5 | [Review and submit](./schedule-flow/va-request--review-and-submit.md) |

### Request CC appointments

| Step # | Page |
|---|---|
| 1 | [Preferred date](./schedule-flow/cc-request--preferred-date.md) |
| 2 | [Nearest city](./schedule-flow/cc-request--nearest-city.md) |
| 3 | [Request a provider](./schedule-flow/cc-request--request-a-provider.md) |
| 4 | [Choose a language](./schedule-flow/cc-request--choose-a-language.md) |
| 5| [Reason for appointment](./schedule-flow/cc-request--reason-for-appointment.md) |
| 6 | [Confirm contact information](./schedule-flow/cc-request--contact-information.md) |
| 7 | [Review and submit](./schedule-flow/cc-request--review-and-submit.md) |


### Direct-Schedule COVID-19 vaccine appointments

Not documented
