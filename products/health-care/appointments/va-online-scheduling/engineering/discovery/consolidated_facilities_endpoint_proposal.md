# Consolidated Facilities/Eligibility Criteria Endpoint

Consolidates the following API calls:

* `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/parent-sites`
* `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions`
* `/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/#{@user.icn}/request-limit`
* `/facilities/v1/request-eligibility-criteria`

### Inputs

* `parentSites` (Array) - Passing `parentSites` would return (parents and?) all children
* `siteCodes` (Array)
* `typeOfCareId` (String)
* `userICN` (String) - We'd like a count of the number of user requests that user has made at each facility given a `typeOfCareId` so we'll need to pass the ICN along

### Proposed response example

```json
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
      "requestSupported": true,
      "directSchedulingSupported": true,
      "expressCareSupported": true,
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


