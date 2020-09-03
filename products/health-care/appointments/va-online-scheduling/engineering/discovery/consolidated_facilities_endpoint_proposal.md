# Consolidated Facilities/Eligibility Criteria Endpoint

## Problem we're trying to solve

As part of Express Care, we're doing a lot of the availability and eligibility logic in the va.gov front end, using lower level VAMF services, like the request_eligibility_criteria service. We are:

- Determining the registered parent sites, and fetching VATS settings associated with those sites
- Filtering out unsupported facilities
- Determining which facilities are currently accepting EC requests
- Checking that the current user is not over the request limit at the available facilities
- Fetching the facility name to include in the EC request payload, in addition to the user info

This puts most of the business logic around EC availability in the hands of the FE, where in the past the team has agreed that business logic should live in the backend.

Some of the availability logic was built into `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions`, but that service doesn't work for the new front end:

- It requires us to include a parent site, forcing us to make requests for each registered parent site
- It doesn't include the full schedule for supported EC sites, just the current day

## Suggested solution

We would suggest consolidating this logic in a single call, similar to the current `/direct-scheduling/institutions` call.

Ideally, request limits would be checked as part of this service, but a separate service that we can request multiple sites for also works.

This solution could also be used for the facilities calls for other types of care, the data is very similar, or it could be created just for EC. The example below is for a service that supports all types of care, including EC, as well as the request limits check.

### Inputs

* `parentSites` (Array) - This would accept a list of sta3n ids and return all the facilities in those sites
* `typeOfCareId` (String) - The type of care (including Express Care)
* `userICN` (String) - We'd like a count of the number of user requests that user has made at each facility given a `typeOfCareId` so we'll need to pass the ICN along

### Proposed response example

```jsonc
{
  "data": [
    {
      "id": "983",
      "institutionCode": "983",
      "rootStationCode": "983",
      "parentStationCode": "983",
      "authoritativeName": "CHYSHR-Cheyenne VA Medical Center",
      "city": "Cheyenne",
      "stateAbbrev": "WY",
      "institutionTimezone": "America/Denver",
      "requestSupported": true, // works for both requests and EC
      "directSchedulingSupported": true,
      "expressCareRequestsAllowed": true,  // Is currently within an EC window
      "requestLimit": 2,
      "userRequestsCount": 1,
      "expressTimes": [
        {
          "day": "MONDAY",
          "canSchedule": true,
          "startTime": "07:16",
          "endTime": "23:16"
        },
        {
          "day": "TUESDAY",
          "canSchedule": false
        },
        {
          "day": "WEDNESDAY",
          "canSchedule": true,
          "startTime": "07:16",
          "endTime": "23:16"
        },
        {
          "day": "THURSDAY",
          "canSchedule": true,
          "startTime": "07:16",
          "endTime": "23:16"
        },
        {
          "day": "FRIDAY",
          "canSchedule": false,
          "startTime": "08:58",
          "endTime": "23:59"
        },
        {
          "day": "SATURDAY",
          "canSchedule": false
        },
        {
          "day": "SUNDAY",
          "canSchedule": false
        }
      ]
    }
  ]
}

```

### Existing calls
Consolidates the following API calls:

* `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/parent-sites`
* `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions`
* `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/#{@user.icn}/request-limit`
* `/facilities/v1/request-eligibility-criteria`
