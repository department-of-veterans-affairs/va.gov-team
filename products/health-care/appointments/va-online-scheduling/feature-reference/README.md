
# Appointments Feature Reference

## Overview

Product, business, and technical documentation of [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling) features.

<!-- 
See also:
- [Business rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#vaos-product-and-business-rules)
- [User flows](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=267-19369&t=jIup4zOCLhBYNOvO-4)
- [Copy docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/content)
- [Page templates](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=0-2&t=vycMTsKnfBPu5MKo-4)
-->

## Manage appointments

### Appointment summary views

| Feature | Usage | 
|---|---|
| [Appointments home](./appointment-lists/appointments-home.md) | Starting page to schedule or manage appointments |
| [Upcoming appointments](./appointment-lists/upcoming-list.md) | View all future and in progress appointments |
| [Past appointments](./appointment-lists/past-list.md) | View all appointments from the last two years |  
| [Pending appointments](./appointment-lists/upcoming-list.md) | View all pending and canceled requests | 

### Appointment details views
Booked appointments through VA or CC facilities.

| Feature | Description | Supported |
|---|---|---|
| [VA In-person](./appointment-types/va-in-person.md)  | Scheduled, in person appointments at a VA facility | Yes |
| [VA In-person Vaccine](./appointment-types/va-in-person-vaccine.md) | Scheduled, in person appointments at a VA facility for a COVID-19 vaccine | Yes |
| [VA Video Care at Home](./appointment-types/va-video-care-at-home.md) | Scheduled telehealth appointments over VA Video Care | Yes |
| [VA Video Care at a VA location](./appointment-types/va-video-care-at-a-va-location.md) |  Scheduled telehealth appointments over VA Video Care that a Veteran joins at a VA facility | Yes | 
| VA Video Care on GFE |  Scheduled telehealth appointments over VA Video Care that a Veteran joins over a GFE provided by a VA facility | Yes |
| VA Video Care at an ATLAS location |  Scheduled telehealth appointments that a Veteran joins at an ATLAS facility  | Yes |
| VA Phone |  Scheduled telehealth appointments that a Veteran joins over the phone. | Yes |
| Community Care |  Scheduled appointment that a Veteran joins at a community care provider | Yes | 
| Compensation and Pension appointment | Scheduled appointment for a Compensation and Pension exam | Yes |

### Request details views
Appointments that Veterans have requested but VA has not booked.

| Feature | Description | Supported |
|---|---|---|
| VA Appointment Request  | Request for a VA appointment | |
| Community Care Appointment request | Request for a community care appointment | |

### Appointment management tools
Tools Veterans can use to manage their appointments and requests.

| Feature | Description | 
|---|---|
| Cancel appointment/request | | 
| Add to calendar | | 
| Print | | 

## Schedule appointments
Tools for Veterans to schedule or request appointments.

| Flow | Page |
|---|---|
| All flows | [Choose a type of care](./schedule-flow/all--type-of-care.md) |
| All flows | [Choose a type of sleep care](./schedule-flow/choose-a-type-of-sleep-care.md) |
| All flows | [Choose a type of eye care](./schedule-flow/choose-a-type-of-eye-care.md) |
| All flows | [Choose VA or CC facility](./schedule-flow/choose-VA-or-CC-facility.md) |
| All flows | [Choose a type of audiology care](./schedule-flow/choose-a-type-of-audiology-care.md) |
| VA direct-schedule | [Choose a location](./schedule-flow/va-direct--choose-location.md) | 
| VA direct-schedule | [Cerner location redirect](./schedule-flow/Cerner-location-redirect.md) |
| VA direct-schedule | [Choose a clinic](./schedule-flow/choose-a-VA-clinic.md) |
| VA direct-schedule | [Choose a date](./schedule-flow/choose-a-date.md) |
| VA direct-schedule | [Reason for appointment](./schedule-flow/reason-for-appointment.md) |
| VA direct-schedule | [Confirm contact information](./schedule-flow/confirm-contact-information.md) |
| VA direct-schedule | [Review and submit](./schedule-flow/review-and-submit-VA-direct-schedule.md) |
| VA request | [Preferred date](./schedule-flow/preferred-date-VA-request.md) |
| VA request | [Reason for appointment](./schedule-flow/reason-for-appointment-VA-request.md) |
| VA request | [Preferred modality](./schedule-flow/preferred-modality.md) |
| VA request | [Confirm contact information](./schedule-flow/confirm-contact-information-request.md) |
| VA request | [Review and submit](./schedule-flow/review-and-submit-VA-request.md) |
| CC request | [Preferred date](./schedule-flow/preferred-date-CC.md) |
| CC request | [Nearest city](./schedule-flow/nearest-city-CC.md) |
| CC request | [Request a provider](./schedule-flow/Request-a-provider.md) |
| CC request | [Choose a language](./schedule-flow/Choose-a-language.md) |
| CC request | [Reason for appointment](./schedule-flow/reason-for-appointment-CC.md) |
| CC request | [Confirm contact information](./schedule-flow/confirm-contact-information-CC.md) |
| CC request | [Review and submit](products/health-care/appointments/va-online-scheduling/feature-reference/schedule-flow/review-and-submit-CC.md) |



