# Upcoming appointments

## Overview

Veterans use this list to get a quick understanding of their upcoming appointments. 

## User stories

- As a Veteran, I want an overview of my health care appointments so I can plan my day.
- As a Veteran, I want to be able to schedule new health care appointments online so I can save time.
- As a Veteran, I want to be able to easily find my past appointments so I can review my history when planning new appointments.
- As a Veteran, I want to be able to easily find any appointments I've requested so I can follow up if they haven't been scheduled.

## Requirements

**Functional**
**Alerts**
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

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2019-19997&t=jIup4zOCLhBYNOvO-4) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2287%3A43222&t=0TibHujNgvUjrD7t-1)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#upcoming-appointments)

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->

**Alert UI**
- [User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=3281-3294&t=rlUNz5oWE30aEgSO-4)
- [State template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2418-51946&mode=design)
- [State content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#upcoming-alert---generic-message-if-any-of-the-systems-are-unavailable-vsp-vvs-and-hsrm)
- 
## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- `vaos-get-future-appointments-failed`
- `vaos-get-future-appointments-retrieved`
- `vaos-get-future-appointments-started`

- `vaos-status-past-link-clicked`
- `vaos-status-pending-link-clicked`

- `vaos-schedule-new-appointment-started`
- `vaos-schedule-appointment-button-clicked`
- `vaos-direct-path-started`

[All events VAOS tracks](Link TBD)

## Alerts and other states
<!-- Any alerts that could display for this feature and what triggers them. -->

See also: [VAOS app alerts](Link TBD)

### Empty state
<!-- Add a new section for each alert -->

**Alert trigger**
Veteran doesn't have any upcoming appointments

**Alert UI**
- [User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2085-20069&t=lasCaTGBEErIAfm4-4)
- [Page template](Add link)
- [Page content](Add link)

### Generic alert
<!-- Add a new section for each alert -->

**Alert trigger**
Generic error when appointment list can't be displayed due to:
- FE bug causing errors
- Response error in backend services

**Alert UI**
- [User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2251-20039&t=lasCaTGBEErIAfm4-4)
- [Page template](Add link)
- [Page content](Add link)

## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** https://staging.va.gov/health-care/schedule-view-va-appointments/appointments

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

**Endpoint**
`vaos/v2/appointments?_include=facilities,clinics&start={startDate}&end={endDate}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`

To see the current api responses:
- Navigate to the [vets-api swagger](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/)
- Search for `https://api.va.gov/vaos/v2/apidocs`

<details>
  <summary>Sample response</summary>

```json
{
  "data": [
    {
      "id": "167554",
      "type": "appointments",
      "attributes": {
        "id": "167554",
        "identifier": [
          {
            "system": "Appointment/",
            "value": "4139383339353237"
          }
        ],
        "kind": "clinic",
        "status": "booked",
        "serviceType": "optometry",
        "serviceTypes": [
          {
            "coding": [
              {
                "system": "http://veteran.apps.va.gov/terminologies/fhir/CodeSystem/vats-service-type",
                "code": "optometry"
              }
            ]
          }
        ],
        "serviceCategory": [
          {
            "coding": [
              {
                "system": "http://www.va.gov/Terminology/VistADefinedTerms/409_1",
                "code": "REGULAR",
                "display": "REGULAR"
              }
            ],
            "text": "REGULAR"
          }
        ],
        "patientIcn": "<ICN>",
        "locationId": "983",
        "clinic": "437",
        "start": "2023-03-15T20:00:00Z",
        "end": "2023-03-15T20:30:00Z",
        "created": "2023-03-17T00:00:00Z",
        "requestedPeriods": [
          {
            "start": "2023-03-15T00:00:00Z",
            "end": "2023-03-15T00:00:00Z"
          }
        ],
        "cancellable": true,
        "extension": {
          "ccLocation": {
            "address": {}
          },
          "vistaStatus": [
            "NO ACTION TAKEN"
          ]
        },
        "serviceName": "CHY VISUAL FIELD",
        "friendlyName": "VISUAL FIELD",
        "location": {
          "id": "983",
          "type": "appointments",
          "attributes": {
            "id": "983",
            "vistaSite": "983",
            "vastParent": "983",
            "type": "va_facilities",
            "name": "Cheyenne VA Medical Center",
            "classification": "VA Medical Center (VAMC)",
            "timezone": {
              "timeZoneId": "America/Denver"
            },
            "lat": 39.744507,
            "long": -104.830956,
            "website": "https://www.denver.va.gov/locations/directions.asp",
            "phone": {
              "main": "307-778-7550",
              "fax": "307-778-7381",
              "pharmacy": "866-420-6337",
              "afterHours": "307-778-7550",
              "patientAdvocate": "307-778-7550 x7517",
              "mentalHealthClinic": "307-778-7349",
              "enrollmentCoordinator": "307-778-7550 x7579"
            },
            "physicalAddress": {
              "type": "physical",
              "line": [
                "2360 East Pershing Boulevard"
              ],
              "city": "Cheyenne",
              "state": "WY",
              "postalCode": "82001-5356"
            },
            "mobile": false,
            "healthService": [
              "Audiology",
              "Cardiology",
              "DentalServices",
              "EmergencyCare",
              "Gastroenterology",
              "Gynecology",
              "MentalHealthCare",
              "Nutrition",
              "Ophthalmology",
              "Optometry",
              "Orthopedics",
              "Podiatry",
              "PrimaryCare",
              "SpecialtyCare",
              "UrgentCare",
              "Urology",
              "WomensHealth"
            ],
            "operatingStatus": {
              "code": "NORMAL"
            }
          }
        }
      }
    },
    
  ],
  "meta": {
    "pagination": {
      "currentPage": 0,
      "perPage": 0,
      "totalPages": 0,
      "totalEntries": 0
    },
    "failures": []
  }
}
```

</details>

## Development testing
<!-- Unit tests, API tests -->

### Get appointments call

[How to use the VCR test framework](https://www.rubydoc.info/gems/vcr/VCR)
  
<details>
  <summary><b>VCR cassette</b></summary>

```
---
  http_interactions:
  - request:
      method: get
      uri: https://veteran.apps.va.gov/vaos/v1/patients/<ICN>/appointments?end=<end>&pageSize=0&start=<start>
      body:
        encoding: US-ASCII
        string: ''
      headers:
        Accept:
        - application/json
        Content-Type:
        - application/json
        User-Agent:
        - Vets.gov Agent
        Referer:
        - https://review-instance.va.gov
        X-Vamf-Jwt:
        - stubbed token
        X-Request-Id:
        - ''
        Accept-Encoding:
        - gzip;q=1.0,deflate;q=0.6,identity;q=0.3
    response:
      status:
        code: 200
        message: OK
      headers:
        Date:
        - Thu, 04 Nov 2021 19:56:46 GMT
        Content-Type:
        - application/json
        Transfer-Encoding:
        - chunked
        Server:
        - openresty
        X-Vamf-Version:
        - 1.12.1
        B3:
        - fb5e01cb7d2f4995-d9e83a83cc4e7326-1
        Access-Control-Allow-Headers:
        - x-vamf-jwt
        X-Vamf-Build:
        - 661c259
        X-Vamf-Timestamp:
        - '2021-11-01T15:35:46+0000'
        Access-Control-Allow-Origin:
        - "*"
        Access-Control-Allow-Methods:
        - GET,OPTIONS
        Access-Control-Max-Age:
        - '3600'
        Strict-Transport-Security:
        - max-age=63072000; includeSubDomains; preload
      body:
        encoding: UTF-8
        string: '{ stubbed appointment response }'

```
</details>

<details>
  <summary><b>Example test for "get appointments" that corresponds to the above VCR cassette.</b></summary>

```
describe '#get_appointments' do
    context 'when requesting a list of appointments given a date range' do
      it 'returns a list of appointments' do
        VCR.use_cassette('vaos/v2/appointments/get_appointments', match_requests_on: %i[method path query],
                                                                               tag: :force_utf8) do
          response = subject.get_appointments(start_date, end_date)
          expect(response[:data].size).to eq(<size>)
        end
      end
    end
end
```
</details>
