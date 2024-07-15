# Appointments home page

## Overview
Starting page to schedule or manage appointments.

## User stories

- As a Veteran, I want a starting point for my appointment scheduling and management tasks.
- As a Veteran, I want to be able to schedule appointments online.
- As a Veteran, I want to be able to find my upcoming, past, and pending appointments.

## Requirements

### Functional
<!-- What the system should do in order to meet the user's needs (see user stories.) These are the aspects of the feature that the user can detect. -->

- User can review a summary list of their [upcoming appointments](./appointment-lists/upcoming-list.md).
- User can start the process for scheduling an appointment online.
  - `Start scheduling` leads to the [Choose type of care page](./schedule-flow/all--type-of-care.md)
- User can navigate to their [past appointments](./appointment-lists/past-list.md).
- User can navigate to their [pending appointments](./appointment-lists/pending-list.md).

**Alerts**
- All messages to the user must provide an explanation of the issue and guidance for resolving the issue.  
- If user is ineligible to use VAOS because they are not registered at a VA facility the [alert that user is not registered at a VA facility](#alert-that-user-is-not-registered-at-a-va-facility) displays.

### Non-functional
- Once the user lands on the VAOS homepage, the appointment endpoint returns:
   - Future booked appointments from the previous month, through 1 year from the next month.
   - Proposed appointments from the previous 3 months prior through the next month.
   - This contains locationID, aka the facilityID (i.e.  984), along with the facility name (Dayton VA Medical Center). 

<details>
<summary>Sample Response: One appointment being returned</summary>

```
https://staging-api.va.gov/vaos/v2/appointments?_include=facilities,clinics&start=2022-10-30&end=2023-12-29&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled

{
    "id": "142100",
    "type": "appointments",
    "attributes": {
        "id": "142100",
        "identifier": [
            {
                "system": "http://med.va.gov/fhir/urn/vaos/vista/984/appointment/id",
                "value": "3294;20221107.080000"
            }
        ],
        "kind": "clinic",
        "status": "booked",
        "serviceType": "optometry",
        "patientIcn": "1013124304V115761",
        "locationId": "984",
        "clinic": "3294",
        "start": "2022-11-07T13:00:00Z",
        "end": "2022-11-07T14:00:00Z",
        "minutesDuration": 60,
        "slot": {
            "id": "3230323231313037313330303A323032323131303731343030",
            "start": "2022-11-07T13:00:00Z",
            "end": "2022-11-07T14:00:00Z"
        },
        "cancellable": true,
        "extension": {
            "ccLocation": {
                "address": {}
            },
            "vistaStatus": [
                "NO ACTION TAKEN"
            ]
        },
        "serviceName": "DAY OPTOM/CONTACT LENS",
        "physicalLocation": "BLDG 330, 6 NORTH",
        "location": {
            "id": "984",
            "type": "appointments",
            "attributes": {
                "id": "984",
                "vistaSite": "984",
                "vastParent": "984",
                "type": "va_health_facility",
                "name": "Dayton VA Medical Center",
                "classification": "VA Medical Center (VAMC)",
                "timezone": {
                    "timeZoneId": "America/New_York"
                },
                "lat": 39.74935,
                "long": -84.2532,
                "website": "https://www.dayton.va.gov/locations/directions.asp",
                "phone": {
                    "main": "937-268-6511"
                },
                "physicalAddress": {
                    "type": "physical",
                    "line": [
                        "4100 West Third Street"
                    ],
                    "city": "Dayton",
                    "state": "OH",
                    "postalCode": "45428-9000"
                },
```
</details>



## Specifications

[User flow](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?type=whiteboard&node-id=155-30914&t=yAEq20yFBh0j4lyj-4) 

[Page template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?type=design&node-id=2287-43222&mode=design&t=iXQLoUr7rK9TPy7w-4)

[Page content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/homepage.md#upcoming-appointments)

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

### Alert that user is not registered at a VA facility
<!-- Add a new section for each alert -->

**Alert trigger**

VAOS checks if the facilities field that comes back from `vaProfile` is empty. If it is, this alert replaces all content on the page.

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
"vaProfile": { "status": "OK", "birthDate": "20010531", "familyName": "Morgan", "gender": "M", "givenNames": [ "Cecil", "Matthew" ], "isCernerPatient": false, "facilities": [ { "facilityId": "983", "isCerner": false }, { "facilityId": "984", "isCerner": false } ], "vaPatient": true, "mhvAccountState": "OK" },
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
