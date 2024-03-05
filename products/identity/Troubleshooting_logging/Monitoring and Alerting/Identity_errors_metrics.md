keywords: errors, metrics, sentry, prometheus, grafana, identity
Note: you must have github and be on the socks proxy to access the prometheus, grafana, and Sentry dashboards

# Identity Metrics and Errors

The VSP Identity team maintains metrics and errors for all calls related to user data within VA.gov. Below is a list of the locations these metrics and errors can be found in their final presentation state and source code.

## Metrics
This section lists out each of the metrics we have and what what they mean.

### Statsd
StatsD is the main metric collector for all of Vets-API and Vets-Website. The metrics are collected by StatsD at the server/container level and then stored for other systems to consume the data that is collected. The StatsD source code can be found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/initializers/statsd.rb). There are several metrics in the source code that the VSP Identity team consumes such as the MVI metric [here](https://github.com/department-of-veterans-affairs/vets-api/blob/20b86216ab85a66d2b97de1448111f2e59e240f8/config/initializers/statsd.rb#L100). This metric is then consumed by Grafana which we use to visualize the data captured.

[Statsd incrementor for metrics](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/common/client/concerns/monitoring.rb#L21)

[Login Errors](https://github.com/department-of-veterans-affairs/vets-api/blob/52da457e7a4b27120088fd429437bc6d56268b1d/config/initializers/statsd.rb#L31)

[Statsd initilializer code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/initializers/statsd.rb):
- `STATSD_SSO_CALLBACK_TOTAL_KEY`
- `STATSD_LOGIN_NEW_USER_KEY`
- `STATSD_SSO_NEW_KEY`
- `STATSD_LOGIN_STATUS_SUCCESS`
- `STATSD_LOGIN_STATUS_FAILURE`
- `STATSD_SSO_CALLBACK_KEY`
- `STATSD_SSO_SAMLREQUEST_KEY`
- `STATSD_SSO_SAMLRESPONSE_KEY`
- `STATSD_SSO_SAMLTRACKER_KEY`
- `STATSD_SSO_CALLBACK_FAILED_KEY`

[MPI/MPI Related](https://github.com/department-of-veterans-affairs/vets-api/blob/9c908c868e8d1cc5d28f148696baf0df6f1ab8e0/config/initializers/statsd.rb#L100):
- `{MPI::Service::STATSD_KEY_PREFIX}.find_profile.total`
- `{MPI::Service::STATSD_KEY_PREFIX}.find_profile.fail`

[IAM SSOe OAuth Session Metrics](https://github.com/department-of-veterans-affairs/vets-api/blob/9c908c868e8d1cc5d28f148696baf0df6f1ab8e0/config/initializers/statsd.rb#L224) related Oauth metrics for mobile. We normally do not interact with this data much so only adding this as a reference.

[Sign in Service Metrics](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/initializers/statsd.rb#L70)
- `STATSD_SIS_AUTHORIZE_ATTEMPT_SUCCESS`
- `STATSD_SIS_AUTHORIZE_ATTEMPT_FAILURE`
- `STATSD_SIS_CALLBACK_SUCCESS`
- `STATSD_SIS_CALLBACK_FAILURE`
- `STATSD_SIS_TOKEN_SUCCESS`
- `STATSD_SIS_TOKEN_FAILURE`
- `STATSD_SIS_REFRESH_SUCCESS`
- `STATSD_SIS_REFRESH_FAILURE`
- `STATSD_SIS_REVOKE_SUCCESS`
- `STATSD_SIS_REVOKE_FAILURE`
- `STATSD_SIS_INTROSPECT_SUCCESS`
- `STATSD_SIS_INTROSPECT_FAILURE`
- `STATSD_SIS_REVOKE_ALL_SESSIONS_SUCCESS`
- `STATSD_SIS_REVOKE_ALL_SESSIONS_FAILURE`

### Errors
#### SAML Errors
SAML Errors can be found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/saml/errors.rb#L15). More information on SAML errors should be referenced from a previous task called [Sentry Hackathon](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sentry%20Hackathon%202020).
- `MULTIPLE_MHV_IDS_CODE`
- `MULTIPLE_EDIPIS_CODE`
- `MHV_ICN_MISMATCH_CODE`
- `IDME_UUID_MISSING_CODE`
- `MULTIPLE_CORP_IDS_CODE`

#### Sign in Service Errors
Sign in Service errors can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/11159e3a0730f5fbbb9603ad54126554e1ca8a26/products/identity/Sign-In%20Service/basics/oauth_errors.md), and steps for troubleshooting them can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/troubleshooting_signin.md).

### Performance Alerting
[Prometheus](http://prometheus-prod.vfs.va.gov:9090/prometheus/alerts) is the main location of our performance alerts. Many of the metrics the Identity team maintains are graphed here and then used for alerting to slack and pagerduty.

  - There are four `AuthErrorRateCritical` alerts. They use the `api_auth_login_callback_failed` metric that is reported by both `v0` and `v1` sessions controllers.
  - There are three `ExternalServiceAvailabilityCritical` alerts. There is one each for `ds_logon`, `mhv`, and `ID.me`. They use the `api_auth_saml_callback` metric, which is reported by both `v0` and `v1` sessions controllers.

Prometheus is currently built to page through pagerduty, the source code of that setup can be found [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/alertmanager.yml.j2).
An overview of the pagerduty auth error alerts can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/alerts.md#autherrorratecritical).

[Prometheus Auth Rules](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/rules/auth.rules):
- `AuthErrorRateCritical`
- `Auth too late error`
- `Auth too early error`
- `Auth unknown error`

[Prometheus External Auth Rules](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/rules/external_service.rules.j2#L126-L133)
- `ExternalServiceAvailabilityCritical` for DSLogon
- `ExternalServiceAvailabilityCritical` for ID.me
- `ExternalServiceAvailabilityCritical` for MHV, MyHealtheVet

## Grafana Dashboards

The main Grafana Dashboard used by the Identity team is the [SSOe Launch](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&from=now-24h&to=now) dashboard which lists out all of the saml metrics indicating the performance of all the login components for VA.gov. Grafana is an excellent solution to visualize anomalies over various time periods. Its limitation, which applies for Prometheus as well, is the data only goes back 2 weeks. There are several other dashboards of interest but the other one that has a direct impact on login performance is MPI (previously known as MVI). There is a dashboard [here](http://grafana.vfs.va.gov/d/000000062/mvi?orgId=1&from=now-24h&to=now) which can be viewed to monitor calls to MPI.

## Sentry

Sentry is where all of the errors related to Identity are written to. Sentry provides a number of features which allow us to see the source of the error but also visualize potential trends regarding browser, OS, and device versions. We have also used it to identify trends for time based anomalies. There are several "projects" in Sentry which you can view, but the main query is at [this link](http://sentry.vfs.va.gov/organizations/vsp/issues/?project=-1&query=is%3Aunresolved+assigned%3A%23vsp-identity&statsPeriod=14d) which shows you all the errors assigned to the VSP Identity team.
