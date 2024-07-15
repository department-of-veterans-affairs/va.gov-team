# Request a provider - community care request flow

## Overview
Users are given an option to choose from a list of providers

## User stories

- As a Veteran I want choose the provider I would like to see. 


## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->


- Users must be given an option to choose from a list of providers.
   - A provider must not be required to continue with the Community Care request flow. 
   - A message to veteran must be displayed to veteran if no PPMS providers are available.  
- The list may be sorted by:
    - Providers nearest a veteran’s home address if veteran has a valid home address in the VA profile.
    - Providers nearest the closest city if veteran does NOT have a valid home address in the VA profile.
      - The cities listed are the same from the [closest city page](./cc-request--nearest-city.md).
    - User's current location (via their browsers's location information).
- An option to update residential address must be available during provider selection.  
- The user may only select one provider.

**Page navigation**
- `CONTINUE`: 
  - If the user has a residential address, they are sent to the [choose a language page](./cc-request--choose-a-language.md).
  - If the user doesn't have a residential address, they are sent to the [reason for appointment page](./cc-request--reason-for-appointment.md). 

### Non-functional
- Providers are fetched from the Provider Profile Management System (PPMS), using specialty codes mapped to the type of care the user has chosen for the selected provider.

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
