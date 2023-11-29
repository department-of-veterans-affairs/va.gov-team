#  Nearest city - community care request flow

## Overview
Veterans need to select a city that is nearest to the parent facility if they are registered at multiple VistA sites.

## User stories

- As a Veteran I want to select the nearest city to my parent facility to recieve care so that I can recieve coverage for my care. 
  
## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- If a user is registered at multiple VistA sites that support community care, they must choose the appropriate parent facility to route the request to. 
   - These are listed as cities.
- A City must display if all the following are true:
   - Veteran is registered at a VAMC in that city
   - The VAMC has been designated by the Integrated Veteran Care (IVC) office as supporting community care.

### Non-functional

- When IVC designates a site as supporting Community Care that information is stored in the siteSupportingVAR collection in the var-utility database.  


## Specifications

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=2916-5322&t=7iCeBkhjPKynWOaL-4) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=1466-25703&mode=design)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/request-cc.md#nearest-city)

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
