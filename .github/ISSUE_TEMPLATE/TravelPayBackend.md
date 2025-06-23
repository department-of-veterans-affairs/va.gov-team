---
name: Travel Pay Backend
about: For implementing business logic, translation, serialization, integration, and
  va.gov-facing endpoints
title: Travel Pay Backend
labels: backend, Travel Pay, TravelPayBackend
assignees: ''

---

## Issue Description
### Context

### Impact

### Notes

## Endpoint Path
_vets-api endpoint path here. Like: /travel_pay/v0/endpoint-name_

## Response Schema
_vets-api endpoint response schema here. Include translations, serializations, transformations_
_e.g._
```
{
  claims: [
    {
       claimId: UUID,
       clinicName: STRING
       status: ENUM(blah,blah,blah)
    }
  ]
}
```

## External Dependencies
- _What dependencies are required?_
- _What is the highest env they are in?_
- _What would be nice to have from this depenency?_

## Back end tasks
- [ ] Client code written - calls correct endpoint
- [ ] Service code written - transforms/processes response from client
  - [ ] Handle errors
- [ ] Controller endpoint written
- [ ] Config
  - [ ] settings.test.yml updated if needed
  - [ ] settings.local.yml updated if needed
  - [ ] settings.yml updated if needed
  - [ ] [infra-manifests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/infra-manifests-context.png) [updated if needed](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/infra-manifests-behavior.png)
    - [ ]  [dev](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps/vets-api/dev)
    - [ ]  [staging](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps/vets-api/staging)
    - [ ]  [prod](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/tree/main/apps/vets-api/prod)
- [ ] Tests written
  - [ ] Unit
    - [ ] Happy path
    - [ ] Exhaustive failure paths
  - [ ] Integration
  - [ ] VCR Cassettes
  - [ ] Betamocks registration
- [ ] Mock data
- [ ] Testing
  - [ ] Unit tests pass
  - [ ] QA testing - try to break it in staging
- [ ] Improve 1 thing about the codebase - [here are some ideas](https://docs.google.com/spreadsheets/d/1lOHK_cQIEMz85SfFDhyVO42Xq3_g9AFNj9UGYQrPCpI/edit?gid=0#gid=0)
- [ ] Swagger docs updated

## Acceptance Criteria
- [ ] Backend tasks complete
- [ ] I can hit the endpoint defined above using postman or another testing tool and see the response defined above
