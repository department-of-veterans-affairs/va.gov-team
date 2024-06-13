# Choose a location - VA Direct Schedule Flow

## Overview
Veterans are asked to choose where they'd like to receive the type of care they selected from a list of facilities where they are registered. 

## User stories

- As a Veteran I want to choose where I will receive care when I schedule an appointment.
- As scheduling staff I want Veteran appointments to be sent to the right facility.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

**Display the user's registered facilities**
- Display all facilities where:
    - They are associated with a VistA site where the user is registered
    - The location has request and/or direct scheduling enabled in CCM  for the selected type of care
    - The facility classification is one of the following:
      - Multispecialty CBOC  
      - Other Outpatient Services  
      - Primary Care CBOC or VA Medical Center (VAMC)
      - Health Care Center (HCC).  
- If a user only has one facility that supports online scheduling for the chosen type of care, this page will show that facility without radio buttons.

**Allow user to sort facilities**
- If multiple facilites are shown and the user has a residential address in VA Profile:
   - VAOS may only display a set number of facilities at time.
   - A link must display to show any other locations if more locations are available.  
  - Show facilities sorted by distance from that address.
  - The user can choose to sort the facilities by how close they are to their current (browser) location instead of residential address.
  - Show the distance to the facility in miles.
    - Calculate the distance as a straight line between the Veteran's residential address or location and the facility address.
    - Facilities that are within 100 miles of the residential address or current location and do not support any online scheduling can be revealed by clicking on the "Why isn't my facility shown?" link below the facilities options. 
- If the user does not have a residential address, show the facilities in alphabetical order.
   - An option to update residential address is available

**Redirect user to Cerner**
- If the user is registered at a Cerner site, facilities in that site are always shown on this page and include a link to the Cerner portal below the radio button
- If a user choose a Cerner facility and clicks Continue, they're sent to the schedule Cerner page


**Notify user if they are ineligible to schedule or request**
- After a user chooses a facility and clicks continue, VAOS checks if they're eligible to make a request or to direct schedule online. 
    - VAOS tries to put users in the direct schedule path first, and falls back to the request path if direct scheduling is not available
    - If the user is not eligible for either path, they're shown a message explaining why.
- **For the direct scheduling path**, there are four potential checks:
    1. Does the facility support direct scheduling?
    2. Does the veteran have a recent enough visit? (See note below)
        - This can be set to 12 or 24 months, or disabled
        - This check does not apply for primary care
    3. Are there available VistA clinics for this facility and type of care?
        - For primary care, this entails finding clinics associated with the user's PACT 
    4. Are there available VistA clinics that the user has interacted with in the past 24 months?
        - This is a front end check, done to reduce the confusion around what clinic a user should choose.
        - This will effectively override check 2, if that check is set to allow all users through in VATS.
- **For the request path**, there are three potential checks:
    1. Does the facility support requests?
    2. Does the veteran have a recent enough visit?
        - This is controlled in VATS, and can be set to 12 or 24 months, or disabled
        - This check does not apply for primary care
    3. Is the user over the request limit for this type of care at this facility?
        - This is controlled in VATS and can be set to 1 or 2
- If a user can direct schedule, they're sent to the clinic choice page
- If a user can only make a request, they're sent to the request calendar page 

See also [VA facility page data sources](../backend-logic.md#va-facility-page-data-sources)

#### Notes

**Why can Veterans only self-schedule into clinics that they've been seen at within the last 24 months?**
- Many facility + care type combinations have an overwhelming numbr of clinic options. Furthermore, many of these clinics are confusing to Veterans, because they're not consistently named in a way that's useful to Veterans or even written in plain english.
- Certain clinics have specific uses that aren't obvious to Veterans (for example, for new patients only), so opening up all available clinics for self-scheduling for everyone results in many canceled or rescheduled appointments.

### Non-functional

-  On Choose a VA location page, the application will display facilities that are direct schedule enabled. 
-  User selects the facility (Cheyenne VAMC), then click `CONTINUE` button to get eligibility and clinics endpoints. 

<details>  
<summary>Sample Response: Showing two clinics returned for primary care at Cheyenne VAMC.</summary> 

The display names are Green Team Clinic1 and CHY PC VAR2. 
   **Getting the PACT names does not surface until the clinic endpoint which is several clicks after selecting type of care followed by facility location then checking for direct schedule and eligibility**.

```
https://staging-api.va.gov/vaos/v2/locations/983/clinics?clinical_service=primaryCare

[
    {
        "id": "308",
        "type": "clinics",
        "attributes": {
            "vistaSite": 983,
            "id": "308",
            "serviceName": "Green Team Clinic1",
            "physicalLocation": null,
            "phoneNumber": null,
            "stationId": "983",
            "stationName": "CHYSHR-Cheyenne VA Medical Center",
            "primaryStopCode": 323,
            "primaryStopCodeName": "PRIMARY CARE/MEDICINE",
            "secondaryStopCode": null,
            "secondaryStopCodeName": "*Missing*",
            "patientDirectScheduling": null,
            "patientDisplay": null,
            "char4": null
        }
    },
    {
        "id": "848",
        "type": "clinics",
        "attributes": {
            "vistaSite": 983,
            "id": "848",
            "serviceName": "CHY PC VAR2",
            "physicalLocation": null,
            "phoneNumber": null,
            "stationId": "983",
            "stationName": "CHYSHR-Cheyenne VA Medical Center",
            "primaryStopCode": 323,
            "primaryStopCodeName": "PRIMARY CARE/MEDICINE",
            "secondaryStopCode": null,
            "secondaryStopCodeName": "*Missing*",
            "patientDirectScheduling": null,
            "patientDisplay": null,
            "char4": null
        }
    }
]
</details>

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

### Facility doesn't support direct scheduling
<!-- Add a new section for each alert -->

**Alert trigger**

If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to not accept direct scheduling
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to not accept direct scheduling
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [Alert template](Add link)
- [Alert content](Add link)

### Direct scheduling - Veteran doesn't have a recent enough visit
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Direct scheduling - No VistA clinics are available for this type of care
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility has no VistA clinics available for the selected type of care
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility has no VistA clinics available for the selected type of care
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Direct scheduling - VistA clinics available, but user hasn't interacted with them
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Veteran hasn't interacted with any of the facilities available clinics in the past 24 months
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Veteran hasn't interacted with any of the facilities available clinics in the past 24 months
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Facility doesn't support requests
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility doesn't support direct-scheduled appointments or requests
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility doesn't support direct-scheduled appointments or requests
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Requests - Veteran doesn't have a recent enough visit
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to require a visit within 12 or 24 months
- Veteran hasn't visited within the required timeframe 
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Requests - Veteran has reached request limit
<!-- Add a new section for each alert -->

**Alert trigger**
If multiple facilities are available:
- Veteran selects facility
- Facility is configured in VATS to limit requests
- Veteran more pending requests than limit allows
- Veteran clicks continue
- Alert loads in modal

If only one facility is available:
- Facility is configured in VATS to limit requests
- Veteran more pending requests than limit allows
- Veteran hasn't visited within the required timeframe 
- Page loads with alert in place of list

**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility-2

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

**Endpoints:**

`/vaos/v2/facilities/ids[]=${id}`

`/vaos/v2/scheduling/configurations?facility_ids[]=${id}`

To see the current api responses:
- Navigate to the [vets-api swagger](https://staging-api.va.gov/vaos/v2/apidocs)

<details>
  <summary>Sample response for /vaos/v2/facilities/ids[]=${id}</summary>

```json
{
  "data": [
    {
      "id": "983",
      "type": "facilities",
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
        "hoursOfOperation": null,
        "mailingAddress": null,
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
  ],
  "meta": {
    "pagination": {
      "currentPage": 0,
      "perPage": 0,
      "totalPages": 0,
      "totalEntries": 0
    }
  }
}
```
</details>
<details>
 <summary>Sample response for /vaos/v2/scheduling/configurations?facility_ids[]=${id}</summary>

```json

{
            "id": "optometry",
            "name": "Optometry",
            "stopCodes": [
              {
                "primary": "408",
                "defaultForRequests": false
              }
            ],
            "direct": {
              "patientHistoryRequired": false,
              "patientHistoryDuration": 0,
              "canCancel": true,
              "enabled": false
            },
            "request": {
              "patientHistoryRequired": false,
              "patientHistoryDuration": 0,
              "canCancel": true,
              "submittedRequestLimit": 2,
              "enterpriseSubmittedRequestLimit": 2,
              "enabled": false
            }



```

</details>

## Development testing
<!-- Unit tests, API tests -->

[How to use the VCR test framework](https://www.rubydoc.info/gems/vcr/VCR)

### `/vaos/v2/facilities/ids[]=${id}` call
  
<details>
  <summary><b>VCR cassette</b></summary>

```yml
---
http_interactions:
- request:
    method: get
    uri: https://veteran.apps.va.gov/facilities/v2/facilities?ids=983,984&pageSize=0&schedulable=true
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
      - stubbed_token
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
      - Tue, 13 Jul 2021 20:11:33 GMT
      Content-Type:
      - application/json
      Content-Length:
      - '1975'
      Server:
      - openresty
      X-Vamf-Version:
      - 2.8.0
      B3:
      - d4826c514488fbd0-1742ce55cf76f7d6-0
      Access-Control-Allow-Headers:
      - x-vamf-jwt
      X-Vamf-Build:
      - '6026315'
      X-Vamf-Timestamp:
      - '2021-07-06T17:59:37+0000'
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
      string: |-
        {
          "data" : [ {
            "id" : "983",
            "vistaSite" : "983",
            "vastParent" : "983",
            "type" : "va_facilities",
            "name" : "Cheyenne VA Medical Center",
            "classification" : "VA Medical Center (VAMC)",
            "lat" : 39.744507,
            "long" : -104.830956,
            "website" : "https://www.denver.va.gov/locations/directions.asp",
            "phone" : {
              "main" : "307-778-7550",
              "fax" : "307-778-7381",
              "pharmacy" : "866-420-6337",
              "afterHours" : "307-778-7550",
              "patientAdvocate" : "307-778-7550 x7517",
              "mentalHealthClinic" : "307-778-7349",
              "enrollmentCoordinator" : "307-778-7550 x7579"
            },
            "physicalAddress" : {
              "type" : "physical",
              "line" : [ "2360 East Pershing Boulevard" ],
              "city" : "Cheyenne",
              "state" : "WY",
              "postalCode" : "82001-5356"
            },
            "mobile" : false,
            "healthService" : [ "Audiology", "Cardiology", "DentalServices", "EmergencyCare", "Gastroenterology", "Gynecology", "MentalHealthCare", "Nutrition", "Ophthalmology", "Optometry", "Orthopedics", "Podiatry", "PrimaryCare", "SpecialtyCare", "UrgentCare", "Urology", "WomensHealth" ],
            "operatingStatus" : {
              "code" : "NORMAL"
            }
          }, {
            "id" : "984",
            "vistaSite" : "984",
            "vastParent" : "984",
            "type" : "va_health_facility",
            "name" : "Dayton VA Medical Center",
            "classification" : "VA Medical Center (VAMC)",
            "website" : "https://www.dayton.va.gov/locations/directions.asp",
            "phone" : {
              "main" : "937-268-6511"
            },
            "physicalAddress" : {
              "type" : "physical",
              "line" : [ "4100 West Third Street" ],
              "city" : "Dayton",
              "state" : "OH",
              "postalCode" : "45428-9000"
            },
            "healthService" : [ "Audiology", "Cardiology", "DentalServices", "Dermatology", "Gastroenterology", "Gynecology", "MentalHealthCare", "Nutrition", "Ophthalmology", "Optometry", "Orthopedics", "Podiatry", "PrimaryCare", "SpecialtyCare", "Urology", "WomensHealth" ]
          } ]
        }
  recorded_at: Tue, 13 Jul 2021 20:11:33 GMT
recorded_with: VCR 6.0.0 
```
</details>

<details>
  <summary><b>Example test for `/vaos/v2/facilities/ids[]=${id}` that corresponds to the above VCR cassette.</b></summary>

```ruby
      context 'on successful query for a facility given multiple facilities in array form' do
        it 'returns facility details' do
          VCR.use_cassette('vaos/v2/mobile_facility_service/get_facilities_200',
                           match_requests_on: %i[method path query]) do
            get '/vaos/v2/facilities?ids[]=983&ids[]=984&schedulable=true', headers: inflection_header
            expect(response).to have_http_status(:ok)
            expect(JSON.parse(response.body)['data'].size).to eq(2)
            expect(response).to match_camelized_response_schema('vaos/v2/get_facilities', { strict: false })
          end
        end
      end 
```
</details>


### `/vaos/v2/scheduling/configurations?facility_ids[]=${id}` call
  
<details>
  <summary><b>VCR cassette</b></summary>

```yml
---
http_interactions:
- request:
    method: get
    uri: https://veteran.apps.va.gov/facilities/v2/scheduling/configurations?facilityIds=489&pageSize=0
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
      - stubbed_token
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
      - Fri, 11 Jun 2021 03:20:25 GMT
      Content-Type:
      - application/json
      Transfer-Encoding:
      - chunked
      Server:
      - openresty
      X-Vamf-Version:
      - 2.5.2
      B3:
      - d6b2ec58eadce0aa-c77028e9f385fe2b-0
      Access-Control-Allow-Headers:
      - x-vamf-jwt
      X-Vamf-Build:
      - cc1bce1
      X-Vamf-Timestamp:
      - '2021-05-30T22:09:53+0000'
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
      string: |-
        {
          "data" : [ {
            "facilityId" : "489",
            "services" : [ {
              "id" : "amputation",
              "name" : "Amputation Services",
              "stopCodes" : [ {
                "primary" : "211"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "covid",
              "name" : "COVID Vaccine",
              "stopCodes" : [ {
                "secondary" : "710"
              } ],
              "char4" : "CDQC",
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              }
            }, {
              "id" : "CR1",
              "name" : "Express Care",
              "request" : {
                "patientHistoryRequired" : false,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false,
                "schedulingDays" : [ {
                  "day" : "MONDAY",
                  "canSchedule" : false
                }, {
                  "day" : "TUESDAY",
                  "canSchedule" : false
                }, {
                  "day" : "WEDNESDAY",
                  "canSchedule" : false
                }, {
                  "day" : "THURSDAY",
                  "canSchedule" : false
                }, {
                  "day" : "FRIDAY",
                  "canSchedule" : false
                }, {
                  "day" : "SATURDAY",
                  "canSchedule" : false
                }, {
                  "day" : "SUNDAY",
                  "canSchedule" : false
                } ]
              }
            }, {
              "id" : "outpatientMentalHealth",
              "name" : "Outpatient Mental Health",
              "stopCodes" : [ {
                "primary" : "502",
                "secondary" : "125"
              }, {
                "primary" : "502",
                "secondary" : "179"
              }, {
                "primary" : "502",
                "secondary" : "185"
              }, {
                "primary" : "502",
                "secondary" : "186"
              }, {
                "primary" : "502",
                "secondary" : "187"
              }, {
                "primary" : "502",
                "secondary" : "509"
              }, {
                "primary" : "502",
                "secondary" : "510"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "audiology",
              "name" : "Audiology",
              "stopCodes" : [ {
                "primary" : "203"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "clinicalPharmacyPrimaryCare",
              "name" : "Clinical Pharmacy-Primary Care",
              "stopCodes" : [ {
                "primary" : "160",
                "secondary" : "323"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "primaryCare",
              "name" : "Primary Care",
              "stopCodes" : [ {
                "primary" : "322"
              }, {
                "primary" : "323"
              }, {
                "primary" : "350"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 1,
                "enterpriseSubmittedRequestLimit" : 1,
                "enabled" : false
              }
            }, {
              "id" : "moveProgram",
              "name" : "MOVE! program",
              "stopCodes" : [ {
                "primary" : "372"
              }, {
                "primary" : "373"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "cpap",
              "name" : "CPAP Clinic",
              "stopCodes" : [ {
                "primary" : "349",
                "secondary" : "116"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "socialWork",
              "name" : "Social Work",
              "stopCodes" : [ {
                "primary" : "125",
                "secondary" : "323"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "411",
              "name" : "Podiatry",
              "stopCodes" : [ {
                "primary" : "411"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "foodAndNutrition",
              "name" : "Food and Nutrition",
              "stopCodes" : [ {
                "primary" : "123"
              }, {
                "primary" : "124"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "ophthalmology",
              "name" : "Ophthalmology",
              "stopCodes" : [ {
                "primary" : "407"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "optometry",
              "name" : "Optometry",
              "stopCodes" : [ {
                "primary" : "408"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            }, {
              "id" : "homeSleepTesting",
              "name" : "Sleep Medicine – Home Sleep Testing",
              "stopCodes" : [ {
                "primary" : "143",
                "secondary" : "189"
              } ],
              "direct" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "enabled" : false
              },
              "request" : {
                "patientHistoryRequired" : false,
                "patientHistoryDuration" : 0,
                "canCancel" : true,
                "submittedRequestLimit" : 2,
                "enterpriseSubmittedRequestLimit" : 2,
                "enabled" : false
              }
            } ],
            "communityCare" : false
          } ]
        }
  recorded_at: Fri, 11 Jun 2021 03:20:25 GMT
recorded_with: VCR 6.0.0 
```
</details>

<details>
  <summary><b>Example test for `/vaos/v2/scheduling/configurations?facility_ids[]=${id}` that corresponds to the above VCR cassette.</b></summary>

```ruby
    describe 'GET scheduling/configurations' do
      context 'has access and is given single facility id' do
        it 'returns a single scheduling configuration' do
          VCR.use_cassette('vaos/v2/mobile_facility_service/get_scheduling_configurations_200',
                           match_requests_on: %i[method path query]) do
            get '/vaos/v2/scheduling/configurations?facility_ids=489', headers: inflection_header
            expect(response).to have_http_status(:ok)
            expect(response.body).to be_a(String)
            expect(JSON.parse(response.body)['data'].size).to eq(1)
            expect(response.body).to match_camelized_schema('vaos/v2/scheduling_configurations', { strict: false })
          end
        end
      end 
```
</details>

