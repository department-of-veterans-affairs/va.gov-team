# VA in-person appointment

## Overview

A scheduled in-person appointment at a VA facility.

## User stories

- As a Veteran, I want to review my confirmed VA appointments.
    - As a Veteran, I want to easily understand if an appointment is upcoming, in the past, or canceled.
- As a Veteran, I want to add my confirmed VA appointments to my calendar.
- As a Veteran, I want to cancel my confirmed, upcoming VA appointments.

## Requirements
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

**Functional**

- User can review data to understand their appointment (see table below).
- User can complete tasks related to their appointment (see table below).
- [Requirements for canceled appointments](../tools/tool-cancel.md#requirements) are followed.
- [Requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md) are followed.
- [Requirements for printing appointments](../tools/tool-print.md) are followed.

| Display this data                                  | For Active Appts  | For Canceled Appts |
| -------------------------------------------------- | ----------------- | ------------------ |
| Appointment Date and Time (including Month, Day, Day of Week, Time and Time zone)                                                | ✅                 | ✅                  |
| Canceled status                                    |                    | ✅                  |
| Type of Care                                       | ✅                 | ✅                  |
| Location Address  (including directions link)      | ✅                 | ✅                  |
| Location Phone Number                              | ✅                 | ✅                  |

| Include these actions                              | For Active Appts  | For Canceled appts |
| -------------------------------------------------- | ----------------- | ------------------ |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md)                             | ✅                 |                   |
| Print Action                                       | ✅                 |                   |
| [Cancel Action](../tools/tool-cancel.md)                                      | ✅                 |                   |




## User interface design

**User flows**
- [Upcoming appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2019-19997&t=jIup4zOCLhBYNOvO-4)
- [Past appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=127-22836&t=jIup4zOCLhBYNOvO-4)

**Page templates**
- [List section](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=0-50)
- [Details page](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=867-26334&t=vycMTsKnfBPu5MKo-4)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/copy-docs/homepage.md#appointment-list-cards)

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

