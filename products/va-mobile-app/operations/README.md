# Incident Response and Operations

### Procedures
In the event of an incident, please follow the relevant playbook or procedure outlined in the table below. If any of the following conditions are met, notify the Product Owner and, once the incident is resolved, follow up with a postmortem report: 

* Incident requires the use of a playbook
* Occurs for a significant portion of the userbase
* Persists for a significant period of time
* Involves the security of a system or a Veteran's data
* Requires out-of-team coordination to fix
* Requires an out-of-band deployment

For all other incidents, use your best judgement on who to notify and how to proceed. In addition to a postmortem report, if the incident is such that it may occur again in the future – or if it follows a theme common to incidents in the past – please add the incident and the steps to resolve it as a Mobile Incident Response Play.

Procedure | Usage
:-- | :--
[Mobile Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/operations/Mobile%20Incident%20Response%20Playbook.md) | Respond to mobile-specific incidents
[Mobile Incident Response Plays](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/operations/Mobile%20Plays%20and%20Postmortems.md) | Plays and postmortems for common incidents
[VSP Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md) | Respond to VSP incidents impacting – but not limited to – mobile
[Security Incident Procedure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/Emergency%20Operating%20Procedures.md#SecurityIncident) | Respond to security incidents
[VSP Out-of-band Deploy Process](https://depo-platform-documentation.scrollhelp.site/support/Deployment-Policies.1279787009.html#DeploymentPolicies-Requestingout-of-banddeploys) | Request out-of-band deploys for critical fixes
[Postmortem Repository and Template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) | File postmortems


### People
If you need to escalate an issue, these are the relevant personnel (effective January 2025):
Role | Person | Contact Mechanism 
:-- | :-- | :--
Product Owner | Ryan Thurlwell | DSVA Slack
Engineering Lead | Tim Wright | DSVA Slack
Product Lead | Becca Tupaj | DSVA Slack
Information System Owner (ISO) | Chris Johnston | DSVA Slack


### Key Slack Channels

Many issues can be detected / resolved by monitoring / reaching out to others in DSVA Slack. Some of the important channels are,
* #va-mobile-app
* #va-mobile-app-alerts
* #vfs-platform-support
* #vsp-identity
* #vsp-operations


### Dashboards and Tools
The mobile app and backend takes advantage of a suite of tools for monitoring and alerting.
Tool | Access | Purpose
:-- | :-- | :--
[Grafana](http://grafana.vfs.va.gov/d/cYh4m3UMz/mobile-api?orgId=1) | SOCKS | Operational and business metrics
[DataDog](https://app.datadoghq.com/dashboard/9nz-cn7-ws6/mobile-api-dashboard?from_ts=1640615800322&to_ts=1643294200322&live=true) | SaaS account | Monitoring and Alerting
[Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/) | SOCKS | Backend application exceptions and events
[Firebase Analytics and Crashlytics](https://console.firebase.google.com/project/va-mobile/overview) | SaaS account | Frontend application exceptions and events, analytics
[AWS Logs](https://console.amazonaws-us-gov.com/cloudwatch/home?region=us-gov-west-1#logsV2:log-groups/log-group/dsva-vagov-staging$252Fsrv$252Fvets-api$252Fsrc$252Flog$252Fvets-api-server.log) | AWS | Logs
[PagerDuty](https://dsva.pagerduty.com/incidents) | SaaS account | Alerts, downtime management


### External Dependencies
The mobile app relies on many external systems in order to retrieve and process data. When any of the systems identified below encounter issues, the mobile app is directly impacted.
 Mobile App Feature | Feature Maintenance Window Service | External Dependency | External Dependency Maintenance Window Service
 :-- | :-- | :-- | :--
 Authentication and Token Access | | [IAM SSOe OAuth](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/SSOe%20OAuth%20Services.md) | [SSOe OAuth](https://dsva.pagerduty.com/service-directory/P0J60YD)
 Authentication - individual credentials | | [ID.me](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ID.me.md), [MHV](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/My%20Healthe%20Vet.md), [DSLogon](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/DS_logon.md) | [ID.me](https://dsva.pagerduty.com/service-directory/PVWB4R8), [MHV](https://dsva.pagerduty.com/service-directory/PP2ZZ2V), [DSLogon](https://dsva.pagerduty.com/service-directory/P9DJJAV)
 Profile | | [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html) | [VA Profile](https://dsva.pagerduty.com/service-directory/PHVOGQ1)
 Letters | | [EVSS](https://depo-platform-documentation.scrollhelp.site/developer-docs/EVSS.1887240213.html) | [EVSS](https://dsva.pagerduty.com/service-directory/PZKWB6Y)
 Claims | | [EVSS](https://depo-platform-documentation.scrollhelp.site/developer-docs/EVSS.1887240213.html) | [EVSS](https://dsva.pagerduty.com/service-directory/PZKWB6Y)
  Direct Deposit Benefits | | [EVSS](https://depo-platform-documentation.scrollhelp.site/developer-docs/EVSS.1887240213.html) | [EVSS](https://dsva.pagerduty.com/service-directory/PZKWB6Y)
   Disability Rating | | [EVSS](https://depo-platform-documentation.scrollhelp.site/developer-docs/EVSS.1887240213.html) | [EVSS](https://dsva.pagerduty.com/service-directory/PZKWB6Y)
 Appeals | | [Caseflow](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/Appeals.md) | [Appeals](https://dsva.pagerduty.com/service-directory/P9S4RFU)
 Secure Messaging | | [MHV](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/My%20Healthe%20Vet.md) | [MHV](https://dsva.pagerduty.com/service-directory/PP2ZZ2V)
 Appointments | | [VAOS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/incident_response/VAOS%20Incident%20Playbook.md#incident-escalation) |
 Immunizations | | [Lighthouse](https://developer.va.gov/explore/health/docs/fhir?version=current) |
 Push Notifications | | [VEText](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/vetext), [VANotify](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify) |
 
 [Other External Service Integrations](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations)<br/>
 _Note that some of these external service integration documents have not been vetted recently_
