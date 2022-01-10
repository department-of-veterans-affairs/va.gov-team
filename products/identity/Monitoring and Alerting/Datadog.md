# VSP Identity Datadog Monitoring and Alerting APIs

The VSP Identity team utilizes two primary solutions for monitoring and alerting of va.gov login related functions. [Grafana](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&from=now-12h&to=now&refresh=30m) and [Datadog](https://app.datadoghq.com/dashboard/97h-d7e-tgr/joeidentitytestboard?from_ts=1641144949676&to_ts=1641317749676&live=true). VSP is moving all metrics away from Grafana and into Datadog. All of the metrics utilized within these two solutions relies on Statsd. The statsd modules are used within Vets-API and many of the required proxies for Vets-API, this ensures most of the important information required for the Identity team is captured to monitor all login related activity within VA.gov. 

### <ins>**Audience**</ins>
This document is intended to be utilized by anyone who has access to the [Identity Datadog Dashboard](https://app.datadoghq.com/dashboard/97h-d7e-tgr/joeidentitytestboard?from_ts=1641144949676&to_ts=1641317749676&live=true). The details within the document should be enough to help explain what the monitors intent is however the technical implementation of the stats that are collected to create the monitors is not explained in this document, for that you can review the [Identity Metrics and Errors document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Identity_errors_metrics.md).

### <ins>**Current State**</ins>
As of 3Jan2022 all the critical alerting lives within datadog which uses statsd and makes calls to pagerduty and slack. Statsd is still being used with Prometheus which also has its own call to pagerduty when an alert threshold is reached, the details of this can be found within the [Identity Errors and Metrics document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Identity_errors_metrics.md). The consolidation of all the alerts to function through Datadog only is currently underway, and this document will serve as the kickoff point to document the changes.

Production monitoring is currently not as easily accomplished because nearly all of the CSPs do not have the capability of creating "test production accounts."

### <ins>**How to use this document**</ins>
The document is broken down by Environment (Prod, Staging, etc.) → Type (Outbound, Inbound) → CSP (Login.gov, IDme, etc.) → Stats/Functions being utilized. If you want to know what monitoring is in place per environment, scroll down to the environment. If you want to know what a monitor is used for, search the document for the monitor name. Some monitors alert through pagerduty, others do not, regardless of the case if the monitor exists within Datadog it should be listed within this document.

**Note:** Incident response and exhaustive steps to attempt to identify the root cause of each of the alerts fired is out of scope for this document. 

#### <ins>**Key Definitions**</ins>
   - `Outbound auth` refers to authentication which starts on VA.gov OR the MHV unified sign-in page (which uses the VA.gov sign in page). The main path for Outbound auth currently starts from VA.gov and the myhealthevet unified sign in page.
 
   - `Inbound auth` refers to authentication somewhere outside of VA.gov and the MHV unified sign-in page (which uses the VA.gov sign in page). The main path for Inbound auth currently starts from eauth.va.gov/accessva, myhealthevet also has a path, but this is planned to be going away within 90 days of 5JAN2022.
 
   - `Custom` is a label for inbound authentication.

#### <ins>**Common information for all monitors and alerts**</ins>
- <ins>**Response Process:**</ins> 
    Start by checking slack for related outages. Often times the [#va-identity-alerts](https://dsva.slack.com/archives/C02SBFQ22RL)
    slack channel will have information about other outages such as DSLogon being down. If any CSP is down, this monitor will often fire, but not every time. The next location to check for issues is within Sentry. Start with [this URL](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=-1&query=is%3Aunresolved+assigned%3A%23vsp-identity&statsPeriod=14d) which filters issues down that are assigned to VSP Identity. The final location to look for anomalies would be in our [grafana SSOe stats dashboard](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&refresh=30m).
    
 - <ins>**Metric Sources:**</ins>
  These metrics and their initialization can be found starting [at this line of the sessions controller](https://github.com/department-of-veterans-affairs/vets-api/blob/db8635cc65d786ce265c27bcc22b96b415aa028f/app/controllers/v1/sessions_controller.rb#L24). The metrics are handled and incremented in the [login_stats function](https://github.com/department-of-veterans-affairs/vets-api/blob/db8635cc65d786ce265c27bcc22b96b415aa028f/app/controllers/v1/sessions_controller.rb#L265).

 - <ins>**Notifications:**</ins>
    [pagerduty alert](https://dsva.pagerduty.com/service-directory/P8H4DC6) to the oncall person and send a notification in the [va-identity-alerts](https://dsva.slack.com/archives/C02SBFQ22RL) slack channel.

 ---

- ## Production
    The monitors in production currently are set up to look for cascading login issues, not specifically a single CSP. There is worked planned for Jan 2022 which will add more production monitoring. The inability to create production test accounts for the CSPs is what holds us back from monitoring the full login flows in the production environment.

  - ## Inbound
    Inbound auth refers to authentication somewhere outside of VA.gov and the MHV unified sign-in page (which uses the VA.gov sign in page). The main path for `Inbound Auth` currently starts from eauth.va.gov/accessva, myhealthevet also has a path, but this is planned to be going away within 90 days of 5JAN2022.

    - ### **Identity Production Inbound ISAM SSOe Percent Error Threshold Crossed**

        <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/46467439) specifically looks for the percent of inbound ISAM SSOe authentications to drop below the acceptable threshold. In other words, if the percentage of errors for an inbound auto login attempt on VA.gov drops below the acceptable threshold, this will fire. The lack of a response for an initiated authentication will cause the success percentage to go down. When we get errors for an authentication event it is usually an indication of an issue between vets-api and eauth.

        <ins>**Threshold:**</ins> `Below 58% success percentage` averaged over a `15 minute window` with a recovery of 60%. 

        <ins>**Metrics used:**</ins> 

        ```
        ((vets_api.statsd.api_auth_login_success from context custom + vets_api.statsd.api_auth_login_failure from context custom) / vets_api.statsd.api_auth_new from context custom) * 100
        ```
        **Note:** `custom` is a label for inbound authentication.

        <ins>**Severity:**</ins> `Critical`. This monitor will send a [pagerduty alert](https://dsva.pagerduty.com/service-directory/P8H4DC6) to the oncall person and send a notification in the [va-identity-alerts](https://dsva.slack.com/archives/C02SBFQ22RL) slack channel.

  - ## Outbound
    Outbound auth refers to authentication which starts on VA.gov OR the MHV unified sign-in page (which uses the VA.gov sign in page). The main path for `Outbound Auth` currently starts from VA.gov and the myhealthevet unified sign in page.

    - ### **Identity Production Outbound ISAM SSOe Percent Error Threshold crossed**

        <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/46767507) specifically looks for the percent of outbound ISAM SSOe authentications to drop below the acceptable threshold. In other words, if the percentage of errors for an outbound login attempt on VA.gov drops below the acceptable threshold, this will fire. The lack of a response for an initiated authentication will cause the success percentage to go down. When we get errors for an authentication event it is usually an indication of an issue between vets-api and eauth.

        <ins>**Threshold:**</ins> `Below 50% success percentage` averaged over a `15 minute window` with a recovery of 56%. 

        <ins>**Metrics used:**</ins> 

        ```
        ((vets_api.statsd.api_auth_login_success from context IN (mhv,idme,dslogon,logingov) + vets_api.statsd.api_auth_login_failure from context IN (mhv,idme,dslogon,logingov)) / vets_api.statsd.api_auth_new from context IN (mhv,idme,dslogon,logingov)) * 100
        ```
       