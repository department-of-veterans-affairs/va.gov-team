# Claim exam appointment

## Overview

A scheduled examination that is scheduled as part of filing a disability claim.

See: [VA Claim Exam (C&P Exam)](https://www.va.gov/disability/va-claim-exam/)

## User stories

See [user stories for all appointment types](./all-appointment-types#user-stories.md).

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- [Requirements for canceling appointments](../tools/tool-cancel.md#requirements) are followed.
- [Requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md#requirements) are followed.
- [Requirements for printing appointments](../tools/tool-print.md#requirements) are followed.
- User can review data and complete actions noted in the following table:

| Data and actions                                           | Confirmed | Past | Canceled |
| ---------------------------------------------------------- | --------- | ---- | -------- |
| Appointment Date and Time                                  | ✅         | ✅    | ✅        |
| Status: Past                                               |           | ✅    |          |
| Status: Canceled                                           |           |      | ✅        |
| Appointment Instructions                                   | ✅         |      |          |
| Type of Care                                               | ✅         | ✅    | ✅        |
| Provider Name                                              | 1          |  1    |  1       |
| Facility Name                                              | ✅         | ✅    | ✅        |
| Facility Address                                           | ✅         | ✅    | ✅        |
| Directions Link                                            | ✅         | ✅    | ✅        |
| Clinic Name                                                | ✅         | ✅    | ✅        |
| Facility Phone Number                                      | ✅         | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅         | ✅    | ✅        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅         |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅         | ✅    | ✅        |

Notes:
1: 02/23/2024 - Requirement not yet met

### Technical note

A VistA appointment with an `APPOINTMENT TYPE = Compensation and Pension` must display in VAOS with the type of care "Claim exam".

### Empty states and alerts

From ticket [69854](https://app.zenhub.com/workspaces/appointments-fe-ux-5fff340c2d80a4000fb6f69c/issues/gh/department-of-veterans-affairs/va.gov-team/69854)

We retrieve the appointment information using one of the following calls:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+1}&statuses[]=proposed&statuses[]=cancelled` and `/vaos/v2/appointments?_include=facilities,clinics&start={today-30}&end={today+395}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics,avs`

Data points:

| Role | Section name | Source field name | Empty state logic |
| - | - | - | - |
| Preferred date and time | When | `appt.localStartTime` | Start time always populated |
| Type of Care | What | `vaos.apiData.serviceCategory.[first].text` | Do not display if not available. Note that the field on the appointment will return `COMPENSATION & PENSION` which is translated into the friendly name "Claim exam" in the source code |
| Provider Name | Who | `appt.practitioners[0].name` | Do not display if not available |
| Facility Name | Where to attend/Where/Scheduling Facility | `facilityData[locationId].name` or `appt.location.attributes.name` | The heading is "Where to attend" for upcoming appointments and "Where" for past/cancelled appointments. A potential duplicate "Scheduling Facility" section is also displayed for past/cancelled appointments. When not available, display "Facility details not available" and display a link to find or view facility information. |
| Facility Address | Where to attend/Where | `facilityData[locationId].physicalAddress` or `appt.location.attributes.physicalAddress` | The heading is "Where to attend" for upcoming appointments and "Where" for past/cancelled appointments. When not available, display "Facility details not available" and display a link to find or view facility information. |
| Clinic Name | Where to attend/Where | `appt.friendlyName` or `appt.serviceName` | Display "Clinic not available" if not available. The heading is "Where to attend" for upcoming appointments and "Where" for past/cancelled appointments |
| Phone number | Need to make changes/Scheduling Facility/Where/Where to attend | `facilityData[locationId].phone.main` or `appt.location.attributes.phone.main` or `appt.extension.clinic.phoneNumber` | Phone number priority: 1. Clinic phone number, 2. Facility phone number, 3. VA phone number. The heading is "Need to make changes" and "Where to attend" for upcoming appointments and "Where" and "Scheduling facility" for past/cancelled appointments. |
 
### Screenshots

| Upcoming | Past | Cancelled | Empty state | 
| - | - | - | - | 
| ![Image](https://github.com/user-attachments/assets/69467f74-226a-4cca-b2ab-41d97162d074) | ![Image](https://github.com/user-attachments/assets/51285a50-810b-450c-a4a4-4625128fa9be) | ![Image](https://github.com/user-attachments/assets/44ec1c42-68a9-4beb-bbbf-9c67bd9100ce) | ![Image](https://github.com/user-attachments/assets/c4939c2d-340d-401b-afab-f9e9a4705d8e) |

Looking at the logic and screenshots, I think the "Scheduling facility" section is redundant and should be removed, what do you think @outerpress?

## Specifications

**User flows:**
- [Upcoming](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=2019-19997&t=lDUJykyhV8NRJ2zc-4)
- [Past](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=127-22836&t=lDUJykyhV8NRJ2zc-4)

**UI design specs**  
[Claim exam details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-107343&t=W6qupE1wzXd7CUz3-4)

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
