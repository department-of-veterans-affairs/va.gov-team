# VA Video Care on GFE (Government Furnished Equipment)

## Overview

A scheduled telehealth appointment that the Veteran attends through VA Video Care on the a device provided by VA.

## User stories

- As a Veteran, I want to join my telehealth appointments.
- See [user stories for booked appointments](./all-appointment-types.md#booked-appointment-user-stories).

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->


- Follows [requirements for canceling appointments](../tools/tool-cancel.md#requirements).
- Follows [requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md#requirements).
- Follows [requirements for printing appointments](../tools/tool-print.md#requirements).
- User can review data and complete actions noted in the following table:

| Data and actions                                           | Upcoming | Past | Canceled |
| ---------------------------------------------------------- | -------- | ---- | -------- |
| Appointment Date and Time                                  | ✅        | ✅    | ✅        |
| Status: Past                                               |          | ✅    |          |
| Status: Canceled                                           |          |      | ✅        |
| Type of Care                                               | ✅        | ✅    | ✅        |
| Provider Name                                              | 1          |  1    |  1       |
| Modality                                                   | ✅        | ✅    | ✅        |
| Joining Instructions                                       | ✅        |      |          |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅        |      |

Notes:
1: 02/23/2024 - Requirement not yet met

### Empty states and Alerts

The following service endpoint is called to retrieve all appointments:

`http://localhost:3000/vaos/v2/appointments?_include=facilities,clinics&start=2024-05-16&end=2024-09-14&statuses[]=proposed&statuses[]=cancelled`

The technical name of the field in the data call.

Display Name | Technical Name
--- | ---
Video link | `telehealth.url`
Appointment date and time |  `localStartTime`
Type of care | `serviceTypes`
Modality | N/A
Provider name | `providers[0].name.given, family`
Facility name | `location.attributes.name`
Facility address | `location.attributes.physicalAddress`
Clinic | `friendlyName or serviceName or null`
Location | `physicalLocation or null`
Facility phone number | `extension.clinic.phoneNumber, extension.clinic.phoneNumberExtension or default "800-698-2411"`
Veteran reason for appointment | N/A

**NOTE:**
This mapping might change since business logic is being migrated to the middle tier.

Example JSON appointment object returned from API call.
```
{
   id: 1
   type: "appointment",
   attributes: {
      localStartTime: "2024-11-22T18:19:34",
      practitioners: {
         name: {
            family: "Last name",
            given: ["First name"],
         },
         serviceType: "primaryCare",
         status: "booked",
         telehealth: {
            url: "link to join the appointment",
            vvsKind: "MOBILE_GFE",
         },
      },
   },
}
```
**Use cases:**
- When type of care is missing, don't display at anything.
- When provider is missing, don't display anything.
- When facility information not available, display "Facility not available''.
- When clinic name missing, display "Clinic not available'.
- When current time is more than 30 minutes before the appointment time, the link is disabled
- When current time is more than 4 hours after after the appointment time, the ink is disabled

![image](https://github.com/user-attachments/assets/0b170c23-3df8-422e-8d92-d3540b11dd96)


When there is no link to join the video, error is displayed
![image](https://github.com/user-attachments/assets/4506c6f8-5aae-4380-a18b-1cba4aacd17d)



## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=kDXwMWn2YUhVmLLB-4)
- [Past appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3497&t=kDXwMWn2YUhVmLLB-4)


**UI design specs**
[Video details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-86021&t=gPsyz7IrtgxZbZss-4)

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
