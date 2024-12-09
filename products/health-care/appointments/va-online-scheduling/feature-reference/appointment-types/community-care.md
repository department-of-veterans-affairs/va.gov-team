# Community care appointment

## Overview

Details for a scheduled appointment with a community care provider.

## User stories

See [user stories for booked appointments](./all-appointment-types.md#booked-appointment-user-stories).

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
| Provider Name                                              | ✅        | ✅    | ✅        |
| Treatment Specialty*                                        | ✅        | ✅    | ✅        |
| Modality**                                                   | See note | See note | See note |
| Provider Address                                           | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅        | ✅    | ✅        |
| Provider Phone Number                                      | ✅        | ✅    | ✅        |
| Reason                                                     | ✅        | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅        |      |          |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |

\* See: [Treatment Specialty](../../../appointments-reference/data-reference/data-definitions.md#treatment-specialty)

\*\* 03/18/2024 - We currently don't receive modality information for scheduled community care appointments, so we have to assume they could be telehealth or in-person. In the future we would like to show this information.

### Empty States and Alerts

The following service endpoint is called to retrieve all appointments:

- `http://localhost:3000/vaos/v2/appointments?_include=facilities,clinics&start=2024-05-16&end=2024-09-14&statuses[]=proposed&statuses[]=cancelled`

**NOTE**: The `"_statuses[]=proposed_"` query parameter is used to return all appointment requests.

The technical name of the field in the data call.

Display Name | Technical Name
--- | ---
Preferred date and time |  `localStartTime`
Type of care | `serviceTypes`
Scheduling facility | `location.attributes.name`
Preferred community care provider | `preferredProviderName, extension.ccTreatingSpecialty, extension.ccLocation.address`
Language you'd prefer the provider speak | `preferredLanguage`
Details you'd like to share with your provider | `patientComments`
Your contact details | `contact.telecom.phone, contact.telecom.email, preferredTimesForPhoneCall`

**NOTE:**
This mapping might change since business logic is being migrated to the middle tier.


**Data points to review for Community Care requests:**

- Preferred dates and times
This field is always populated since it is a required field when completing the appointment request workflow.
    
- Type of care
This field is always populated since it is a required field when completing the appointment request workflow.      

- Scheduling facility
This field is always populated since it is a required field when completing the appointment request workflow.

- Preferred community care provider
The following information is display when provider information is missing:

  - Provider name not available
  - Treatment specialty not available
  - Address not available

- Language you'd prefer the provider speak
This field is always populated since it is a required field when completing the appointment request workflow.

- Details you'd like to share with your provider
This information is optional. So, the following is displayed when the information is missing:

  - Reason: Not available
  - Other details: none

- Your contact details
This field is always populated since it is a required field when completing the appointment request workflow.      
 

## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=kDXwMWn2YUhVmLLB-4)
- [Past appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3497&t=kDXwMWn2YUhVmLLB-4)

**UI design specs**
[Community care details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-114180&t=gPsyz7IrtgxZbZss-4)

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
