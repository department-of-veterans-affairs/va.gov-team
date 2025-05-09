# Appointment cancellation

## Overview

The appointments tool should allow veterans to cancel their appointments or requests if possible. For how cancelled appointments should be displayed, refer to the [feature reference for each appointment type](../appointment-types/).

## Requirements

The cancel button should be displayed on the details page if an appointment or request is considered "cancellable". This button will begin the appointment cancellation user flow.
  - Refer to the [feature reference](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1150-105402&p=f&t=MkZlzwY4fXRA3hsB-0) for the most up to date UI specifications.

The following sections lists the requirements for appointments to be considered "cancellable" at each layer of the application. Note that some of the layers need additional data from upstream layers to determine if an appointment is cancellable.

### Webapp (vets-website)

- Appointments and requests are retrieved from the API layer using the endpoint `/vaos/v2/appointments/(:id)`
- All requests (VA request and CC request i.e. with `"status": "proposed"` in the API response) are considered cancellable regardless of the `"cancellable"` property.
- Appointments are considered cancellable if **ALL** of the following are true:
  - `"cancellable": true` is retrieved in the API response.
  - The appointment is not in the past.
- Otherwise, the appointment is not cancellable

### API (vets-api)

- Appointments and requests are retrieved from the Backend layer using the endpoint `/vpg/v1/patients/#{user.icn}/appointments/(:id)` or `/vaos/v1/patients/#{user.icn}/appointments/(:id)`.
- Appointments considered not cancellable if **ANY** of the following are true and will have the `"cancellable"` property set to `false` in the API response.
  - Appointment is a booked CC appointment (i.e. `"kind": "cc"` and `"status": "booked"`)
  - Appointment is a covid vaccine appointment (i.e. `"serviceType": "covid"` or `"serviceTypes"` includes `"covid"`)
  - Appointment is a compensation and pension exam appointment (i.e. `"serviceCategory"` includes `"COMPENSATION & PENSION"`)
  - Appointment is a telehealth appointment (i.e. `"kind": "telehealth"`)[^1]
  - Appointment occurred in the past
- Otherwise, the `"cancellable"` property retrieved from the Backend layer is returned directly in the API response.


### Backend

VA phone appointments are cancelable UNLESS they meet the following criteria[^2]:
  - After the merge, there is more than 1 VistA appointment that was merged together
  - The appointment has a prohibited status for cancellation (ACT REQ/CHECKED IN,CHECKED IN,ACT REQ/CHECKED OUT,CHECKED OUT,INPATIENT/CHECKED OUT,INPATIENT/ACT REQ,NO-SHOW)
  - The appointment was already cancelled (a Canceled status)
  - The appointment was checked-in (so a Checked-in status)
  - It's a cerner appointment
  - It's an HSRM request that has already had a cancellation request submitted

A VA appointment may only be cancelled if either of the following is true:
  - Clinic has Prohibit Access = NO/NULL (VistA Hospital Location file #44)   OR
  - Clinic has Prohibit Access = YES and VIAB proxy user is IN the privileged user list (VistA Hospital Location file #44).
- The VistA system must be updated when an appointment is cancelled: 
  -  A VAOS initiated cancelled appointment must file in VistA with status = `CANCELLED BY PATIENT` (VSE GUI Expand Entry for appointment) and VistA Cancel Reason = `UNABLE TO KEEP APPOINTMENT`
  - The original appointment request must be reopened in the VistA system if a VA appointment is cancelled in VAOS. 

1. All VVS appointment are NOT cancellable – KIND = TELEHEALTH and VVSKIND = ADHOC OR MOBILE_ANY
2. Validate veteran is NOT able to cancel appointment as the VeteranSelfCancelAllowed flag must override (take precedence over the Prohibit Access and Proxy User List).:  VeteranSelfCancelAllowed = false in VistA, Prohibit access =true and VAOS proxy user is in list. SDESOITEAS,SRV
3. Comp and Pen Appt are not cancellable
4. Past appts are not cancellable
5. Validate veteran is NOT able to cancel appointment. :  VeteranSelfCancelAllowed = NULL in VistA.  Prohibit access =TRUE and VAOS proxy user is NOT on list.

[^1]: There isn't a way right now to automatically cancel the associated appts either in VVS or the provider side appts. So a Veteran could still get video appt reminders even though they cancelled the VistA side. And/or the provider slot may not be notified to cancel.

[^2]: There is no specific logic that made phone appointments not-cancellable. VA phone appointments will always show the cancel button because `vaos-service` is always returning cancelable as true. It is possible that users then click on the "cancel" button and are sometimes not able to cancel due to not passing the checks listed above. Currently there's no way for us to tell if an appointment is cancelable or not until the user clicks the cancel button and we make a req to `vaos-service`. We're working with `vaos-service` on this to improve user experience.

## UI Specifications

These use flows illustrate the user flow for cancelling appointments and requests along with alerts that may be encountered.

- [User flow](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1157-73820&t=MkZlzwY4fXRA3hsB-0)
