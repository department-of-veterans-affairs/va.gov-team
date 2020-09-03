<!-- Use this template for new external services -->

# Health Quest Service

health questionaire clipboard service

## Overview and Terminology

 The health quest service connects to MAP in a similar way that VAOS does. It uses a subset of the same VAOS enpoints into MAP for appointments using only GET requests. There is some duplication here to avoid effecting the VAOS metrics. In addition, this service will be used to connect to PGD through MAP

## Integration Endpoints

These are the MAP endpoints that the service uses

```
https://veteran.apps.va.gov/appointments/v1/patients/1012845331V153043/appointments/132

https://veteran.apps.va.gov/appointments/v1/patients/1012845331V153043/appointments?endDate=2020-07-02T08:00:00Z&pageSize=0&startDate=2020-06-02T07:00:00Z&useCache=false

https://veteran.apps.va.gov/users/v2/session/jwts

https://veteran.apps.va.gov/users/v2/session?processRules=true

https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/1012845331V153043/booked-cc-appointments?endDate=2020-07-02T08:00:00Z&pageSize=0&startDate=2020-06-02T07:00:00Z

https://veteran.apps.va.gov/vsp/v1/Appointment?_include=Appointment:location&date=lt2010-08-31T17:00:00Z&patient:Patient.identifier=1012845331V153043

```

## Required Configuration

The same type of keys that VAOS uses. These are put into the config/settings.yml in vets.api. A seperate setting from what VAOS uses has been defined as follows. These settings don't connect to anything in the development environment.

```
hqva_mobile:
  url: 'https://veteran.apps.va.gov'
  mock: false
  key_path: /fake/client/key/path
  timeout: 15
```

## Known External Dependencies

none

## Troubleshooting

run the tests using rspec on the modules/health_quest/spec directory

## Outage Status and Maintenance Windows

## Service Level Agreement

## Escalation Procedure

## Contacts
| Role          | Name               | E-mail                     |
|---------------|--------------------|----------------------------|
| Developer     | Laurence Guild     | laurence.guild@va.gov      |
