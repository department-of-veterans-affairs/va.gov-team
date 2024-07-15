# Past appointments summary

## Overview

Veterans use this list to get a quick understanding of their appointment history.

## User stories

As a Veteran, I want an overview of my appointment history so I can plan future appointments.

## Requirements

**Functional**
- Past appointments for the past two years must display.
- The display of past appointments in VAOS follows the same display business rules noted in [upcoming appointments](./upcoming-list.md) with two differences:
  - Past canceled appointments are not displayed in VAOS.
  - Past appointments are sorted starting from most recent to furthest in the past.
- User can filter past appointments by certain time periods.  
- Cancelled appointments of any type must not display on the past appointments page. 

## Specifications

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=127-22836&t=jIup4zOCLhBYNOvO-4)

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=1125%3A28605&t=VF6bPXzS8n4lnB6O-4)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#past-appointments)

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->

**Alert UI**
- [User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=3281-3452&t=rlUNz5oWE30aEgSO-4)
- [State template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2418-51946&mode=design)
- [State content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#past-alert---generic-message-if-any-of-the-systems-are-unavailabe-vsp-vvs-and-hsrm)
-
- ## Technical design

[FE architecture choices specific to this page]

## Metrics

[Goals we track, and how we track them through analytics]

## Dependencies

[Systems that can trigger different states, like alerts, and how we handle them]

## Testing

[Testing specific to this page]
