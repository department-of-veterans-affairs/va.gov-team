keywords: errors, metrics, sentry, prometheus, grafana, identity
Note: you must have github and be on the socks proxy to access the prometheus, grafana, and Sentry dashboards

# Identity Metrics and Errors

The VSP Identity team maintains metrics and errors for all calls related to user data within VA.gov. Below is a list of the locations these metrics and errors can be found in their final presentation state and source code.


[Prometheus](http://prometheus-prod.vfs.va.gov:9090/prometheus/alerts) is the main location of our performance alerts. Many of the metrics the Identity team maintains are graphed here and then used for alerting to slack and pagerduty.
  ## Alerts of Interest:

  - The four `AuthErrorRateCritical` alerts. They use the `api_auth_login_callback_failed` metric that is reported by both `v0` and `v1` sessions controllers.
  - Three of the `ExternalServiceAvailabilityCritical` alerts. There is one each for `ds_logon`, `mhv`, and `ID.me`. They use the `api_auth_saml_callback` metric, which is reported by both `v0` and `v1` sessions controllers.

Prometheus is currently built to page through pagerduty, the source code of that setup can be found [here](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/prometheus/alertmanager.yml.j2).

StatsD is the main metric collector for all of Vets-API and Vets-Website. The metrics are collected by StatsD at the server/container level and then stored for other systems to consume the data that is collected. The StatsD source code can be found [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/initializers/statsd.rb). There are several metrics in the source code that the VSP Identity team consumes such as the MVI metric [here](https://github.com/department-of-veterans-affairs/vets-api/blob/20b86216ab85a66d2b97de1448111f2e59e240f8/config/initializers/statsd.rb#L100). This metric is then consumed by Grafana which we use to visualize the data captured. 

## Grafana Dashboards

The main Grafana Dashboard used by the Identity team is the [SSOe Launch](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&from=now-24h&to=now) dashboard which lists out all of the saml metrics indicating the performance of all the login components for VA.gov. Grafana is an excellent solution to visualize anomalies over various time periods. Its limitation, which applies for Prometheus as well, is the data only goes back 2 weeks. There are several other dashboards of interest but the other one that has a direct impact on login performance is MPI (previously known as MVI). There is a dashboard [here](http://grafana.vfs.va.gov/d/000000062/mvi?orgId=1&from=now-24h&to=now) which can be viewed to monitor calls to MPI.

## Sentry

Sentry is where all of the errors related to Identity are written to. Sentry provides a number of features which allow us to see the source of the error but also visualize potential trends regarding browser, OS, and device versions. We have also used it to identify trends for time based anomalies. There are several "projects" in Sentry which you can view, but the main query is at [this link](http://sentry.vfs.va.gov/organizations/vsp/issues/?project=-1&query=is%3Aunresolved+assigned%3A%23vsp-identity&statsPeriod=14d) which shows you all the errors assigned to the VSP Identity team.

#### Metrics
This section we should list out each of the metrics we have, what they mean.
Also list out the alerts we have configured and their definitions. These need some cleanup.
