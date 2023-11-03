# Request a provider

## Overview
Users are given an option to choose from a list of providers

## User stories

- As a Veteran I want choose the provider I would like to see. 


## Requirements

### Community care request provider page

- Providers are fetched from PPMS, using specialty codes mapped to the type of care the user has chosen
- Users are given an option to choose from a list of providers sorted by:
    - Residential address (if they have a residential address on file) 
    - User's current location (via their browsers's location information) 
    - User's registered VistA sites
- Only one provider can be chosen (Legacy VAOS can choose up to 3)
- Users are sent to the community care language page (if they have a residential address) or the reason for appointment page (if they didn't have an address)

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->
- [Functional requirement]
- [Functional requirement]

## Specifications

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=2916-5463&t=8LrybrXbHG0xrSfN-4) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=0-2428&mode=design)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/request-cc.md#:~:text=Request%20a%20provider%20(Optional))

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
