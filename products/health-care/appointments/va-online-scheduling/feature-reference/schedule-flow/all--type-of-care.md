# Type of Care

## Overview
Veterans are asked what type of care they'd like to receive.

## User stories

- As a Veteran I want to schedule an appointment for a specific health care need.

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- A user must choose a type of care to enter any of the scheduling flows.
- The type of care they choose, their community care eligibility, and the facility's configuration in CCM determines what methods they may be able to schedule by:
  - VAOS has preset types of care that may be scheduled by different methods (Direct Schedule, Request, etc.) - see the _Allowable methods of scheduling_ table that follows.
  - Facilities can also configure (in CCM) the methods of scheduling that they allow for each type of care, within the VAOS limits.
  - See the community care requirements that follow for more on how this affects the scheduling methods.

#### Allowable methods of scheduling**

| Type of care                                               | VA Direct | VA Request | CC Request (1) | VA COVID Vaccine |
| ---------------------------------------------------------- | --------- | ---------- | ---------- | ---------------- |
| Amputation care                                            | ✅         | ✅          |            |                  |
| Audiology and speech: Routine hearing exam (2)                 | ✅         | ✅          | ✅          |                  |
| Audiology and speech: Hearing aid support (2)                  | ✅         | ✅          | ✅          |                  |
| COVID-19 vaccine                                           |           |            |            | ✅                |
| Eye care: Optometry (2)                                        | ✅         | ✅          | ✅          |                  |
| Eye care: Ophthalmology (2)                                    | ✅         | ✅          |            |                  |
| Mental health                                              | ✅         | ✅          |            |                  |
| MOVE! weight management program                            | ✅         | ✅          |            |                  |
| Nutrition and food                                         | ✅         | ✅          | ✅          |                  |
| Pharmacy                                                   | ✅         | ✅          |            |                  |
| Podiatry                                                   |           |            | ✅          |                  |
| Primary care                                               | ✅         | ✅          |          |                  |
| Sleep medicine: Continuous Positive Airway Pressure (CPAP) (2) | ✅         | ✅          |            |                  |
| Sleep medicine: Sleep medicine and home sleep testing (2)      | ✅         | ✅          |            |                  |
| Social work                                                | ✅         | ✅          |            |

See also [determining available types of care for scheduling](../backend-logic.md#determining-available-types-of-care-for-scheduling)

#### (1) Community care requirements
- A user must be eligible for community care to request community care appointments.
  - Community care eligibility is checked: 
    - If a user has chosen a type of care that supports community care,
    - After the user clicks continue on the type of care page.
  - If a user is community care eligible for the type of care they chose, 
    - AND the user does not have a residential address, they are shown an alert on this page with a link to the va.gov profile.
    - They will be shown the [choose location category page](./all--choose-va-or-cc-facility.md) where they can choose between making a request for a VA appointment or for a community care provider.
    - AND they select Audiology, the user will be shown the [Choose a Type of Audiology Care page](./all--choose-a-type-of-audiology-care.md) to select a routine hearing exam or hearing add support.  
  - If a user is not eligible for community care:
    - AND the user selects Podiatry, a message informing the user to call the VAMC must display.

See also [determining community care eligibliity](../backend-logic.md#determining-community-care-eligibliity)
 
#### (2) Page navigation logic
- Eye care, sleep care, and audiology have sub-types, which a user can choose from on the next page.
    - For audiology, users are shown the facility type page before choosing the specific audiology type.

### Non-functional

- When the user selects a type of care (ie primary care) VAOS will return appointment endpoint call of past appointments up to previous 36 months.
- User clicks `CONTINUE` button on Type of Care page VAOS will make the configuration call of the user's registered facilities thus returning the direct schedule status (enabled or disabled). AND it makes the call to facility endpoint that returns detailed information of user's registered facilities and its children facilities. 

<details>

<summary>Sample Response: 12 facilities returned. </summary>

```
https://staging-api.va.gov/vaos/v2/facilities?children=true&ids[]=984&ids[]=983

{
    "id": "984",
    "type": "facilities",
    "attributes": {
        "id": "984",
        "vistaSite": "984",
        "vastParent": "984",
        "type": "va_health_facility",
        "name": "Dayton VA Medical Center",
        "classification": "VA Medical Center (VAMC)",
        "timezone": {
            "timeZoneId": "America/New_York"
        },
        "lat": 39.74935,
        "long": -84.2532,
        "website": "https://www.dayton.va.gov/locations/directions.asp",
        "phone": {
            "main": "937-268-6511"
        },
        "hoursOfOperation": null,
        "mailingAddress": null,
        "physicalAddress": {
            "type": "physical",
            "line": [
                "4100 West Third Street"
            ],
            "city": "Dayton",
            "state": "OH",
            "postalCode": "45428-9000"
        },
        "mobile": null,
        "healthService": [
            "Audiology",
            "Cardiology",
            "DentalServices",
            "Dermatology",
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
            "Urology",
            "WomensHealth"
        ],
        "operatingStatus": null
    }
}
```
</details>

-  If the user is Community Care eligible, then the user is given the option to choose VA clinic flow or CC facility flow (may need to add CC eligibility logic) 
   -  User selects VA clinic, then the code makes a call to the configuration endpoint to all register facilities and its child facilities. 

<details>

  <summary>Sample Response: Returned call showing primary care is enabled at facility 983 (staging)</summary>

  ```
  https://staging-api.va.gov/vaos/v2/scheduling/configurations?facility_ids[]=983QE&facility_ids[]=983QA&facility_ids[]=983GD&facility_ids[]=983GC&facility_ids[]=983GB&facility_ids[]=983&facility_ids[]=984&facility_ids[]=984GF&facility_ids[]=984GC&facility_ids[]=984GB&facility_ids[]=984GD&facility_ids[]=984GA

  {
      "id": "primaryCare",
      "name": "Primary Care",
      "stopCodes": [
          {
              "primary": "322",
              "defaultForRequests": false
          },
          {
              "primary": "323",
              "defaultForRequests": false
          },
          {
              "primary": "350",
              "defaultForRequests": false
          }
      ],
      "direct": {
          "patientHistoryRequired": false,
          "canCancel": true,
          "enabled": true
      },
      "request": {
          "patientHistoryRequired": false,
          "patientHistoryDuration": 0,
          "submittedRequestLimit": 1,
          "enterpriseSubmittedRequestLimit": 1,
          "enabled": false
      }
  }
  ```
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

### [Alert description]
<!-- Add a new section for each alert -->

**Alert trigger**
[Description of what causes this alert to display]

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
