# Fully Authenticated Check-In Support

## Summary

Allow some of our authenticated applications (e.g. Mobile app, Health Apartment, VAOS) to use the PCI API to pre-check-in and check-in a Veteran for their appointment.

This will require engineering to update chip, vets-api and possibly LoROTA. At a minimum CIE team will have to write LoROTA-less versions of the lambdas that allow veterans complete pre-check-in and check-in tasks. In addition it may require a new module within vets-api to provide all neccessary endpoints for fully authenticated applications to check-in to an appointment. LoROTA probably can and should be avoided as that system was designed to enable e-check-in with a minimal amount of authentication.

### Tentative Integration

https://app.mural.co/t/departmentofveteransaffairs9999/r/1675718737504?folderUuid=7ad264a1-d550-4bc6-a7b3-27fac23c9e08

FPO diagram:

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant vam as VA-Mobile-App
    participant va as vets-api
    participant chip as Chip

	vet->>vam: Launch appointments screen
	vam->>va: Requests eligibility for an appointment
    va->>chip: Passes appointmentIen and station number
    chip->>va: Return bool
    va->>vam: Return bool
    vam->>vet: Presents Check-in button if eligible
    vet->>vam: Click Check-in button for eligable appointment
    vam->>va: Iniate mobile check-in
    va->>chip: Request insurance and demographics statuses for patient
    chip->>va: Return insurance/demogrpahics statuses
    va-->>chip: Request demographics payload if update needed
    chip-->>va: Return demogrpahics payload
    va->>vam: Return insurance/demographics statues <br />and payload if needed
    vam-->>vet: If insurance needs validation prompt to check-in with staff.<br /> If demographics need confirmation present those screens.<br /> If no input needed proceed with checking patient in.
    vet-->>vam: Completes demographics confirmation if needed
    vam->>va: If updating demogrpahics status send timestamps.<br />Send check-in to appointment.
    va-->>chip: Patch demographic statuses if needed
    chip-->>va: Demographics response if sent
    va->>chip: Send check-in for appointment 
    chip->>va: Check-in response
    va->>vam: Check-in and demographics respnonse
    vam->>vet: Confirmation/Error screen
```
## Proposed sequence
The proposed sequence above outlines four new vets-api endpoints.

1. An endpoint to determine appointment elligability. Requires station number and appointment IEN. Returns true/false.
1. An endpoint for intiating check-in. On the chip side this fetches statuses for demographics and insurance. Vets-api returns the statuses and demogrpahics data if confirmation needed.
1. An endpoint for patching the updated demogaphics stautuses
1. An endpoint to check the patient in.

## Questions:

- In the VAOS payload is locationId the same as station number?
- Can VAOS add the ECheckinAllowed field to the appointment?
- How can we have security confidence that the patient is checking into only their appointments?
- [LP] Currently, the mobile app gets their appointment info from VAOS; to test in a Staging environment, the Mobile App team has to get the VAOS team to create appointments for them in the Vista instance that VAOS uses; we need to determine if this is the same Vista instance that the CIE team uses for the Staging tool; if it is not, I'm not sure how we are going to test in Staging

## Internal questions:
- Should we create a new vets-api module for fully authed applications(suggestions from Stephen)?
- Where do we update CW? Assume it’s the same as e-check-in
- How do we map from an [appointmentId from VAOS](https://department-of-veterans-affairs.github.io/va-mobile-app/api/#operation/getAppointments) to appointmentIen?
- Currently, CHIP calls [vista-api checkin endpoint](https://github.com/department-of-veterans-affairs/chip/blob/master/src/checkIn/index.js#L79) to check-in for an appointment, which needs the station Number and appointment Ien. Can we get the station number from VAOS appointment response?
- Where do we get the demographics data from?

## What needs to happen to be able to check-in
- Appointment needs to be at a clinic with e-check-in enabled
- Appointment must be within check-in window
- Patient must of current insurance info (our business rule)
- Patient must have confirmed demographics in the past 7 days (our business rule)
- Set eCheckInStarted (happens in initiateCheckIn now), setCheckIn, and eCheckInComplete in vista
- Log success 
