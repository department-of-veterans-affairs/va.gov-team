# Appointments home page

## Overview
Starting page to schedule or manage appointments.

## User stories

- As a Veteran, I want a starting point for my appointment scheduling and management tasks.
- As a Veteran, I want to be able to schedule appointments online.
- As a Veteran, I want to be able to find my upcoming appointments.

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- A Veteran can start the process for scheduling an appointment online.
- A Veteran can navigate to their past appointments and requests.
- A Veteran can review a summary list of their upcoming appointments.

**Alerts**
- All messages to the veteran must provide an explanation of the issue and guidance for resolving the issue.  
- If user/Veteran is ineligible to use VAOS because they are not registered at a VA facility. In that case, the [alert that user is not registered at a VA facility](#alert-that-user-is-not-registered-at-a-va-facility) displays.
- A message must display to veteran informing them that they have no upcoming appointment when the veteran has no upcoming appointments.  
- A message must display to the veteran informing them that not all appointments can be displayed if any of the backend services fails to retrieve appointments (VSP for VistA, HSRM for community care appointments and VVS for video appointments).

**Appointments displayed**
- All Community Care upcoming and cancelled upcoming appointments from the Health Systems Referral Manager (HRSM) within the next 395 days must display.
- All VA/VistA upcoming and cancelled upcoming appointments for the veteran from any veteran-registered VistA system within the next 395 days must be display except if the clinic has  any of the following:   
    - The clinic name matches a community care clinic name regular expression that is part of the MAS configuration: "((COM CARE-.)|(NON VA CARE .))  https://issues.mobilehealth.va.gov/browse/CKM-1181
    - Clinic's stop code in on the Office of Integrated Veteran Care’s stop code exclusion list
    - Clinic location name that starts with ZZ in the VistA site’s Hospital Location file #44
    -  Clinic location name that ends with -X in the VistA site’s Hospital Location file #44
    - Clinic's DISPLAY CLIN APPT TO PATIENTS? = NO in the VistA site’s Hospital Location file #44
    - Clinic's DISPLAY CLIN APPT TO PATIENTS? = NULL in the VistA site’s Hospital Location file #44
- All upcoming and cancelled video visit appointments from Telehealth Management Platform (TMP) within the next 395 days must display.  
- All upcoming video visit appointments from Virtual Care Manager (VCM) within the next 395 days must display.  (Note: cancelled upcoming VCM appointments do NOT display).

**Icons**
- A modality icon must display for each appointment:
    - A telephone icon must display for a telephone appointment.   
        - A telephone appointment is an appointment in a clinic with telephone secondary stop on the IVC list.   (See IVC telephone stop code list:  https://issues.mobilehealth.va.gov/browse/EAS-1425)  
    - An in-person person/building icon must display if any of the following are true:
        - The appointment is an in-person appointment at a VA facility 
        - The appointment is a video appointment at a VA facility
        - The appointment is a video appointment at an ATLAS location
    -  A video visit icon must display if any of the following are true
        - The appointment is a video appointment at home.
        - The appointment is a video appointment on a VA device
        - The appointment is a VA appointment made in a clinic with a video visit secondary stop code of defined by IVC as telehealth/video must display.  See Kay Lawyer for the list of stop codes.  
    -  In lieu of a modality icon ‘Community care’ must display for Community Care appointments.
 
**Type of care** 
- The type of care for Community Care appointments must display “Community Care appointment with [ABC] provider”.  Note, Front End receives the HSRM "Service Requested" data in the serviceType for community care.  HSRM "Service Requested" maps to CPRS/CTB Standard Episode of Care field which would be too cryptic for the veteran so for now Type of Care is not being displayed for CC appointments and instead provider name is displaying.
- The type of care for VA appointments must be set to the serviceType if serviceType is returned by backend else set to VA appointment.  Note, Backend sets the serviceType when the stop codes from the remote procedure call match CCM stop codes.
- The type of care may not be available for phone appointments, video appointments from Virtual Care Manager (VCM) and Telehealth Management Platform.
- A VistA appointment with an APPOINTMENT TYPE = Compensation and Pension must display in VAOS with type of care = Claim exam.

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

### Alert that user is not registered at a VA facility
<!-- Add a new section for each alert -->

**Alert trigger**

VAOS checks if the facilities field that comes back from `vaProfile` is empty. If it is, this alert replaces all content on the page.

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
"vaProfile": { "status": "OK", "birthDate": "20010531", "familyName": "Morgan", "gender": "M", "givenNames": [ "Cecil", "Matthew" ], "isCernerPatient": false, "facilities": [ { "facilityId": "983", "isCerner": false }, { "facilityId": "984", "isCerner": false } ], "vaPatient": true, "mhvAccountState": "OK" },
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
