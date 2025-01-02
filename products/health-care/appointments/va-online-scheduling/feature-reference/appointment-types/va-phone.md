# VA phone appointment

## Overview

A scheduled telehealth appointment that the Veteran joins over the phone.

## User stories

- As a Veteran, I want to join my telehealth appointments.
- See [user stories for booked appointments](./all-appointment-types.md#booked-appointment-user-stories).

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- Follows [requirements for canceling appointments](../tools/tool-cancel.md#requirements).
- Follows [requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md#requirements).
- Follows [requirements for printing appointments](../tools/tool-print.md#requirements).
- User can review data and complete actions noted in the following table:

| Data and actions                                           | Upcoming | Past | Canceled |
| ---------------------------------------------------------- | -------- | ---- | -------- |
| Appointment Date and Time                                  | ✅        | ✅    | ✅        |
| Status: Past                                               |          | ✅    |          |
| Status: Canceled                                           |          |      | ✅        |
| Type of Care                                               | ✅        | ✅    | ✅        |
| Provider Name                                              | 1          |  1    |  1       |
| Modality                                                   | ✅        | ✅    | ✅        |
| Joining Instructions                                       | ✅        |      |          |
| Facility Name                                              | ✅        | ✅    | ✅        |
| Facility Address                                           | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅        | ✅    | ✅        |
| Clinic Name                                                | ✅        | ✅    | ✅        |
| Phone Number                                               | ✅        | ✅    | ✅        |
| Reason                                                     | ✅        | ✅    | ✅        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Cancel Action](../tools/tool-cancel.md)                   | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |

Notes:
1: 02/23/2024 - Requirement not yet met

### Technical Notes
Telephone is always a primary stop code, never a secondary–e.g., users create a telephone clinic with only a primary telephone stop code or create a clinic with a primary telephone stop code and then a secondary like primary care.  There are several primary stop codes for telephone.  See https://issues.mobilehealth.va.gov/browse/EAS-1425.

### Empty States and Alerts

From ticket [69851](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69851#issuecomment-2566727215): We retrieve the appointment information using one of the following calls:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+1}&statuses[]=proposed&statuses[]=cancelled` and `/vaos/v2/appointments?_include=facilities,clinics&start={today-30}&end={today+395}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics,avs`

Data points:

| Role | Section name | Source field name | Empty state logic |
| - | - | - | - |
| Appointment date and time | When | `appt.localStartTime` | Start time always populated |
| Type of Care | What | `appt.serviceType` | Do not display if not available. |
| Provider Name | Who | `appt.practitioners[0].name` | Do not display if not available |
| Facility Name | Scheduling facility | `facilityData[locationId].name` or `appt.location.attributes.name` | When not available, display "Facility details not available" and display a link to find or view facility information. |
| Facility Address | Scheduling facility | `facilityData[locationId].physicalAddress` or `appt.location.attributes.physicalAddress` | When not available, display "Facility details not available" and display a link to find or view facility information. |
| Clinic Name | Scheduling facility | `appt.friendlyName` or `appt.serviceName` | Display "Clinic not available" if not available. |
| Phone number | Scheduling facility | `facilityData[locationId].phone.main` or `appt.location.attributes.phone.main` or `appt.extension.clinic.phoneNumber` | Phone number priority: 1. Clinic phone number, 2. Facility phone number, 3. VA phone number. |
| Veteran Reason For Appointment | Details you shared with your provider | `appt.reasonForAppointment` and `appt.patientComments` | Display "Not available" if not available. | 
## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2019-19997&t=jIup4zOCLhBYNOvO-4)
- [Past appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=127-22836&t=jIup4zOCLhBYNOvO-4)

**UI design specs**
- [Upcoming](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26354&mode=design&t=XoWmwKDNFveoItRx-11)
- [Past](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26354&mode=design&t=XoWmwKDNFveoItRx-11)
- [Canceled](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26354&mode=design&t=XoWmwKDNFveoItRx-11)

**Page content**
- [Upcoming](../../content/appointment-details.md#va-phone-appointment---upcoming)
- [Past](../../content/appointment-details.md#va-phone-appointment---past)
- [Canceled](../../content/appointment-details.md#va-phone-appointment---canceled)




## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- Event 1
- Event 2

[All events VAOS tracks](Link TBD)



## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** [Add staging URL]

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

**Endpoints**
`replace-with-endpoint-1`

`replace-with-endpoint-2`

To see the current api responses:
- Navigate to the [vets-api swagger](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/)
- Search for `https://api.va.gov/vaos/v2/apidocs`

<details>
  <summary>Sample response</summary>

```json
[Add sample response]
```

</details>

## Development testing
<!-- Unit tests, API tests -->

### [Call name] call

[How to use the VCR test framework](https://www.rubydoc.info/gems/vcr/VCR)
  
<details>
  <summary><b>VCR cassette</b></summary>

```
[Add VCR cassette]

```
</details>

<details>
  <summary><b>Example test for "[Call name]" that corresponds to the above VCR cassette.</b></summary>

```
[Add example test]
```
</details>
