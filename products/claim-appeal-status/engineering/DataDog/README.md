## Useful queries
### Logs
---

#### Appeals (Caseflow)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #index      | `env:eks-prod @http.url_details.path:/v0/appeals` | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fappeals&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms) |

#### Claims (EVSS)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #index            | `env:eks-prod @http.url_details.path:/v0/evss_claims_async`              | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fevss_claims_async&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)                    |
| #show             | `env:eks-prod @http.url_details.path:/v0/evss_claims_async/*`            | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fevss_claims_async%2F%2A&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)              |
| #request_decision | `env:eks-prod @http.url_details.path:/v0/evss_claims/*/request_decision` | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fevss_claims%2F%2A%2Frequest_decision&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms) |

#### Claims (Lighthouse)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #index      | `env:eks-prod @http.url_details.path:/v0/benefits_claims`              | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fbenefits_claims&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)                    |
| #show       | `env:eks-prod @http.url_details.path:/v0/benefits_claims/*`            | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fbenefits_claims%2F%2A&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)              |
| #submit5103 | `env:eks-prod @http.url_details.path:/v0/benefits_claims/*/submit5103` | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fbenefits_claims%2F%2A%2Fsubmit5103&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms) |

#### Document Uploads (EVSS)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #create     | `env:eks-prod @http.url_details.path:/v0/evss_claims/*/documents` | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fevss_claims%2F%2A%2Fdocuments&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms) |

#### STEM Claims
TODO

### APM
---

#### Appeals (Caseflow)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #index      | `env:eks-prod resource_name:"V0::AppealsController#index"` | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3AAppealsController%23index%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code) |

#### Claims (EVSS)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #index            | `env:eks-prod resource_name:"V0::EVSSClaimsAsyncController#index"`       | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3AEVSSClaimsAsyncController%23index%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)             |
| #show             | `env:eks-prod resource_name:"V0::EVSSClaimsAsyncController#show"`        | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3AEVSSClaimsAsyncController%23show%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)              |
| #request_decision | `env:eks-prod resource_name:"V0::EVSSClaimsController#request_decision"` | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3AEVSSClaimsController%23request_decision%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)  |

#### Claims (Lighthouse)
| Description | Query Text | Link |
| ----------- | ---------- | ---- |
| #index      | `env:eks-prod resource_name:"V0::BenefitsClaimsController#index"`      | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3ABenefitsClaimsController%23index%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)      |
| #show       | `env:eks-prod resource_name:"V0::BenefitsClaimsController#show"`       | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3ABenefitsClaimsController%23show%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)       |
| #submit5103 | `env:eks-prod resource_name:"V0::BenefitsClaimsController#submit5103"` | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20resource_name%3A%22V0%3A%3ABenefitsClaimsController%23submit5103%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code) |

#### Document Uploads
[DataDog Dashboard Documentation_ [CST] Zero Silent Failures_ Document Uploads.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/engineering/testing-silent-failures/DataDog%20Dashboard%20Documentation_%20%5BCST%5D%20Zero%20Silent%20Failures_%20Document%20Uploads.md)

#### STEM Claims
TODO
