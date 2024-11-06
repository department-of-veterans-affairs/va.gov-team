# VA Video Care at home appointment

## Overview

A scheduled telehealth appointment that the Veteran attends through VA Video Care on the device of their choice.

## User stories

- As a Veteran, I want to join my telehealth appointments.
- See [user stories for booked appointments](./all-appointment-types.md#booked-appointment-user-stories).

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- Follows [requirements for canceling appointments](../tools/tool-cancel.md#requirements).
- Follows [requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md#requirements).
- Follows [requirements for printing appointments](../tools/tool-print.md#requirements).

- Display a link to join the appointment:
  - The video visit link must display as active for 30 minutes prior to the appointment and for 4 hours after.
  - Video Visit appointments (`kind = telehealth`) without telehealth links must display additional instructions to the veteran regarding the missing links

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
| Link to Join                                               | ✅        |      |          |
| [Instructions](../../../appointments-reference/data-reference/data-definitions.md#instructions-how-to-join): [prepare for video visit](../../../appointments-reference/data-reference/data-definitions.md#video-visit-preparation---video-at-home) | ✅        |      |          |
| Call to Reschedule Alert                                   | ✅        |      |          |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |

Notes:
1: 02/23/2024 - Requirement not yet met


### Empty states and alerts

From [ticket 69846](https://app.zenhub.com/workspaces/appointments-fe-ux-5fff340c2d80a4000fb6f69c/issues/gh/department-of-veterans-affairs/va.gov-team/69846)

We retrieve the appointment information using one of the following calls:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+1}&statuses[]=proposed&statuses[]=cancelled` and `/vaos/v2/appointments?_include=facilities,clinics&start={today-30}&end={today+395}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics,avs`

Data points:

| Role | Section name | Source field name | Empty state logic |
| - | - | - | - |
| Link to Join URL | How to join | `appt.telehealth.url` | This link is only displayed for upcoming appointments from 30 minutes before the start time to 4 hours afterwards. If this is unavailable, it will display "Please contact your facility for help joining this appointment." along with the facility or clinic phone number. |
| Preferred date and time | When | `appt.localStartTime` | Start time always populated |
| Type of Care | What | `appt.serviceType` | Do not display if not available |
| Provider Name | Who | `appt.practitioners[0].name` | Do not display if not available |
| Facility Name | Need to make changes/Scheduling Facility | `facilityData[locationId].name` or `appt.location.attributes.name` | For upcoming appointments, display "Facility not available" if not available. For past/cancelled appointments, do not display if not available. The heading is "Need to make changes" for upcoming appointments and "Scheduling Facility" for past/cancelled appointments |
| Facility Address | Need to make changes/Scheduling Facility | `facilityData[locationId].physicalAddress` or `appt.location.attributes.physicalAddress` | For upcoming appointments, display "Facility not available" if not available. For past/cancelled appointments, do not display if not available. The heading is "Need to make changes" for upcoming appointments and "Scheduling Facility" for past/cancelled appointments |
| Clinic Name | Need to make changes/Scheduling Facility | `appt.friendlyName` or `appt.serviceName` | Display "Clinic not available" if not available. The heading is "Need to make changes" for upcoming appointments and "Scheduling Facility" for past/cancelled appointments |
| Phone number | Need to make changes/Scheduling Facility | `facilityData[locationId].phone.main` or `appt.location.attributes.phone.main` or `appt.extension.clinic.phoneNumber` | Phone number priority: 1. Clinic phone number, 2. Facility phone number, 3. VA phone number. The heading is "Need to make changes" for upcoming appointments and "Scheduling Facility" for past/cancelled appointments |

Note that we don't display "Modality" and "Veteran Reason For Appointment". These may have become obsolete after this ticket was filed. There are also a few other details we do display that weren't covered in the original ticket including "Facility Name" and "Clinic Name"
 
 
### Screenshots

| Upcoming | Past | Cancelled | Empty state | 
| - | - | - | - | 
| ![Image](https://github.com/user-attachments/assets/82000d01-b302-43af-baf6-6fa90bbd13b2) | ![Image](https://github.com/user-attachments/assets/abf301f0-d63b-4da5-a91a-56cf94f29a32) | ![Image](https://github.com/user-attachments/assets/bdb03047-ac5d-496a-8425-d40c277d4ffa) | ![Image](https://github.com/user-attachments/assets/9bd1cf45-5681-4591-9ec0-fca59aeac0ce) |


### Technical notes

See [Creating Video Visits in VistA](../appointment-types/all-appointment-types.md#creating-video-visits-in-vista).

## Specifications

## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=kDXwMWn2YUhVmLLB-4)
- [Past appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3497&t=kDXwMWn2YUhVmLLB-4)

**UI design specs**
[VA video care at home](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-86021&t=W6qupE1wzXd7CUz3-4)

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
