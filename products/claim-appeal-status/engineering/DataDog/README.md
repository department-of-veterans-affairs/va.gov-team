## Useful queries
### Logs
---

#### Appeals
| Description       | Query Text                                        | Link                                                                                                                                                                 |
| ----------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #index (Caseflow) | `env:eks-prod @http.url_details.path:/v0/appeals` | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fappeals&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms) |

#### Claims
| Description           | Query Text                                                    | Link                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| #index (EVSS)         | `env:eks-prod @http.url_details.path:/v0/evss_claims_async`   | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fevss_claims_async&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)       |
| #show  (EVSS)         | `env:eks-prod @http.url_details.path:/v0/evss_claims_async/*` | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fevss_claims_async%2F%2A&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms) |
| #index (Lighthouse)   | `env:eks-prod @http.url_details.path:/v0/benefits_claims`     | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fbenefits_claims&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)         |
| #show  (Lighthouse)   | `env:eks-prod @http.url_details.path:/v0/benefits_claims/*`   | [Link](https://vagov.ddog-gov.com/logs?query=env%3Aeks-prod%20%40http.url_details.path%3A%2Fv0%2Fbenefits_claims%2F%2A&cols=host%2Cservice%2C%40http.status_code%2C%40duration_ms)   |

#### Document Uploads
TODO

#### STEM Claims
TODO

### APM
---

#### Appeals
TODO

#### Claims
| Description           | Query Text                                                           | Link                                                                                                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #index (EVSS)         | `env:"eks-prod" resource_name:"V0::EVSSClaimsAsyncController#index"` | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%22eks-prod%22%20resource_name%3A%22V0%3A%3AEVSSClaimsAsyncController%23index%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code) |
| #show  (EVSS)         | `env:"eks-prod" resource_name:"V0::EVSSClaimsAsyncController#show"`  | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%22eks-prod%22%20resource_name%3A%22V0%3A%3AEVSSClaimsAsyncController%23show%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)  |
| #index (Lighthouse)   | `env:"eks-prod" resource_name:"V0::BenefitsClaimsController#index"`  | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%22eks-prod%22%20resource_name%3A%22V0%3A%3ABenefitsClaimsController%23index%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)  |
| #show  (Lighthouse)   | `env:"eks-prod" resource_name:"V0::BenefitsClaimsController#show"`   | [Link](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3A%22eks-prod%22%20resource_name%3A%22V0%3A%3ABenefitsClaimsController%23show%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code)   |

#### Document Uploads
TODO

#### STEM Claims
TODO
