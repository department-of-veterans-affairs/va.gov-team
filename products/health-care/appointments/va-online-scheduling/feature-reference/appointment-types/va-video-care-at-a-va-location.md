# VA Video Care at a VA location appointment

## Overview

A scheduled telehealth appointment at a VA facility that the Veteran attends at a VA location where they join a VA Video Care.

[More information](telehealth.va.gov/type/clinic)

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
| Facility Name                                              | ✅        | ✅    | ✅        |
| Facility Address                                           | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅        | ✅    | ✅        |
| Clinic Name                                                | ✅        | ✅    | ✅        |
| Location Phone Number                                      | ✅        | ✅    | ✅        |
| Provider Name                                              | ✅        | ✅    | ✅        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅        | ✅    | ✅        |
| Call to Reschedule Alert                                   | ✅        |      |            |

Notes:
1: 02/23/2024 - Requirement not yet met

## Empty states and alerts

From ticket #[69847](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69847)

### Endpoints that are being called to retrieve data:

- From appointment list: `/vaos/v2/appointments?_include=facilities,clinics&start={today-120}&end={today+1}&statuses[]=proposed&statuses[]=cancelled` and `/vaos/v2/appointments?_include=facilities,clinics&start={today-30}&end={today+395}&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled`
- From appointment details page: `/vaos/v2/appointments/${id}?_include=facilities,clinics,avs`

### Technical name of the field in the data call.
Display Name | Source Field Name | Null State
--- | --- | ---
Appointment date and time |  `appt.localStartTime`  |   start time is alway populated
Type of care |    `appt.serviceType`  |   if null, do not display anything
Modality | `appt.kind` = `telehealth` indicates video appt  `appt.telehealth.vvskind` = `CLINIC_BASED` indicates appt at a VA location. [Also see BE logic for appointment types](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/feature-reference/backend-logic.md#appointment-types) | `kind` is always populated
Provider name |  `appt.practitioners[0].name.given, family`  |  if null, do not display anything
Facility name | `appt.location.attributes.name`  or  `facilityData[locationId].name`  |    if null, display “Facility details not available” and a link to "Find facility information" 
Facility address  |  `appt.location.attributes.physicalAddress` or  `facilityData[locationId].address`  |    if null, display “Facility details not available” and a link to "Find facility information" 
Clinic Name | `appt.extension.friendlyName` or `appt.extension.serviceName`  |  if null, display "Not Available"
Clinic Location | `appt.physicalLocation` |   if null, display "Not Available"
Facility phone number | `appt.extension.clinic.phoneNumber` or `appt.location.attributes.phone.main` or `facilityData[locationId].telecom[0]value`  |  The priority order is (1) Clinic phone with extension then (2) Facility phone. If neither of the numbers are available then display the VA Main phone `800-698-2411`
Veteran reason for appointment | N/A | N/A

_NOTE:_
Veteran reason for appointment are not return for telehealth appointments

### Example JSON appointment object returned from API call
```
{
    "id": "001",
    "type": "Appointment",
    "attributes": {
        "kind": "telehealth",
        "locationId": "983",
        "localStartTime": "2025-09-22T09:00:00.000-06:00",
        "physicalLocation": "PHYSICAL LOCATION TESTING",
        "practitioners": [
            {
                "name": {
                    "family": "VALOCATION",
                    "given": [
                        "VIDEO"
                    ]
                }
            }
        ],
        "serviceType": "foodAndNutrition",
        "status": "booked",
        "telehealth": {
            "atlas": null,
            "vvsKind": "CLINIC_BASED"
        },
        "extension": {
            "patientHasMobileGfe": true,
            "clinic": {
                "physicalLocation": "PHYSICAL LOCATION TESTING",
                "phoneNumber": "500-500-5000",
                "phoneNumberExtension": "1234"
            }
        }
    }
}
```
### Screenshots of the missing data states
Full State | Empty Type of care, Provider name, Clinic name, Clinic location | Empty Type of care, Provider name and Facility information
--- | --- | ---
 ![Image](https://github.com/user-attachments/assets/10258f05-a2bb-4541-94ff-f94ef3e2789e)     |    ![Image](https://github.com/user-attachments/assets/47e3a0dd-9885-459e-83f5-875234eee57c)   |  ![Image](https://github.com/user-attachments/assets/e6051c89-83a9-476d-82af-efc1ce2da87f)


## Specifications

**User flows:**
- [Upcoming](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=2019-19997&t=lDUJykyhV8NRJ2zc-4)
- [Past](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=127-22836&t=lDUJykyhV8NRJ2zc-4)

**UI design specs**  
[Details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-91577&t=qhwoH7i8nBPBRI3j-4)

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
