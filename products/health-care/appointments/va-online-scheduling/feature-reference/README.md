
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

| Flow | Page |
|---|---|
| All flows | [Choose a type of care](./schedule-flow/all--type-of-care.md) |
| All flows | [Choose a type of sleep care](./schedule-flow/all--choose-a-type-of-sleep-care.md) |
| All flows | [Choose a type of eye care](./schedule-flow/all--choose-a-type-of-eye-care.md) |
| All flows | [Choose VA or CC facility](./schedule-flow/all--choose-va-or-cc-facility.md) |
| All flows | [Choose a type of audiology care](./schedule-flow/all--choose-a-type-of-audiology-care.md) |
| VA direct-schedule | [Choose a location](./schedule-flow/va-direct--choose-location.md) | 
| VA direct-schedule | [Cerner location redirect](./schedule-flow/va-direct--cerner-location-redirect.md) |
| VA direct-schedule | [Choose a clinic](./schedule-flow/va-direct--choose-a-clinic.md) |
| VA direct-schedule | [Preferred date](./schedule-flow/va-direct--preferred-date.md)
| VA direct-schedule | [Choose a date](./schedule-flow/va-direct--choose-a-date.md) |
| VA direct-schedule | [Reason for appointment](./schedule-flow/va-direct--reason-for-appointment.md) |
| VA direct-schedule | [Confirm contact information](./schedule-flow/va-direct--contact-information.md) |
| VA direct-schedule | [Review and submit](./schedule-flow/va-direct--review-and-submit.md) |
| VA request | [Preferred date](./schedule-flow/va-request--preferred-date.md) |
| VA request | [Reason for appointment](./schedule-flow/va-request--reason-for-appointment.md) |
| VA request | [Preferred modality](./schedule-flow/va-request--preferred-modality.md) |
| VA request | [Confirm contact information](./schedule-flow/va-request--contact-information.md) |
| VA request | [Review and submit](./schedule-flow/va-request--review-and-submit.md) |
| CC request | [Preferred date](./schedule-flow/cc-request--preferred-date.md) |
| CC request | [Nearest city](./schedule-flow/cc-request--nearest-city.md) |
| CC request | [Request a provider](./schedule-flow/cc-request--request-a-provider.md) |
| CC request | [Choose a language](./schedule-flow/cc-request--choose-a-language.md) |
| CC request | [Reason for appointment](./schedule-flow/cc-request--reason-for-appointment.md) |
| CC request | [Confirm contact information](./schedule-flow/cc-request--contact-information.md) |
| CC request | [Review and submit](./schedule-flow/cc-request--review-and-submit.md) |



