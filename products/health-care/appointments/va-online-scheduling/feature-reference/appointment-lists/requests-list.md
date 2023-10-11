# Pending appointment requests

## Overview

Veterans use this list to get a quick understanding appointments they have requested that haven't been scheduled. 

**Staging URL:** staging.va.gov/health-care/schedule-view-va-appointments/appointments/pending

## User stories

As a Veteran, I want an overview of appointments I've requested to see if they have been scheduled.

## Requirements

**Functional**
- Display all supported request types
- Display canceled requests that are up to 120 days old
- Order requests by date/time the request was created. Most recent requests appear at the top of the list.

## User interface design

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=127-22894&t=jIup4zOCLhBYNOvO-4)

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=1125%3A28986&t=VF6bPXzS8n4lnB6O-4)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#request-alert---generic-message-if-any-of-the-systems-are-unavailabe-vsp-vvs-and-hsrm)

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->

**Alert UI**
- [User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=3281-3712&t=rlUNz5oWE30aEgSO-4)
- [State template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2418-51946&mode=design)
- [State content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#past-alert---generic-message-if-any-of-the-systems-are-unavailabe-vsp-vvs-and-hsrm)
- 
## Technical design

[FE architecture choices specific to this page]

## Metrics

[Goals we track, and how we track them through analytics]

## Dependencies

[Systems that can trigger different states, like alerts, and how we handle them]

## Testing

[Testing specific to this page]

