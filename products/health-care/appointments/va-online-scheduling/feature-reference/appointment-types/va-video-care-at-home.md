# VA Video Care at home appointment

## Overview

A scheduled telehealth appointment that the Veteran attends through VA Video Care on the device of their choice.

## User stories

- As a Veteran, I want to join my telehealth appointments
- As a Veteran, I want to manage my telehealth appointments.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- User can review data to understand their appointment (see table below).
- User can complete tasks related to their appointment (see table below).
- [Requirements for canceling appointments](../tools/tool-cancel.md#requirements) are followed.
- [Requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md) are followed.
- [Requirements for printing appointments](../tools/tool-print.md) are followed.

- Video Visit appointments must display a link to join the appointment  
  - Video Visit appointments (kind = telehealth) without telehealth links must display additional instructions to the veteran regarding the missing links
  - The video visit link must display as active for 30 minutes prior to the appointment and for 4 hours after.  
  - Video visit instructions from Virtual Care Manager (VCM)instructions must be suppressed if the instructions are any of the following:
    - `Message sent in MyHealtheVet`
    - `Resources Mailed to Patient`
    - `Signup for My HealtheVet  Message`

| Display this data                                    | For Active Appts  | For Canceled Appts |
| ---------------------------------------------------- | ----------------- | ------------------ |
| Appointment Date and Time (including Month, Day, Day of Week, Time and Time zone)                                                  |  ✅               |  ✅                 |
| Canceled status                                      |                   |  ✅                 |
| Joining Instructions                                 |  ✅               |                     |
| Link to join appointment                             |  ✅               |                     |
| Type of Care                                         |  ✅               |  ✅                 |
| Provider                                             |  ✅               |  ✅                 |
| Location address                                     |  ✅               |  ✅                 |
| Location Phone Number                                |  ✅               |  ✅                 |
| Prepare for video visit instructions                 |  ✅               |                     |

| Include these actions                                      | For Active Appts  | For Canceled appts |
| ---------------------------------------------------------- | ----------------- | ------------------ |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅                 |                   |
| [Print Action](../tools/tool-print.md)                     | ✅                 |                   |

## User interface design

[User flow](Add link) 

[Page template](Add link)

[Page content](Add link)

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
