# Choose type of mental health care

## Overview
Veterans choose the type of mental health care they need

## User stories

- As a Veteran I want to review the different types of mental health care so that I can choose the one that fits my needs.

## Requirements

**Functional**

For mental health care, users are shown the sub-type care page before choosing the specific clinic.

## Specifications

[User flow](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=3157-18721&t=oEnbwRSWMoaIl4vR-0)

[Page template]

[Page content]

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- We have a UAT planned to understand Veterans mental model around mental health care and how they classify sub-types of mental health care
- We will also search user feedback from Medallia to track how Veterans are liking this update

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
