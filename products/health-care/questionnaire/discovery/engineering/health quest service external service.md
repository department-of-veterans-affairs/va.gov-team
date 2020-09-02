<!-- Use this template for new external services -->

# Health Quest Service

health questionaire clipboard service

## Overview and Terminology

 The health quest service connects to MAP in a similar way that VAOS does. It uses the same VAOS enpoints into MAP for appointments. This is to avoid effecting the VAOS metrics. In addition, this service will be used to connect to PGD through MAP

## Integration Endpoints

```
https://veteran.apps.va.gov/appointments/v1/patients/1012845331V153043/appointments?endDate=2020-07-02T08:00:00Z&pageSize=0&startDate=2020-06-02T07:00:00Z&useCache=false
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
