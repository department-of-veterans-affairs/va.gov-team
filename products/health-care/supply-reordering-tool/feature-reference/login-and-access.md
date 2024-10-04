# Login and access

## Overview
The medical supplies reordering form is authenticated and has some access requirements that Veterans must meet to use the form.

## User stories

- As a Veteran who has been prescribed medical supplies (DLC supplies only), I want to be able to access the online reordering form to see what supplies are available and submit orders for needed supplies. 

## Requirements

### Functional
- A Veteran can only log into the form if all the following are true:
  - Enrolled in VA healthcare
  - Registered as a patient at a VA medical center
  - VA Provider prescribed the supplies or the related medical device
  - LOA3 account (Premium MyHealtheVet, Id.me, Login.gov, or DS Logon Level 2 login credential)
 
- A message must be displayed to any non-registered and non-verified Veterans informing them they must be registered at VAMC and have a verified account to use the tool.

### Non-functional
- To determine registered facilities, the front end uses the facilities information provided by the VA Profile team.


## Specifications

[User flow](Add link) 

[Page template](Add link)

[Page content](Add link)

## Metrics
To monitor any errors and user feedback regarding login and access when users try to log in. 

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- Event 1
- Event 2

[All events Medical supplies reordering tool tracks](Link TBD)

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
