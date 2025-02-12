# VA in-person appointment

## Overview

A scheduled in-person appointment at a VA facility.

## User stories

See [user stories for booked appointments](./all-appointment-types.md#booked-appointment-user-stories).

## Requirements

**Functional**
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- Follows [requirements for canceling appointments](../tools/tool-cancel.md#requirements).
- Follows [requirements for adding appointments to calendar](../tools/tool-add-to-calendar.md#requirements).
- Follows [requirements for printing appointments](../tools/tool-print.md#requirements).
- User can review data and complete actions noted in the following table:

| Data and actions                                           | Confirmed | Upcoming | Past | Canceled |
| ---------------------------------------------------------- | --------- | -------- | ---- | -------- |
| Appointment Date and Time                                  | ✅         | ✅        | ✅    | ✅        |
| Status: Confirmed                                          | ✅         |          |      |          |
| Status: Past                                               |           |          | ✅    |          |
| Status: Canceled                                           |           |          |      | ✅        |
| Type of Care                                               | ✅         | ✅        | ✅    | ✅        |
| Provider Name                                              | 1          | 1         | 1      | 1         | 
| Facility Name                                              | ✅         | ✅        | ✅    | ✅        |
| Facility Address                                           | ✅         | ✅        | ✅    | ✅        |
| Directions Link                                            | ✅         | ✅        | ✅    | ✅        |
| Clinic Name                                                | ✅         | ✅        | ✅    | ✅        |
| Facility Phone Number                                      | ✅         | ✅        | ✅    | ✅        |
| Reason For Appointment                                     | ✅         | ✅        | ✅    | ✅        |
| [Add to Calendar Action](../tools/tool-add-to-calendar.md) | ✅         | ✅        |      |          |
| [Print Action](../tools/tool-print.md)                     | ✅         | ✅        | ✅    | 1        |
| [Cancel Action](../tools/tool-cancel.md)                   | ✅         | ✅        |      |


**Notes:**
1. Requirement not yet met 

### Empty states and alerts

It uses the following vets-api call to retrieve appointments:

`/vaos/v2/appointments?_include=facilities,clinics&start=2024-03-27&end=2024-07-26&statuses[]=proposed&statuses[]=cancelled”`

**Appointment Date and Time**

`"localStartTime": "2024-07-20T17:00:00.000-06:00"`

If localStartTime is missing, then the appointment does not show in the upcoming appointment list. Chances are it is slim the user can get to the appointment detail page. However, if the user bookmarks the appointment when it was functional, then it displays `Invalid date` in place of the date.

**Type of Care**
"serviceType": “outpatientMentalHealth" 

If Type of care is missing then it will not show the “What [type of care]” section

**Facility Name**
`"name": "Cheyenne VA Medical Center"`,

(1) If the appt contains the `facilityId`, it takes the id and matches it up again the `facilityData` that contains the facility information.

(2) If the appt doesn’t contains the `facilityId`, it then looks at the appointment location property which contains the facility information.

(3) No facility ID and no location info, it shows an empty state.

**Facility Address**

(1) Assuming it is extracting from facilityData, the field address will be as follows:

```
facililtyData.[facilityId].address: {
 "line": ["2509 Research Boulevard"],
 "city": "Fort Collins",
 "state": "CO",
 "postalCode": "80526-8108"
 }
```
 
(2) Assuming it is extracting from appointment data, field address
will be as follows:

```
appointment.location.attributes.physicalAddress: {
 "line": ["2509 Research Boulevard"],
 "city": "Fort Collins",
 "state": "CO",
 "postalCode": "80526-8108"
 }
```

**Facility Phone Number** 

(1) Assuming it is extracting from facilityData:

`facililtyData.[facilityId].telecom[0].value`

(2) Assuming it is extracting from the appointment data:

`location.attributes.phone.main: "970-224-1550"`

**Clinic Name**

(1) It initially looks for the field name “friendlyName”
"friendlyName": "YOUR FRIENDLY MH CLINIC",

(2) if “friendlyName” doesn’t exist then it looks for field name
“serviceName”

"serviceName": "YOUR FRIENDLY MH CLINIC",

If either field names are unavailable, then displays clinic and location as "Not available"

**Location Name**

`extension.clinic.physicalLocation: "PHYSICAL LOCATIION TESTING”,`

**Veteran Reason For Appointment**

"reasonCode": { "text": "reasonCode:ROUTINEVISIT|
comments:VAOSR-7760" },
if reasonCode doesn’t exist, then displays reason and details as "Not available"

## Specifications

**User flows**
- [Upcoming appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-2925&t=kDXwMWn2YUhVmLLB-4)
- [Past appointments](https://www.figma.com/design/ugE1APC20v8OcArGB2IMQy/User-Flows-%7C-Appointments-FE?node-id=1-3497&t=kDXwMWn2YUhVmLLB-4)

**UI design specs**
[In-person details pages](https://www.figma.com/design/eonNJsp57eqfPqx7ydsJY9/Feature-Reference-%7C-Appointments-FE?node-id=1152-82609&t=gPsyz7IrtgxZbZss-4)

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
