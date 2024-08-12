## External Auth Data - Queries Defined

- Monthly Active Users
- Total Authentications
- Credential Preference
   - Which CSP are people using to login in the given period?

| Data | Metrics or Logs | Query | Link to DD Widget | Link to SiS Code | Link to SSOe Code |
| --- | --- | --- | --- | --- | --- |
| Monthly Active Users | Logs | (signincontroller (callback OR refresh) @payload.client_id:(vamobile OR vaweb)) OR ("LOGIN_STATUS_SUCCESS" @payload.client_id:vaweb) env:eks-prod | [Link](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714327639555&to_ts=1716919639555&live=false&tile_focus=1435425616298618) | [SiS Log](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/sign_in_controller.rb#L311) | [SSOe Log](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v1/sessions_controller.rb#L314) |
| Total Authentications | Metrics | "sum:vets_api.statsd.api_auth_login_success{(env:eks-prod) AND type in (idme , dslogon, logingov,mhv ) AND client_id IN (vamobile, vaweb)} by {type}.as_count()” + "sum:vets_api.statsd.api_sis_callback_success{(env:eks-prod) AND client_id IN (vamobile, vaweb)} by {type}.as_count()” | [Link](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=true&refresh_mode=paused&view=spans&from_ts=1716988743250&to_ts=1717003143250&live=false&tile_focus=7062638735213996) | [SiS Metric](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/sign_in_controller.rb#L312) | [SSOe Metric](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v1/sessions_controller.rb#312) |
| Credential Preference | Metrics | Too long to list. The metric applied is `(sis_callback_success for CREDENTIAL + api_auth_login_success for CREDENTIAL) / (TOTAL sis_callback_success + TOTAL api_auth_login_success)` | [Link](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=true&refresh_mode=paused&view=spans&from_ts=1716988743295&to_ts=1717003143295&live=false&tile_focus=7405270615721338) | Same as total authentications | Same as total authentications |

[Datadog Group of widgets](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714327639555&to_ts=1716919639555&live=false&tile_focus=1435425616298618)

## Metric changes

### Monthly active users

This set of metrics was not formally tracked prior to the publication of our external auth data reporting project. The informal version did not track SiS refreshes as active users which was added to the new version.

- **Old version:** all successful user logins on [VA.gov](http://VA.gov) and VA Health and Benefits app filtered down to one entry per ICN.
- **New version**: all successful user logins on [VA.gov](http://VA.gov) and VA Health and Benefits app **plus refresh** token refreshes filtered down to one entry per ICN.

### Total Authentications

Total authentications used to include all auths that were processed through any code component managed by the [VA.gov](http://VA.gov) Identity team. The new changes reduced the apps included to just VA.gov and the VA Health and benefits app. We also were not including inbound authentications form SSOe since these authentications technically were not started from VA.gov but from another VA SSOe application. Finally, we added the signup authentications which were previously left off due to the inability to properly track them.

- **Old version**: all successful logins from all applications that used the [VA.gov](http://VA.gov) login modal and the Unified Sign in Page. This meant logins for the Oracle Health Patient Portal, My HealtheVet, and OCC mobile app logins were being counted within total authentications. We did not include account signup, both basic and verified, in our total authentications.
- **New version**: all successful user logins on [VA.gov](http://VA.gov) and VA Health and Benefits app including account signups and verified account creations.

### Credential Preference

Credential preference was another informally tracked metric prior to the publication of the external auth data reporting project. This metric takes total authentications and then splits up the total by the credential provider. This creates a metric that shows how often a certain credential type is used on [VA.gov](http://VA.gov) and VA Health and Benefits app. This does not take into account any other applications nor does it perform any unique login filtering.

- **Old version**: all successful user logins on [VA.gov](http://VA.gov) and VA Health and Benefits app split up by credential service provider: ID.me, Login.gov, My HealtheVet, and DSLogon.
- **New version**: same as old version.
