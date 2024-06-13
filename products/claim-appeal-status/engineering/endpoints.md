|                                              PATH |            Backing service |                                               Details |
| ------------------------------------------------: | -------------------------: | ----------------------------------------------------- |
|                             `/v0/benefits_claims` | Lighthouse Benefits Claims |                             [Link](#v0benefits_claims) |
|                         `/v0/benefits_claims/:id` | Lighthouse Benefits Claims |                          [Link](#v0benefits_claimsid) |
|              `/v0/benefits_claims/:id/submit5103` | Lighthouse Benefits Claims |                [Link](#v0benefits_claimsidsubmit5103) |
|            `/v0/evss_claims/:id/request_decision` |                       EVSS |              [Link](#v0evssidrequest_decision) |
|                   `/v0/evss_claims/:id/documents` |                       EVSS |                     [Link](#v0evssiddocuments) |
|                                     `/v0/appeals` |                   Caseflow |                                    [Link](#v0appeals) |
| `/v0/education_benefits_claims/stem_claim_status` |                   VETS API | [Link](#v0education_benefits_claimsstem_claim_status) |

## Endpoint details

#### `v0/benefits_claims`
**HTTP method:** GET \
**Backing Service:** Lighthouse Benefits Claims \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/benefits_claims_controller.rb#L10-L19)

This endpoint is used to retrieve a list of benefits claims and their statuses for the logged-in user


#### `v0/benefits_claims/:id`
**HTTP method:** GET \
**Backing Service:** Lighthouse Benefits Claims \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/benefits_claims_controller.rb#L21-42)

This endpoint is used to retrieve the details of the benefits claim with the given ID for the logged-in user


#### `v0/benefits_claims/:id/submit5103`
**HTTP method:** POST \
**Backing Service:** Lighthouse Benefits Claims \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/benefits_claims_controller.rb#L44-L48)

This endpoint is used to electronically submit a 5103 Notice Acknowledgement for the benefits claim with the given ID


#### `v0/evss/:id/request_decision`
**HTTP method:** POST \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/evss_claims_controller.rb#L30-L40)

This endpoint is used to electronically submit a 5103 Notice Acknowledgement for the benefits claim with the given ID. This endpoint provides the same functionality as the Lighthouse one listed above, but using EVSS as the backing service. At some point in the near future it will be replaced entirely with the Lighthouse one


#### `v0/evss/:id/documents`
**HTTP method:** POST \
**Backing Service:** EVSS \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/documents_controller.rb#L9-L27)

This endpoint is used to upload documents to act as supporting evidence for the benefits claim with the given ID

#### `v0/appeals`
**HTTP method:** GET \
**Backing Service:** Caseflow \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/appeals_controller.rb#L7-L10)

This endpoint is used to retrieve a list of appeals and their statuses for the logged-in user


#### `v0/education_benefits_claims/stem_claim_status`
**HTTP method:** GET \
**Backing Service:** VETS API \
**Controller:** [Github](https://github.com/department-of-veterans-affairs/vets-api/blob/a2e357/app/controllers/v0/education_benefits_claims_controller.rb#L24-L29)

This endpoint is used to retrieve a list of STEM claims and their statuses for the logged-in user
