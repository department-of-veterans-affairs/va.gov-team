# Cancel appointment

## Overview
Veterans can cancel their appointments and requests through VAOS.

## User stories

- As a user I want to cancel my appointments online.
- As a user I want to cancel my appointment requests online.
- As a user I want to know when the facility cancels my appointment.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

A user can cancel VA in-person appointments.

A user can cancel:
- VA requests
- Community care requests

A user cannot cancel: 
  - Community Care appointments
  - COVID appointments
  - Compensation and Pension exam appointments
  - Telehealth (VA Video Care) appointments<sup>1</sup>
  - For all of those types the user must be instructed to contact the facility to cancel the appointments.

VA phone appointments are cancelable UNLESS they meet the following criteria<sup>1</sup>:
  - After the merge, there is more than 1 VistA appointment that was merged together
  - The appointment has a prohibited status for cancelation (ACT REQ/CHECKED IN,CHECKED IN,ACT REQ/CHECKED OUT,CHECKED OUT,INPATIENT/CHECKED OUT,INPATIENT/ACT REQ,NO-SHOW)
  - The appointment was already cancelled (a Canceled status)
  - The appointment was checked-in (so a Checked-in status)
  - It's a cerner appointment
  - It's an HSRM request that has already had a cancellation request submitted

1. There isn't a way right now to automatically cancel the associated appts either in VVS or the provider side appts. So a Veteran could still get video appt reminders even though they cancelled the VistA side. And/or the provider slot may not be notified to cancel.
2. There is no specific logic that made phone appointments not-cancellable. VA phone appointments will always show the cancel button because `vaos-service` is always returning cancelable as true. It is possible that users then click on the "cancel" button and are sometimes not able to cancel due to not passing the checks listed above. Currently there's no way for us to tell if an appointment is cancelable or not until the user clicks the cancel button and we make a req to `vaos-service`. We're working with `vaos-service` on this to improve user experience.
 
### Status Message
- The canceled appointment displays a status indicating who canceled it.
- Canceled VA appointments with VistA Status = `CANCELLED BY PATIENT` (VSE GUI Expand Entry for appointment) status must display text indicating that the Veteran cancelled the appointment.
  - In this case, the alert message is "You canceled your appointment."  
- Canceled VA appointments with VistA Status = `CANCELLED BY CLINIC` (VSE GUI Expand Entry for appointment) status must display text indicating that the facility cancelled the appointment.
  - In this case, the alert message is "Facility canceled your appointment." 
 
**Non-functional/Backend**
- A VA appointment may only be cancelled if either of the following is true:
  - Clinic has Prohibit Access = NO/NULL (VistA Hospital Location file #44)   OR
  - Clinic has Prohibit Access = YES and VIAB proxy user is IN the privileged user list (VistA Hospital Location file #44).
- The VistA system must be updated when an appointment is cancelled:  
  -  A VAOS initiated cancelled appointment must file in VistA with status = `CANCELLED BY PATIENT` (VSE GUI Expand Entry for appointment) and VistA Cancel Reason = `UNABLE TO KEEP APPOINTMENT`
  - The original appointment request must be reopened in the VistA system if a VA appointment is cancelled in VAOS.  
 




## Specifications

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

### System fails to cancel appointment
<!-- Add a new section for each alert -->

**Alert trigger**
A message must display to the veteran if the system fails to cancel the appointment.  

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
