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

## Technical note

A VistA appointment with an `APPOINTMENT TYPE = Compensation and Pension` must display in VAOS with the type of care "Claim exam".

## Specifications

**User flows:**
- [Upcoming](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=2019-19997&t=lDUJykyhV8NRJ2zc-4)
[Past](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=127-22836&t=lDUJykyhV8NRJ2zc-4)

**UI design specs:**
- Upcoming (TBD)
- Past (TBD)
- Canceled (TBD)

**Page content:**
- [Upcoming](../../content/appointment-details.md#claim-exam-booked---upcoming)
- [Past](../../content/appointment-details.md#claim-exam-booked---past)
- [Canceled](../../content/appointment-details.md#claim-exam-booked---canceled)

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- Event 1
- Event 2

[All events VAOS tracks](Link TBD)

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->

### [Alert description]
<!-- Add a new section for each alert -->

**Alert trigger**
[Description of what causes this alert to display]

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

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
