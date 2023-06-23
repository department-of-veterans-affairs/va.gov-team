# [Feature name]

## Overview
Veterans are asked what type of care they'd like to receive.

## User stories

- As a Veteran I want to schedule an appointment for a specific health care need.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->
- The VAOS types of care are a static list:
  - Amputation care
  - Audiology and speech
    - Routine hearing exam
    - Hearing aid support
  - COVID-19 vaccine
  - Eye care
    - Optometry
    - Ophthalmology
  - Mental health
  - MOVE! weight management program
  - Nutrition and food
  - Pharmacy
  - Podiatry
  - Primary care
  - Sleep medicine
    - Continuous Positive Airway Pressure (CPAP)
    - Sleep medicine and home sleep testing
  - Social work
- These are tied to clinics via stop codes that are [determined by the VA](../vista-appointments-facilities-clinics.md#clinic-stop-codes)
- Eye care, sleep care, and audiology have sub-types, which a user can choose from on the next page
    - For audiology, users are shown the facility type page before choosing the specific audiology type
- Podiatry is only available for community care. 
    - Users will see a modal if they select podiatry and they're not community care eligible
- If a user does not have a residential address, they are shown an alert on this page with a link to the va.gov profile.
- If a user chooses COVID-19 vaccine and clicks Continue, they're sent to the vaccine flow


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
