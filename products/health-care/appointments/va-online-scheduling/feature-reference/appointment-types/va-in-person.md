# VA in-person appointment

## Overview

A scheduled in-person appointment at a VA facility.

## User stories

See [user stories for all appointment types](./all-appointment-types.md#user-stories).

## Requirements
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

**Functional**

User can review data and complete actions noted in the following table:

| VA In Person                                               |           |          |      |          |
| ---------------------------------------------------------- | --------- | -------- | ---- | -------- |
| Data and actions                                           | Confirmed | Upcoming | Past | Canceled |
| Appointment Date and Time                                  | ✅         | ✅        | ✅    | ✅        |
| Status: Confirmed                                          | ✅         |          |      |          |
| Status: Past                                               |           |          | ✅    |          |
| Status: Canceled                                           |           |          |      | ✅        |
| Type of Care                                               | ✅         | ✅        | ✅    | ✅        |
| Facility Name                                              | ✅         | ✅        | ✅    | ✅        |
| Facility Address                                           | ✅         | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅         | ✅        | ✅    | ✅        |
| Clinic Name                                                | ✅         | ✅        | ✅    | ✅        |
| Facility Phone Number                                      | ✅         | ✅        | ✅    | ✅        |
| Reason For Appointment                                     | ✅         | ✅        | ✅    | ✅        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅         | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅         | ✅        | ✅    | ✅        |
| [Cancel Action](../tools/tool-cancel.md)                   | ✅         | ✅        |      |

## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2019-19997&t=jIup4zOCLhBYNOvO-4)
- [Past appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=127-22836&t=jIup4zOCLhBYNOvO-4)

**UI design specs**
- [Confirmed](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26448&mode=design&t=zfYBrRPZirDqa8uW-4)
- [Upcoming](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26544&mode=design&t=zfYBrRPZirDqa8uW-4)
- [Past](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26527&mode=design&t=zfYBrRPZirDqa8uW-4)
- [Canceled](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26536&mode=design&t=zfYBrRPZirDqa8uW-4)

**Page content**
- [Confirmed](../../content/appointment-details.md#va-in-person---confirmed)
- [Upcoming](../../content/appointment-details.md#va-in-person)
- [Past](../../content/appointment-details.md#va-in-person---past)
- [Canceled](../../content/appointment-details#va-in-person---canceled)

## Technical design

[FE architecture choices specific to this page]

## Metrics

[Goals we track, and how we track them through analytics]

## Dependencies

- [VA Facilities API](https://developer.va.gov/explore/facilities/docs/facilities?version=current)

[Systems that can trigger different states, like alerts, and how we handle them]

Facilities API:
- Address information

## Testing

[Testing specific to this page]

