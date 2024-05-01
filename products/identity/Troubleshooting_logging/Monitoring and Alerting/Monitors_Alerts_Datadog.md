# 

Last Update: 13JUN22

The VSP Identity team utilizes two primary solutions for monitoring and alerting of [va.gov](http://va.gov/) login related functions. [Grafana](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&from=now-12h&to=now&refresh=30m) and [Datadog](https://app.datadoghq.com/dashboard/97h-d7e-tgr/vsp-identity-monitor-dashboard). VSP is moving all metrics away from Grafana and into Datadog. All of the metrics utilized within these two solutions rely on Statsd. The statsd modules are used within Vets-API and many of the required proxies for Vets-API, this ensures the required information the Identity team is captured.

### <ins>**Audience**</ins>

This document is intended to be utilized by anyone who has access to the [Identity Datadog Dashboard](https://app.datadoghq.com/dashboard/97h-d7e-tgr/vsp-identity-monitor-dashboard). The details within this document should be enough to help explain what the monitor's intent is and some initial information on how to respond. The technical implementation of the stats that are collected to create the monitors is not explained in this document, for that you can review the [Identity Metrics and Errors document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Identity_errors_metrics.md).

### <ins>**Current State**</ins>

As of 3Jan2022 all the critical alerting lives within datadog which uses statsd and makes calls to pagerduty and slack. Statsd is still being used with Prometheus which also has its own call to pagerduty when an alert threshold is reached, the details of this can be found within the [Identity Errors and Metrics document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Identity_errors_metrics.md). The consolidation of all the alerts to function through Datadog only is currently underway, and this document will serve as the kickoff point to document the changes.

Production monitoring is currently not as easily accomplished because nearly all of the CSPs do not have the capability of creating "test production accounts."

### <ins>**How to use this document**</ins>

The document is broken down by Environment (Prod, Staging, etc.) → Type (Outbound, Inbound) → CSP ([Login.gov](http://login.gov/), IDme, etc.) → Stats/Functions being utilized. If you want to know what monitoring is in place per environment, select the environment from the table of contents built into this github page. It is high If you want to know what a monitor is used for, search the document for the monitor name. Some monitors alert through pagerduty, others do not, regardless of the case if the monitor exists within Datadog it should be listed within this document.

**Note:** Incident response and exhaustive steps to attempt to identify the root cause of each of the alerts fired is out of scope for this document.

### <ins>**Key Definitions**</ins>

- `Outbound auth` refers to authentication which starts on [VA.gov](http://va.gov/) OR the MHV unified sign-in page (which uses the [VA.gov](http://va.gov/) sign in page). The main path for Outbound auth currently starts from [VA.gov](http://va.gov/) and the myhealthevet unified sign in page.
- `Inbound auth` refers to authentication somewhere outside of [VA.gov](http://va.gov/) and the MHV unified sign-in page (which uses the [VA.gov](http://va.gov/) sign in page). The main path for Inbound auth currently starts from [eauth.va.gov/accessva](http://eauth.va.gov/accessva), myhealthevet also has a path, but this is planned to be going away within 90 days of 5JAN2022.
- `Custom` is a label for inbound authentication.

### <ins>**Common information for all monitors and alerts**</ins>

- <ins>**Response Process:**</ins>
For nearly all alerts that could fire you should first check on datadog and view the images that were captured in the failed test. Then check slack for related outages. Often times the [#va-identity-alerts](https://dsva.slack.com/archives/C02SBFQ22RL)
slack channel will have information about other outages such as DSLogon being down. The [Identity & Access Management (IAM) Operational Summary page](https://iamportal.iam.va.gov/iamv2/index.php) (VPN required) will have information about long lived SSOe downtime/incidents. If any CSP is down, this monitor will often fire, but not every time. The next location to check for issues is within Sentry. Start with [this URL](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=-1&query=is%3Aunresolved+assigned%3A%23vsp-identity&statsPeriod=14d) which filters issues down that are assigned to VSP Identity. The final location to look for anomalies would be in our [grafana SSOe stats dashboard](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1&refresh=30m).
- <ins>**Response Contacts:**</ins>
As you determine that others may need to be pulled in to help with the remediation of an issue that has led you to this document, you can find all of the most up to date contacts in [this document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md) (requires Github VA Internal Team Access).
- <ins>**Metric Sources:**</ins>
These metrics and their initialization can be found starting [at this line of the sessions controller](https://github.com/department-of-veterans-affairs/vets-api/blob/db8635cc65d786ce265c27bcc22b96b415aa028f/app/controllers/v1/sessions_controller.rb#L24). The metrics are handled and incremented in the [login_stats function](https://github.com/department-of-veterans-affairs/vets-api/blob/db8635cc65d786ce265c27bcc22b96b415aa028f/app/controllers/v1/sessions_controller.rb#L265).
- <ins>**Notifications:**</ins>
[pagerduty alert](https://dsva.pagerduty.com/service-directory/P8H4DC6) to the oncall person and send a notification in the [va-identity-alerts](https://dsva.slack.com/archives/C02SBFQ22RL) slack channel.

---

- 1 Production
    - 1.1 Inbound
        - 1.1.1 **Identity - Production Inbound ISAM SSOe Percent Error Threshold Crossed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/46467439) specifically looks for the percent of inbound ISAM SSOe authentications to drop below the acceptable threshold. In other words, if the percentage of errors for an inbound auto login attempt on [VA.gov](http://va.gov/) drops below the acceptable threshold, this will fire. The lack of a response for an initiated authentication will cause the success percentage to go down. When we get errors for an authentication event it is usually an indication of an issue between vets-api and eauth.
            
            <ins>**Threshold:**</ins> `Below 58% success percentage` averaged over a `15 minute window` with a recovery of 60%.
            
            <ins>**Metrics used:**</ins>
            
            ```
            ((vets_api.statsd.api_auth_login_success from context custom +
            vets_api.statsd.api_auth_login_failure from context custom) /
            vets_api.statsd.api_auth_new from context custom) * 100
            
            ```
            
            **Note:** `custom` is a label for inbound authentication.
            
            <ins>**Severity:**</ins> `Critical`. This alert impacts Veterans.
            
    - 1.2 Outbound
        - 1.2.1 **Identity - Production Outbound Sign-in Test IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/edit/9sc-mj9-i64) monitors the current status of IDme outbound login on [va.gov](http://va.gov/). Ensure you check what the failure screen captures show within datadog for this alert before proceeding with troubleshooting. If this monitor is firing it could mean there is an issue with IDme, check the status page for IDme [here](https://status.id.me/). It could mean there is an issue with how the ISAM is processing [va.gov](http://va.gov/) login attempts, contact IAM team through slack and open an incident. This also could be an issue within vets-api with the session controller or frontend.
            
            <ins>**Threshold:**</ins> If login test fails 3 times within 90 seconds, it will fire the alert.
            
            <ins>**Metrics used:**</ins> Number of failed test attempts within Datadog
            
            <ins>**Severity:**</ins> Critical. This could impact Veterans ability to login.
            
        - 1.2.2 **Identity - Prod ISAM Metadata Changed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/c6m-nyw-h6v) specifically looks for changes to the ISAM production metadata file located [here](https://eauth.va.gov/isam/saml/metadata/saml20idp). The monitor downloads the file from the specified location, compares the MD5 sum of the downloaded file to a known good MD5 of the last known metadata file from Eauth. If this file changes and vets-api doesn't have the correct latest version, then authentication will stop working between vets-api and eauth. If this alert triggers you should update this [metadata file](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/vets-api/ssoe_idp_prod_metadata_isam.xml).
            
            <ins>**Threshold:**</ins> If the MD5 sum doesn't match 3 times within 90 seconds, it will fire the alert.
            
            <ins>**Metrics used:**</ins> This monitor compares the hash of a file it downloads from the specified location and compares it to a known good hash.
            
            <ins>**Severity:**</ins> Critical. This could impact Veterans ability to login.
            
        - 1.2.3 Identity - Production [MHV Unified Sign-in] [VA.gov](http://va.gov/) AUTO Sign-in Test IDme
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/erd-8q7-dna) checks that the idme credential can successfully login through the MHV unified sign in page on production and when going to [va.gov](http://va.gov/) the user is auto signed in. This is considered an inbound test for documentation purposes. If this alert triggers it could be the idme credential itself has an issue (all we can do is alert IDme to this fact), the page contents have changed in the sign in flow (likely just need to modify the test steps), or more importantly we made a change to our codebase that negatively impacted the functionality of the MHV unified sign in page.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Critical`. This alert indicates an impact to Veterans ability to access MyHealth services.
            
        - 1.2.4 Identity - Production [MHV Unified Sign-in] [VA.gov](http://va.gov/) Auto Sign-in Test MHV
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/txh-rpz-ph9) checks that the MHV credential can successfully login through the MHV unified sign in page on production and when going to [va.gov](http://va.gov/) being auto-logged in. We call this outbound only because it uses the [va.gov](http://va.gov/) signin modal but it's more like a hybrid of inbound and outbound. If this alert triggers it could be the MHV credential itself has an issue (all we can do is alert MHV to this fact), the page contents have changed in the sign in flow (likely just need to modify the test steps), or more importantly we made a change to our codebase that negatively impacted the functionality of the MHV unified sign in page.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> N/A. Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Critical`. This alert indicates an impact to Veterans ability to access MyHealth services.
            
        - 1.2.5 Identity - Prod Outbound logingov IAL1
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/epp-jc4-cq6) checks that the [login.gov](http://login.gov/) credential is operating as expected on production. If this alert fires you should first check on datadog and view the images that were captured in the failed test. This alert can fire because the frontend changed the layout, the csp itself could be down, eauth could be down, we may have a certificate issue preventing us from properly signing our saml requests, and a few other less likely scenarios.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> N/A. Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Critical`. This alert indicates an impact to Veterans ability to access [VA.gov](http://va.gov/) services through the [login.gov](http://login.gov/) CSP
            
        - 1.2.6 **Identity - Production Auth_too_late Login Callback Error Threshold Crossed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/55168108) specifically watches the number of auth_too_late error codes returned from Eauth during the authentication process. If too many errors are recorded during the specified time window then this monitor will fire an alert. This alert can indicate a significant issue with vets-api servers local time settings or latency anywhere within the authentication flow. It is also possible the end user has their local time misconfigured or a bad actor is attempting to manipulate the response. You should follow the above response procedures but focus on the number of errors. If there are a large amount it may indicate a vets-api or Eauth issue. If this error count is very low it could be an end user issue, i.e a user stepped away during the auth process and attempted to complete it 30 minutes later.
            
            <ins>**Threshold:**</ins> `above or equal to 50 total errors` over a `5 minute window` with a recovery of less than 30 errors.
            
            <ins>**Metrics used:**</ins>
            
            ```
            sum:vets_api.statsd.api_auth_login_callback_failed{error:auth_too_late,deployment_env:vagov-prod}.as_count()
            
            ```
            
            <ins>**Severity:**</ins> `High`. This alert impacts Veterans however it's possible for a user to take too long during the auth process if they step away from their device and attempt to complete the authentication later.
            
        - 1.2.7 **Identity - Production Auth_too_early Login Callback Error Threshold Crossed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/55167253) specifically watches the number of auth_too_early error codes returned from Eauth during the authentication process. If too many errors are recorded during the specified time window then this monitor will fire an alert. This alert can indicate a significant issue with vets-api servers local time settings. It is also possible the end user has their local time misconfigured or a bad actor is attempting to manipulate the response. You should follow the above response procedures but focus on the number of errors. If there are a large amount it may indicate a vets-api issue. If this error count is very low it could be an end user issue.
            
            <ins>**Threshold:**</ins> `above or equal to 3 total errors` over a `5 minute window` with a recovery of less than 2 errors.
            
            <ins>**Metrics used:**</ins>
            
            ```
            sum:vets_api.statsd.api_auth_login_callback_failed{error:auth_too_early,deployment_env:vagov-prod}.as_count()
            
            ```
            
            <ins>**Severity:**</ins> `Critical`. This alert impacts Veterans.
            
        - 1.2.8 **Identity - Production Outbound SSOe Percent Error Threshold crossed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/46767507) specifically looks for the percent of outbound SSOe authentication return percentage. This metric attempts to ensure that the combined response of a success and failure is above a certain percentage. If this metric drops below the threshold it typically indicates that either vets-api isn't able to process auth responses correctly from eauth or eauth is down and unable to respond. When this alert fires it indicates that [va.gov](http://va.gov/) and the sign in components are available because this alert states a new auth request was initiated but a specific threshold of those new authentications did not return with either success or failure. Follow the standard response procedures listed above and contant the Eauth team in the #VSP-Identity channel asap as this indicates an issue with production.
            
            <ins>**Threshold:**</ins> `Less than 50 percent` return over a `15 minute window` with a recovery of greater than or equal to 56.
            
            <ins>**Metrics used:**</ins>
            
            ```
            ((sum:vets_api.statsd.api_auth_login_success{context IN (mhv,idme,dslogon,logingov) AND deployment_env:vagov-prod}.as_rate() +
            sum:vets_api.statsd.api_auth_login_failure{context IN (mhv,idme,dslogon,logingov) AND deployment_env:vagov-prod}.as_rate()) /
            sum:vets_api.statsd.api_auth_new{context IN (mhv,idme,dslogon,logingov) AND deployment_env:vagov-prod}.as_rate()) * 100
            
            ```
            
            <ins>**Severity:**</ins> `Critical`. This alert impacts Veterans.
            
        - 1.2.9 **Identity - Production Auth Login Callback Failed Error=Unknown**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/47794259) specifically looks for the number of authentication login callback failure error code=unknown to reach a specific threshold. This alert typically indicates something is wrong with eauth or how eauth is receiving our saml requests. This alert would require investigating in the standard process described above, but also alerting the Eauth team to discover if they are aware of any issues that may be causing this. This error code (unknown) is a catch all and could be difficult to debug because we don't get any of the error details from eauth. The fact that its "unknown" is actually coming from the ISAM appliance itself not having a pre-designated error code for whatever is occurring in this transaction.
            
            <ins>**Threshold:**</ins> `greater than or equal to 25 errors` in total over a `5 minute window` with a recovery of less than 5.
            
            <ins>**Metrics used:**</ins>
            
            ```
            vets_api.statsd.api_auth_login_callback_failed as count
            
            ```
            
        - 1.2.10 **Identity Production Outbound ISAM SSOe Percent Error Threshold crossed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/46767507) specifically looks for the percent of outbound ISAM SSOe authentications to drop below the acceptable threshold. In other words, if the percentage of errors for an outbound login attempt on [VA.gov](http://va.gov/) drops below the acceptable threshold, this will fire. The lack of a response for an initiated authentication will cause the success percentage to go down. When we get errors for an authentication event it is usually an indication of an issue between vets-api and eauth.
            
            <ins>**Threshold:**</ins> `Below 50% success percentage` averaged over a `15 minute window` with a recovery of 56%.
            
            <ins>**Metrics used:**</ins>
            
            ```
            ((vets_api.statsd.api_auth_login_success from context IN (mhv,idme,dslogon,logingov) +
            vets_api.statsd.api_auth_login_failure from context IN (mhv,idme,dslogon,logingov)) /
            vets_api.statsd.api_auth_new from context IN (mhv,idme,dslogon,logingov)) * 100
            
            ```
            
            <ins>**Severity:**</ins> Critical. This is impacting Veterans and is a production level outage.
            
        - 1.2.11 **Identity - Production [MHV Unified Sign-in] IDME LOA1**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/66746030) specifically looks for IDME authentication in production. This alert typically indicates something is wrong with IDME login. This alert would require investigating in the standard process described above, this alert would need further investigation as this issue would be a production issue.
            
            <ins>**Threshold:**</ins> `greater than or equal to 2 errors` in total over a `60 minute window` with a recovery of less than 30.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Critical. This is impacting Veterans and is a production level outage.
            
        - 1.2.12 **Identity - Production [MHV Unified Sign-in] MHV Basic**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/66745855) specifically looks for MHV authentication in production. This alert typically indicates something is wrong with MHV Basic login. This alert would require investigating in the standard process described above, this alert would need further investigation as this issue would be a production issue.
            
            <ins>**Threshold:**</ins> `greater than or equal to 2 errors` in total over a `60 minute window` with a recovery of less than 30.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Critical. This is impacting Veterans and is a production level outage.
            
        - 1.2.13 **Identity - Production [MHV Unified Sign-in] logingov IAL1**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/monitors/66746216) specifically looks for logingov IAL1 authentication in production. This alert typically indicates something is wrong with logingov IAL1 login. This alert would require investigating in the standard process described above, this alert would require further investigation as this issue would be a production issue.
            
            <ins>**Threshold:**</ins> `greater than or equal to 2 errors` in total over a `60 minute window` with a recovery of less than 30.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Critical. This is impacting Veterans and is a production level outage.
            
- 2 Staging
    
    The monitors in staging currently are set up to monitor and alert on internal system availability, external system availability, and any changes to the Identity application stack that cause unexpected results during the authentication process.
    
    - 2.1 Inbound
        - 2.1.1 **Identity - Staging Inbound IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/4dp-tqc-3zp) monitors IDme authentication on staging inbound from Accessva. If this alert is firing it could be an indicator that the staging IDme credential service is having an issue. The other two potential issues are that accessva is down or [va.gov](http://va.gov/) inbound has been modified at the source code level.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.1.2 **Identity - Staging Inbound DSLogon**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/4dp-tqc-3zp) monitors dslogon authentication on staging inbound from Accessva. If this alert is firing it could be an indicator that the staging dslogon credential service is having an issue. The other two potential issues are that accessva is down or [va.gov](http://va.gov/) inbound has been modified at the source code level.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.1.3 **Identity - Staging Inbound logingov IAL2**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/dwu-a8u-m2y) monitors logingov login on staging. If this alert fires it indicates there is an issue with the logingov CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
    - 2.2 Outbound
        - 2.2.1 **Identity - Staging [VA.gov](http://va.gov/) Login Routes**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/n5m-g2i-8nd) monitors the login buttons on the sign in modal. If this is failing its could be due to a change in the button layout or the next hop of the csp is not functioning correctly.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.2 **Identity - Staging Outbound logingov IAL1**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/pmt-pk5-b9b) monitors logingov login on staging. If this alert fires it indicates there is an issue with the logingov CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.3 **Identity - Staging Outbound logingov IAL2**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/gut-wmw-x2f) monitors logingov login on staging. If this alert fires it indicates there is an issue with the logingov CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.4 **Identity - Staging Outbound Verify Route Test IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/csg-vf6-srb) monitors IDme verify route on staging. If this alert fires it either indicates that the elements for the buttons have changed or the route for IDme verify has been inadvertently modified. This type of change could end up impacting veterans ability to upgrade their idme account if it were to propagate to production.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.5 **Identity - Staging Outbound MHV**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/mu2-rww-28d) monitors MHV login on staging. If this alert fires it indicates there is an issue with the MHV CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.6 **Identity - Staging Outbound IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/j35-a9i-7zc) monitors IDme login on staging. If this alert fires it indicates there is an issue with the IDme CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.7 **Identity - Staging Outbound DSLogon**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/d8r-7gc-6xn) monitors dslogon authentication on staging outbound. If this alert is firing it could be an indicator that the staging dslogon credential service is having an issue. The other two potential issues are that accessva is down or [va.gov](http://va.gov/) has been modified at the source code level.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 2.2.8 **Identity - Staging ISAM Metadata Changed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/7tu-icm-hfr) specifically looks for changes to the ISAM staging metadata file located [here](https://sqa.eauth.va.gov/isam/saml/metadata/saml20idp). The monitor downloads the file from the specified location, compares the MD5 sum of the downloaded file to known good MD5 of the last known metadata file from Eauth. If this file changes and vets-api doesn't have the correct latest version, then authentication will stop working between vets-api and eauth. If this alert triggers you should update this [metadata file](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/vets-api/ssoe_idp_sqa_metadata_isam.xml).
            
            <ins>**Threshold:**</ins> If the MD5 sum doesn't match 3 times within 90 seconds, it will fire the alert.
            
            <ins>**Metrics used:**</ins> This monitor compares the hash of a file it downloads from the specified location and compares it to a known good hash.
            
            <ins>**Severity:**</ins> High. This is a staging alert so it does not impact Veterans but will block engineers from developing in staging if they need authentication in their application.
            
        - 2.2.9 **Identity - Staging [MHV Unified Sign-in] Test IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/dq4-zra-xwc) monitors that the MHV unified page on staging with the IDme CSP has an issue. The steps in this test utilize a private datadog location because MHV staging is only available on the VA network (we normally use CAG for this). Review the screen captures within datadog for this alert to start the investigation process. The fault of this issue could be from vets-api, [va.gov](http://va.gov/) frontend, an MHV staging change, and in some cases a simple pop-up survey that triggered a missed step during the verification flow of this monitor.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Medium`. This monitor covers a small subset of our services and in staging does not impact Veterans. This alert could be an indicator of an eventual production issue if the same code that caused this alert is then merged into production.
            
        - 2.2.10 **Identity - Staging Outbound create logingov account MHV**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/i3s-dvz-96h) monitors the login.gov account creation link for MHV LOA1 users. The steps in this test utilize a private datadog location because MHV staging is only available on the VA network (we normally use CAG for this). Review the screen captures within datadog for this alert to start the investigation process. The fault of this issue could be from vets-api, [va.gov](http://va.gov/) frontend, an MHV staging change, and in some cases a simple pop-up survey that triggered a missed step during the verification flow of this monitor.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Medium`. This monitor covers a small subset of our services and in staging does not impact Veterans. This alert could be an indicator of an eventual production issue if the same code that caused this alert is then merged into production.
            
        - 2.2.11 **Identity - Staging Outbound create idme account dslogon**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/7r8-k64-g66) monitors the idme account creation link for dslogon users. Review the screen captures within datadog for this alert to start the investigation process. The fault of this issue could be from vets-api, [va.gov](http://va.gov/) frontend, a DSLogon staging change, and in some cases a simple pop-up survey that triggered a missed step during the verification flow of this monitor.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Medium`. This monitor covers a small subset of our services and in staging does not impact Veterans. This alert could be an indicator of an eventual production issue if the same code that caused this alert is then merged into production.
            
        - 2.2.12 **Identity - Staging Outbound create logingov account dslogon**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/4ra-8fp-5mv) monitors the login.gov account creation link for DSLogon users. Review the screen captures within datadog for this alert to start the investigation process. The fault of this issue could be from vets-api, [va.gov](http://va.gov/) frontend, an DSLogon staging change, and in some cases a simple pop-up survey that triggered a missed step during the verification flow of this monitor.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Medium`. This monitor covers a small subset of our services and in staging does not impact Veterans. This alert could be an indicator of an eventual production issue if the same code that caused this alert is then merged into production.
            
        - 2.2.13 **Identity - Staging Outbound create idme account MHV**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/5nj-3c8-wy9) monitors the idme account creation link for MHV LOA1 users. The steps in this test utilize a private datadog location because MHV staging is only available on the VA network (we normally use CAG for this). Review the screen captures within datadog for this alert to start the investigation process. The fault of this issue could be from vets-api, [va.gov](http://va.gov/) frontend, an MHV staging change, and in some cases a simple pop-up survey that triggered a missed step during the verification flow of this monitor.
            
            <ins>**Threshold:**</ins> This alert fires if the monitor flow fails three times within 90 seconds.
            
            <ins>**Metrics used:**</ins> Synthetic Monitor.
            
            <ins>**Severity:**</ins> `Medium`. This monitor covers a small subset of our services and in staging does not impact Veterans. This alert could be an indicator of an eventual production issue if the same code that caused this alert is then merged into production.
            
- 3 Dev
    
    The monitors in Dev currently are set up to monitor and alert on internal system availability, external system availability, and any changes to the Identity application stack that cause unexpected results during the authentication process.
    
    ## 3.1 Inbound
    
    - 3.2 Outbound
        - 3.2.1 **Identity - Dev Outbound logingov IAL2**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/qmp-x7m-srq) monitors logingov IAL2 login on dev. If this alert fires it indicates there is an issue with the logingov CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 3.2.2 **Identity - Dev Outbound logingov IAL1**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/pzm-hes-p7b) monitors logingov IAL1 login on dev. If this alert fires it indicates there is an issue with the logingov CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in staging is going to propagate to production during the next deploy.
            
        - 3.2.3 **Identity - Dev Outbound MHV**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/62z-dvz-ksb) monitors MHV login on dev. If this alert fires it indicates there is an issue with the MHV CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in dev is going to propagate to production during the next deploy.
            
        - 3.2.4 **Identity - Dev Outbound IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/td2-4bu-h7x) monitors IDme login on dev. If this alert fires it indicates there is an issue with the IDme CSP, an eauth issue with ssoe, or an internal vets-api error which is preventing the authentication process from being completed.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in dev is going to propagate to production during the next deploy.
            
        - 3.2.5 **Identity - Dev Outbound Verify Route Test IDme**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/i5h-f4z-e84) monitors IDme verify route on dev. If this alert fires it either indicates that the elements for the buttons have changed or the route for IDme verify has been inadvertently modified. This type of change likely impacts veterans ability to upgrade their idme account.
            
            <ins>**Threshold:**</ins> Three failed tests within 90 seconds.
            
            <ins>**Metrics used:**</ins> Count test failures
            
            <ins>**Severity:**</ins> Medium. This alert could be an indicator that a potential issue in dev is going to propagate to production during the next deploy.
            
        - 3.2.6 **Identity - Dev ISAM Metadata Changed**
            
            <ins>**Description:**</ins> [This monitor](https://app.datadoghq.com/synthetics/details/2r7-e82-zzk) specifically looks for changes to the ISAM dev metadata file located [here](https://int.eauth.va.gov/isam/saml/metadata/saml20idp). The monitor downloads the file from the specified location, compares the MD5 sum of the downloaded file to known good MD5 of the last known metadata file from Eauth. If this file changes and vets-api doesn't have the correct latest version, then authentication will stop working between vets-api and eauth. If this alert triggers you should update this [metadata file](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/vets-api/ssoe_idp_int_metadata_isam.xml).
            
            <ins>**Threshold:**</ins> If the MD5 sum doesn't match 3 times within 90 seconds, it will fire the alert.
            
            <ins>**Metrics used:**</ins> This monitor compares the hash of a file it downloads from the specified location and compares it to a known good hash.
            
            <ins>**Severity:**</ins> High. This is a dev alert so it does not impact Veterans but will block engineers from developing in dev if they need authentication in their application.
