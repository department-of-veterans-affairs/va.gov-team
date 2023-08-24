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
- Display all supported appointment types [LINK TBD].
- Display 13 months of future booked appointments.
- Display 13 months of canceled booked appts.

## User interface design

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=2019-19997&t=jIup4zOCLhBYNOvO-4) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2287%3A43222&t=0TibHujNgvUjrD7t-1)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#upcoming-appointments)

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
