# Request for VA appointment

## Overview

A request for an appointment at a VA facility.

## User stories

- See [user stories for appointment requests](./all-appointment-types.md#request-user-stories).
- As a Veteran, I want to easily understand the modality I requested.

## Requirements
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

**Functional**

- Follows [requirements for canceling appointments](../tools/tool-cancel.md#requirements).
- Follows [requirements for printing appointments](../tools/tool-print.md#requirements).
- User can review data and complete actions noted in the following table:

Data requirements table:

| Data and actions                         | Confirmed | Pending | Canceled |
| ---------------------------------------- | --------- | ------- | -------- |
| Status: Confirmed                        | ✅         |         |          |
| Status: Pending                          |           | ✅       |          |
| Status: Canceled                         |           |         | ✅        |
| Type of Care                             | ✅         | ✅       | ✅        |
| Facility Name                            | ✅         | ✅       | ✅        |
| Facility Address                         | ✅         | ✅       | ✅        |
| Directions Link                          | ✅         | ✅       | ✅        |
| Facility Phone Number                    | ✅         | ✅       | ✅        |
| Preferred Modality                       | ✅         | ✅       | ✅        |
| Preferred Dates and Times                | ✅         | ✅       | ✅        |
| Reason                                   | ✅         | ✅       | ✅        |
| Veteran Contact Information              | ✅         | ✅       | ✅        |
| [Cancel Action](../tools/tool-cancel.md) | ✅         | ✅       |          |
| [Print Action](../tools/tool-print.md)   | ✅         | ✅       | ✅        |

### Alerts and Empty States

From ticket https://github.com/department-of-veterans-affairs/va.gov-team/issues/69855#issuecomment-2568039600

We retrieve the appointment information using one of the following calls:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+2}&statuses[]=proposed&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics`

Data points:

| Role | Section name | Source field name | Empty state logic |
| - | - | - | - |
| Preferred Dates and Times | Preferred date and time | `appt.localStartTime` | Always populated since it's a required field. |
| Type of Care | Type of care | `appt.serviceType` | Display "Type of care not noted" if not available. |
| Preferred Modality | How you prefer to attend | `appt.preferredModality` | Always populated since it's a required field. |
| Facility Name | Facility | `facilityData[locationId].name` or `appt.location.attributes.name` | When not available, display "Facility details not available" and display a link to find or view facility information. |
| Facility Address | Facility | `facilityData[locationId].physicalAddress` or `appt.location.attributes.physicalAddress` | Do not display if not available. |
| Facility Phone Number | Phone | `facilityData[locationId].phone.main` | Display "Not available" if not available. |
| Veteran Reason For Appointment | Details you’d like to share with your provider | `appt.reasonForAppointment` and `appt.patientComments` | Display "Not available" if not available. | 
| Veteran Contact Information | Your contact details | `appt.contact` | Always populated since it's a required field. | 

## Specifications

**User flows**
[Pending appointments](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=127-22894&t=TKn58SI6OYX7Zdu3-4)

**UI design specs:**
- [Confirmed](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-27744&mode=design&t=XoWmwKDNFveoItRx-4)
- [Pending](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26355&mode=design&t=XoWmwKDNFveoItRx-4)
- [Canceled](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=867-26354&mode=design&t=XoWmwKDNFveoItRx-11)

**Page content:**
- [Confirmed](../../content/appointment-details.md#va-request---confirmed)
- [Pending](../../content/appointment-details.md#va-request---pending)
- [Canceled](../../content/appointment-details.md#va-request---canceled)

## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- Goal 1
- Goal 2

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- Event 1
- Event 2

[All events VAOS tracks](Link TBD)


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

