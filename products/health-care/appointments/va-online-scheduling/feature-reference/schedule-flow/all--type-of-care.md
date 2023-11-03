# All type of care

## Overview
Veterans are asked what type of care they'd like to receive.

## User stories

- As a Veteran I want to schedule an appointment for a specific health care need.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- A user must choose a type of care to enter any of the scheduling flows.
- The type of care they choose, their community care eligibility, and the facilitie's configuration in CCM determines what methods they may be able to schedule by:
  - VAOS has preset types of care that may be scheduled by different methods (Direct Schedule, Request, etc.) - see the _Allowable methods of scheduling_ table.
  - Facilities can also configure (in CCM) the methods of scheduling that they allow for each type of care, within the VAOS limits.
  - See the community care requirements that follow for more on how this affects the scheduling methods.

**Allowable methods of scheduling**

| Type of care                                               | VA Direct | VA Request | CC Request (1) | VA COVID Vaccine |
| ---------------------------------------------------------- | --------- | ---------- | ---------- | ---------------- |
| Amputation care                                            | ✅         | ✅          |            |                  |
| Audiology and speech: Routine hearing exam                 | ✅         | ✅          | ✅          |                  |
| Audiology and speech: Hearing aid support                  | ✅         | ✅          | ✅          |                  |
| COVID-19 vaccine                                           |           |            |            | ✅                |
| Eye care: Optometry                                        | ✅         | ✅          | ✅          |                  |
| Eye care: Ophthalmology                                    | ✅         | ✅          |            |                  |
| Mental health                                              | ✅         | ✅          |            |                  |
| MOVE! weight management program                            | ✅         | ✅          |            |                  |
| Nutrition and food                                         | ✅         | ✅          | ✅          |                  |
| Pharmacy                                                   | ✅         | ✅          |            |                  |
| Podiatry                                                   |           |            | ✅          |                  |
| Primary care                                               | ✅         | ✅          | ✅ (1)          |                  |
| Sleep medicine: Continuous Positive Airway Pressure (CPAP) | ✅         | ✅          |            |                  |
| Sleep medicine: Sleep medicine and home sleep testing      | ✅         | ✅          |            |                  |
| Social work                                                | ✅         | ✅          |            |


**1: Community Care requirements**
- A user must be eligible for community care to request community care appointments.
  - Community care eligibility is checked 
    - After the type of care page
    - If a user has chosen a type of care that supports community care:
  - A user is eligible if two checks pass:
    - The user is registered at a site that is marked as accepting community care requests
    - AND the community care eligibility API says that they're eligible for the type of care they chose
    - If a user is community care eligible for the type of care they chose, 
  - If a user is eligible for community care:
    - If the user does not have a residential address, they are shown an alert on this page with a link to the va.gov profile.
    - They will see a facility type page where they can choose between making a request for a VA appointment or for a community care provider.
  - If a user is not eligible for community care:
    - AND the user selects Podiatry, a message informing the user to call the VAMC must display.
- Primary care is available for CC only if the user has never been seen by a VA primary care provider—i.e., assigned to a PACT [Patient Aligned Care Team]

 
**Continute button logic**
- Eye care, sleep care, and audiology have sub-types, which a user can choose from on the next page
    - For audiology, users are shown the facility type page before choosing the specific audiology type


### Technical notes
- The types of care are tied to clinics via stop codes that are [determined by the VA](../vista-appointments-facilities-clinics.md#clinic-stop-codes)
- VATS Mental Health used to utilize one primary stop with a set of various secondary stop codes.  This was changed and now Mental Health only uses one Mental Health primary stop code,  502, and no secondary stop codes.  This change is reflected in Clinic Configuration Manager (CCM) but not VATS.  

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
