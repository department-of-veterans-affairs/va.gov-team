# Community care appointment

## Overview

Details for a scheduled appointment with a community care provider.

## User stories

See [user stories for booked appointments](./all-appointment-types.md#booked-appointment-user-stories).

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
| Provider Name                                              | ✅        | ✅    | ✅        |
| Treatment Specialty*                                        | ✅        | ✅    | ✅        |
| Modality**                                                   | See note | See note | See note |
| Provider Address                                           | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅        | ✅    | ✅        |
| Provider Phone Number                                      | ✅        | ✅    | ✅        |
| Reason                                                     | ✅        | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅        |      |          |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |

\* See: [Treatment Specialty](../../../appointments-reference/data-reference/data-definitions.md#treatment-specialty)

\*\* 03/18/2024 - We currently don't receive modality information for scheduled community care appointments, so we have to assume they could be telehealth or in-person. In the future we would like to show this information.

### Empty States and Alerts

From [ticket 69852](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69852#issuecomment-2566736403): We retrieve the appointment information using one of the following calls:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+1}&statuses[]=proposed&statuses[]=cancelled` and `/vaos/v2/appointments?_include=facilities,clinics&start={today-30}&end={today+395}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics,avs`

Data points:

| Role | Section name | Source field name | Empty state logic |
| - | - | - | - |
| Appointment date and time | When | `appt.localStartTime` | Start time always populated |
| Type of Care | What | `appt.serviceType` | Do not display if not available. |
| Provider Name | Provider | `appt.practitioners[0].name` | Display "Provider information not available" if not available. |
| Treatment Specialty | Provider | `appt.extension.ccTreatingSpecialty` | Display "Treatment specialty not available" if not available. |
| Provider Address | Provider | `appt.extension.ccLocation.address` | Display "Address not available" if not available. |
| Provider Phone | Provider | `appt.extension.ccLocation.telecom` | Do not display if not available. |
| Veteran Reason For Appointment | Details you shared with your provider | `appt.patientComments` | Display "Not available" if not available. | 

     
 

## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=kDXwMWn2YUhVmLLB-4)
- [Past appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3497&t=kDXwMWn2YUhVmLLB-4)

**UI design specs**
[Community care details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-114180&t=gPsyz7IrtgxZbZss-4)

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
