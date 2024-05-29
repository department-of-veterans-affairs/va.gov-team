## External Auth Data - Queries Defined

- Monthly Active Users
- Total Authentications Per Month
- Credential Preference Per Month
   - Which CSP are people using to login per month?

| Data | Metrics or Logs | Query | Link to DD Widget | Link to Rails Code |
| --- | --- | --- | --- | --- |
| Monthly Active Users | Logs | (signincontroller callback) OR "SSO: LOGIN" unique count of icn(@icn) | [Link](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714327639555&to_ts=1716919639555&live=false&tile_focus=1435425616298618) |  |
| Total Authentications | Metrics | "sum:vets_api.statsd.api_auth_saml_response{type IN (dslogon,mhv,idme,logingov) AND (deployment_env:vagov-prod OR env:eks-prod)} by {type}.as_count()” + "sum:vets_api.statsd.api_sis_callback_success{(deployment_env:vagov-prod OR env:eks-prod)} by {type}.as_count()” | [Link](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=true&refresh_mode=paused&view=spans&from_ts=1716988743250&to_ts=1717003143250&live=false&tile_focus=7062638735213996) |  |
| Credential Preference | Metrics | Too long to list. The metrics included are auth saml response by type added to sis callback success. Then dividing the total of all authentications from saml repsonse and callback success. | [Link](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=true&refresh_mode=paused&view=spans&from_ts=1716988743295&to_ts=1717003143295&live=false&tile_focus=7405270615721338) |  |

[Datadog Group of widgets](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714327639555&to_ts=1716919639555&live=false&tile_focus=1435425616298618)
