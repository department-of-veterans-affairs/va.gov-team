# Preferred date - VA Direct Schedule Flow

## Overview
Veterans are asked to choose a preferred date for when they'd like to receive care. 

## User stories

- As a Veteran I want to choose when I prefer to receive care.
- As scheduling staff I want to know the Veteran's patient-indicated date so I can measure how long they waited for an appointment.

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- The date selected must be a date > today and less than 13 months (395 days).  
- An message regarding urgent care must display if the date selected is the current date.

**Page navigation:**
- `CONTINUE` directs the user to the [direct schedule Choose a Date page](./va-direct--choose-a-date.md)

### Non-functional
- The date selected on this page must be stored in the VistA PID/CID (Preferred Indicated Date/Clinically Indicated) date field.    

## Specifications

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=2899-14241&t=rlUNz5oWE30aEgSO-4) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=1466-23592&mode=design)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/schedule-va.md#patient-indicated-date)

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
[State: Alert - Urgent Care - has slot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/schedule-va.md#state-alert---urgent-care---has-slot)
[State: Alert - Urgent Care - no slot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/schedule-va.md#state-alert---urgent-care---no-slot)


**Alert UI**
- [User flow](Add link)
- [State template](Add link)
- [State content](Add link)

### Requests - Veteran has reached request limit
<!-- Add a new section for each alert -->

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
