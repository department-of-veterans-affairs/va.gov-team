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

- User can start the process for scheduling an appointment online.
- User can navigate to their past appointments and requests.
- User can review a summary list of their upcoming appointments.
    - User can print the summary list.

**Alerts**
- All messages to the user must provide an explanation of the issue and guidance for resolving the issue.  
- If user is ineligible to use VAOS because they are not registered at a VA facility the [alert that user is not registered at a VA facility](#alert-that-user-is-not-registered-at-a-va-facility) displays.
- A message must display to the user informing them that they have no upcoming appointment when the veteran has no upcoming appointments.  
- A message must display to the user informing them that not all appointments can be displayed if any of the backend services fails to retrieve appointments (VSP for VistA, HSRM for community care appointments and VVS for video appointments).

**Appointments displayed**
- All Community Care upcoming and cancelled upcoming appointments from the Health Systems Referral Manager (HRSM) within the next 395 days must display.
- All VA/VistA upcoming and cancelled upcoming appointments for the user from any veteran-registered VistA system within the next 395 days display except if the clinic has  any of the following:   
    - The clinic name matches a community care clinic name regular expression that is part of the MAS configuration: `"((COM CARE-.)|(NON VA CARE .))`  https://issues.mobilehealth.va.gov/browse/CKM-1181
    - Clinic's stop code in on the Office of Integrated Veteran Care's stop code exclusion list
    - Clinic location name that starts with `ZZ` in the VistA site's Hospital Location file #44
    - Clinic location name that ends with -X in the VistA site's Hospital Location file #44
    - Clinic's `DISPLAY CLIN APPT TO PATIENTS? = NO` in the VistA site's Hospital Location file #44
    - Clinic's `DISPLAY CLIN APPT TO PATIENTS? = NULL` in the VistA site's Hospital Location file #44
- All upcoming and cancelled video visit appointments from Telehealth Management Platform (TMP) within the next 395 days must display.  
- All upcoming video visit appointments from Virtual Care Manager (VCM) within the next 395 days must display.  (Note: cancelled upcoming VCM appointments do NOT display).

**Modality indicators**
- A modality icon must display for each appointment:
    - A telephone icon must display for a telephone appointment.   
        - A telephone appointment is an appointment in a clinic with telephone secondary stop on the IVC list. (See IVC telephone stop code list:  https://issues.mobilehealth.va.gov/browse/EAS-1425)  
    - An in-person person/building icon must display if any of the following are true:
        - The appointment is an in-person appointment at a VA facility 
        - The appointment is a video appointment at a VA facility
        - The appointment is a video appointment at an ATLAS location
    -  A video visit icon must display if any of the following are true
        - The appointment is a video appointment at home.
        - The appointment is a video appointment on a VA device
        - The appointment is a VA appointment made in a clinic with a video visit secondary stop code of defined by IVC as telehealth/video must display.  See Kay Lawyer for the list of stop codes.  
    -  In lieu of a modality icon `Community care` must display for Community Care appointments.
 
**Type of care** 
- The type of care for Community Care appointments must display “Community Care appointment with `[Provider Name]` provider”.
    - Note: Front End receives the HSRM "Service Requested" data in the `serviceType` for community care.  HSRM "Service Requested" maps to CPRS/CTB Standard Episode of Care field which would be too cryptic for the user. So for now Type of Care is not being displayed for CC appointments and instead provider name is displaying.
- The type of care for VA appointments must be set to the `serviceType` if `serviceType` is returned by backend. Otherwise set to `VA appointment`.
    - Note, Backend sets the `serviceType` when the stop codes from the remote procedure call match CCM stop codes.
- The type of care may not be available for phone appointments, video appointments from Virtual Care Manager (VCM) and Telehealth Management Platform.
- A VistA appointment with an `APPOINTMENT TYPE = Compensation and Pension` must display in VAOS with the type of care "Claim exam".

### Technical notes

- In VistA, all appointments are tied to an appointment request.  VAOS displays all types of appointments.  A user may cancel an appointment in VAOS that could be tied to a Veteran, APPT, Consult, Return to Clinic, Procedure requests type and cancelling that appointment must reopen the original appointment request. The default cancel reason in VAOS is UNABLE TO KEEP APPOINTMENT and in VistA this reason has REOPEN REQUEST UPON CANCEL: YES.   
- Office of Integrated Veteran Care's  (OIVC) stop code exclusion list is updated regularly as a MAS consul value with codes provided to the dev team by the OIVC.
- When VAR/VAOS was first rolled out (circa 2015) two new REQUIRED fields were introduced: `DIRECT PATIENT SCHEDULING?` and, `DISPLAY CLIN APPT TO PATIENTS?`. There was NOT a post install to populate these required fields on existing clinics.  So, there could be clinics in production where these two data fields are `NULL`.  
-  Telehealth (example stop code `179 RT CLIN VID CARE HOME`) is always secondary to primary type of care (e.g., `323`). 
-  Clinics with a secondary stop code  `179 RT CLIN VID CARE HOME` always have `kind = Telehealth` which means the appointment will display as a video visit.  
- Video visit appointments with missing links are created when: 
    - VAMC staff schedules into a clinic using VSE GUI with a telehealth stop code and answers "No" to the prompt "Would you like to create a Video Visit" OR 
    - VAMC staff schedules into a clinic using VSE GUI with a telehealth stop code that is not in the SDEC Setting file.  As a result the "Would you like to create a Video Visit" prompt is not displayed to VAMC staff.  
    - VAMC staff use VistA Roll and Scroll, Appointment Management and book into a clinic with secondary telehealth stop code OR 
    - VAMC staff have configured a clinic that has secondary telehealth stop code for direct scheduling and veteran self-schedules into that clinic.  
    - Telephone is always a primary stop code, never a secondary -- e.g., user would create a telephone clinic with either no secondary or primary care as a secondary stop code. There are several stop codes for telephone.  See https://issues.mobilehealth.va.gov/browse/EAS-1425.
    - Currently there's a Mobile Appointment Service (MAS) that merges appointments if it's the same patient and less than 5 mins apart. In addition, MAS merges appointments across VistA instances (for example, the user has an appointment in Cheyenne and Dayton at the same time - 0800 MT Cheyenne and 1000 ET Dayton), And for the merge it really comes down to the order that it comes back form the upstream systems. So, if in the response from VSP the Cheyenne Appointment is the first in the response and Dayton is second, it's going to merge Dayton details in to the first appointment (Cheyenne) which might result in some fields getting replaced.
    - To create Video Visits in VistA clinic must have credit stop code (aka, secondary stop code)= 679, 179 or 648. You can customize this in your test VistA instance using the SDEC SETTINGS>VS GUI NATIONAL file—that is where the stop codes that cause the VSE Video Visit question pop-up are set. If the pop-up does NOT display in VSE GUI, check the SDEC settings file to the get stop codes. Then edit the clinic's credit stop code in Hospital Location file #44 to be one of those stop codes.  Tele-mental health visits require appropriate location-based secondary codes: 690 (originating patient station); 692 (provider station – same STA3); 693 (provider station – different STA3)


## User interface design

[User flow](Add link) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2287-43222&mode=design&t=iXQLoUr7rK9TPy7w-4)

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
