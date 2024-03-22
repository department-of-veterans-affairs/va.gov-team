|                                              PATH |            Backing service |        Details |
| ------------------------------------------------: | -------------------------: | -------------- |
|                             `/v0/benefits_claims` | Lighthouse Benefits Claims | dfadsfasdfasdf |
|                         `/v0/benefits_claims/:id` | Lighthouse Benefits Claims | dfadsfasdfasdf |
|              `/v0/benefits_claims/:id/submit5103` | Lighthouse Benefits Claims | dfadsfasdfasdf |
|              `/v0/evss_claims/:id/submit_request` |                       EVSS | dfadsfasdfasdf |
|                   `/v0/evss_claims/:id/documents` |                       EVSS | dfadsfasdfasdf |
|                                     `/v0/appeals` |                   Caseflow | dfadsfasdfasdf |
| `/v0/education_benefits_claims/stem_claim_status` |                            | dfadsfasdfasdf |

## Endpoint details

#### `v0/benefits_claims`
**Backing Service:** Lighthouse Benefits Claims \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/benefits_claims_controller.rb#L10-L19)

This endpoint is used to retrieve a list of benefits claims for the logged-in user

#### `v0/benefits_claims/:id`
**Backing Service:** Lighthouse Benefits Claims \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/benefits_claims_controller.rb#L21-42)

This endpoint is used to retrieve the details of the benefits claim with the given ID for the logged-in user

#### `v0/benefits_claims/:id/submit5103`
**Backing Service:** Lighthouse Benefits Claims \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/benefits_claims_controller.rb#L10-L19)

This endpoint is used to electronically submit a 5103 Notice Acknowledgement for the benefits claim with the given ID
