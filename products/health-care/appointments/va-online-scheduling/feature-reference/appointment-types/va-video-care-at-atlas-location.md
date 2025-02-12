# VA Video Care at an ATLAS location appointment

## Overview

A scheduled telehealth appointment that the Veteran joins from an ATLAS (Accessing Telehealth through Local Area Stations) location.

See [Connected Care: VA and ATLAS](https://connectedcare.va.gov/partners/atlas)

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

## Data

| Data and actions                                           | Upcoming | Past | Canceled |
| ---------------------------------------------------------- | -------- | ---- | -------- |
| Appointment Date and Time                                  | ✅        | ✅    | ✅        |
| Status: Past                                               |          | ✅    |          |
| Status: Canceled                                           |          |      | ✅        |
| Type of Care                                               | ✅        | ✅    | ✅        |
| Provider Name                                              | 1          |  1    |  1       |
| Modality                                                   | ✅        | ✅    | ✅        |
| Joining Instructions                                       | ✅        |      |          |
| ATLAS Location Name                                        | 1        | 1    | 1        |
| ATLAS Location Address                                     | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅        | ✅    | ✅        |
| Appointment Code                                           | ✅        |      |          |
| Provider Name                                              | ✅        | ✅    | ✅        |
| [Instructions](../../../appointments-reference/data-reference/data-definitions.md#instructions-how-to-join): [Medication review](../../../appointments-reference/data-reference/data-definitions.md#medication-review---atlas)                            | ✅        | ?    | ?        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅        |      |

Notes:
1: 02/23/2024 - Requirement not yet met

### Empty states and alerts

From ticket [69850](https://app.zenhub.com/workspaces/appointments-fe-ux-5fff340c2d80a4000fb6f69c/issues/gh/department-of-veterans-affairs/va.gov-team/69850)

We retrieve the appointment information using one of the following calls:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+1}&statuses[]=proposed&statuses[]=cancelled` and `/vaos/v2/appointments?_include=facilities,clinics&start={today-30}&end={today+395}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics,avs`

Data points:

| Role | Section name | Source field name | Empty state logic |
| - | - | - | - |
| Appointment Code | How to join | `appt.telehealth.atlas.confirmationCode` | Confirmation code always populated for this type of appointment |
| Preferred date and time | When | `appt.localStartTime` | Start time always populated |
| Type of Care | What | `appt.serviceType` | Do not display if not available |
| Provider Name | Who | `appt.practitioners[0].name` | Do not display if not available |
| ATLAS Location | Where to attend/Where | `appt.telehealth.address` | Do not display if not available. The heading is "Where to attend" for upcoming appointments and "Where" for past/cancelled appointments |
| Facility Name | Need to make changes/Scheduling Facility | `facilityData[locationId].name` or `appt.location.attributes.name` | For upcoming appointments, do not display if not available. For past/cancelled appointments, display "Facility details not available" and link to "Find facility information" if not available. The heading is "Need to make changes" for upcoming appointments and "Scheduling Facility" for past/cancelled appointments |
| Facility Address | Need to make changes | `facilityData[locationId].physicalAddress` or `appt.location.attributes.physicalAddress` | Display "Facility not available" if not available. This section is only displayed for upcoming appointments |
| Clinic Name | Need to make changes | `appt.friendlyName` or `appt.serviceName` | Display "Clinic not available" if not available. This section is only displayed for upcoming appointments |
| Phone number | Need to make changes/Scheduling Facility | `facilityData[locationId].phone.main` or `appt.location.attributes.phone.main` or `appt.extension.clinic.phoneNumber` | Phone number priority: 1. Clinic phone number, 2. Facility phone number, 3. VA phone number. The heading is "Need to make changes" for upcoming appointments and "Scheduling Facility" for past/cancelled appointments |

Note that we don't display "Modality" and "Veteran Reason For Appointment". These may have become obsolete after this ticket was filed. There are also a few other details we do display that weren't covered in the original ticket including "Facility Name" and "Clinic Name"

## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=kDXwMWn2YUhVmLLB-4)
- [Past appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3497&t=kDXwMWn2YUhVmLLB-4)


**UI design specs**
[ATLAS details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-97230&t=MqiIQqIoo9Je6Pfy-4)

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
