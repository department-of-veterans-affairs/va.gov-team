# Login and access

## Overview
Appointments is authenticated and has some access requirements that Veterans must meet to use the tool.

## User stories

- As a Veteran I want to access tools that let me schedule and manage my VA appointments.

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->
- A user may only log into VAOS if all the following are true:  
  -  User is registered for care at a VA Medical Center (VAMC).
  -  User has a Premium MyHealtheVet, Id.me, Login.gov,  or DS Logon Level 2 login credential.     
- A message must display to any non-registered veterans informing them they must be registered at a VAMC to use VAOS.  

**Technical Notes**
- To determine registered facilities, front end uses the facilities information provided by the VA profile team. 
- VA Profile teams gets the registered facilities from the VA’s Enrollment System team.
- The Enrollment System creates records based on HL7 Z07 messages that are triggered in VistA when a veteran is registered and/or key information on veteran is edited (this task needs to be running in the VistA instance:  IVM Background Job).    


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
