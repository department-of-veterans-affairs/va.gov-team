# VA Video Care at ATLAS location appointment

## Overview

A scheduled telehealth appointment that the Veteran joins from an ATLAS location.

## User stories

- As a Veteran, I want to join my telehealth appointments.
- As a Veteran, I want to manage my telehealth appointments.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- User can review data to understand their appointment (see table below).
- User can complete tasks related to their appointment (see table below).
- [Requirements for canceling appointments](../tools/tool-cancel.md#requirements) are followed.
- [Requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md#requirements) are followed.
- [Requirements for printing appointments](../tools/tool-print.md#requirements) are followed.

| Data and actions                                           | Upcoming | Past | Canceled |
| ---------------------------------------------------------- | -------- | ---- | -------- |
| Appointment Date and Time                                  | ✅        | ✅    | ✅        |
| Status: Past                                               |          | ✅    |          |
| Status: Canceled                                           |          |      | ✅        |
| Type of Care                                               | ✅        | ✅    | ✅        |
| Modality                                                   | ✅        | ✅    | ✅        |
| Joining Instructions                                       | ✅        |      |          |
| ATLAS Location Name                                        | ✅        | ✅    | ✅        |
| ATLAS Location Address                                     | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅        | ✅    | ✅        |
| Appointment Code                                           | ✅        |      |          |
| Provider Name                                              | ✅        | ✅    | ✅        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅        |      |

## User interface design

[User flow](Add link) 

Page template:
- [Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26648&mode=design&t=bs8m3MnTZ56hExUO-4)
- [Past](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26681&mode=design&t=bs8m3MnTZ56hExUO-4)
- [Canceled](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26711&mode=design&t=bs8m3MnTZ56hExUO-4)

Page content:
- [Upcoming](../../content/appointment-details.md#va-vvc-gfe-appointment---upcoming)
- [Past](../../content/appointment-details.md#va-vvc-gfe-appointment---past)
- [Canceled](../../content/appointment-details.md#va-vvc-gfe-appointment---canceled)

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
