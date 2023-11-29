# Pending appointments

## Overview

Veterans use this list to get a quick understanding appointments they have requested that haven't been scheduled. 

## User stories

As a Veteran, I want an overview of appointments I've requested to see if they have been scheduled.

## Requirements

**Functional**

- User can review a summary of their pending appointments that includes the data in the following table:

|                                         | Pending VA       | Pending CC       |
| --------------------------------------- | ---------------- | ---------------- |
| Type of Care                            | ✅                | ✅                |
| Requested Modality                      | ✅                |                  |
| Requested VA Location                   | ✅                |                  |
| Requested Provider                      |                  | ✅                |

- Pending and canceled requests from VistA must display in VAOS if all the following are true:
  - VistA Type Request Type = VETERAN AND 
  - `Create Date` is  <= 120 days.   
- Pending and canceled requests from HSRM must display in VAOS if the `Create Date` is  <= 120 days.   
- Order requests by date/time the request was created. 
  - Most recent requests appear at the top of the list.
- All pending requests must be cancellable.

## Technical notes
- If a CC request is canceled, the HSRM Comments field must be updated to CANCELLED_BY_PATIENT.” This is an indication to the staff to cancel the task. 
- The VistA system (SDEC Appointment Request file 409.85) must be updated with the following data if a VA request is cancelled:
  - CURRENT STATUS: CLOSED    
  - DATE DISPOSITIONED: current date      
  - DISPOSITIONED BY: SDESOITEAS,SRV
  - DISPOSITION: VET SELF-CANCEL
- In VSE GUI, VAOS request can be dispositioned as follows: Death, Removed-Non VA Care, Removed-Scheduled/Assigned, Removed-VA Contract Care, Removed-No Longer Required, Entered in Error and Failure to Respond.  Except for Removed-Scheduled/Assigned, the other reasons when selected must show the request as cancelled and must display in the Cancelled section of pending appointments.           

## Specifications

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

