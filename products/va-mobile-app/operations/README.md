# VA Mobile App Operations and Incident Response 

### Procedures

Procedure | Usage
:-- | :--
[Mobile Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/operations/Mobile%20Incident%20Response%20Playbook.md) | Respond to mobile-specific incidents
[VSP Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md) | Respond to VSP incidents impacting — but not limited to — mobile
[Security Incident Procedure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/Emergency%20Operating%20Procedures.md#SecurityIncident) | Respond to security incidents
[VSP Out-of-band Deploy Process](https://depo-platform-documentation.scrollhelp.site/support/Deployment-Policies.1279787009.html#DeploymentPolicies-Requestingout-of-banddeploys) | Request out-of-band deploys for critical fixes
[Postmortem Repository and Template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) | File postmortems

### Dashboards and Tools

Tool | Access | Purpose
:-- | :-- | :--
[Grafana](http://grafana.vfs.va.gov/d/cYh4m3UMz/mobile-api?orgId=1) | SOCKS | Operational and business metrics
DataDog | SOCKS | Monitoring and Alerting
[Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/) | SOCKS | Backend application exceptions and events
[Firebase Analytics and Crashlytics](https://console.firebase.google.com/project/va-mobile/overview) | SaaS account | Frontend application exceptions and events, analytics
[AWS Logs](https://console.amazonaws-us-gov.com/cloudwatch/home?region=us-gov-west-1#logsV2:log-groups/log-group/dsva-vagov-staging$252Fsrv$252Fvets-api$252Fsrc$252Flog$252Fvets-api-server.log) | AWS | Logs
[PagerDuty](https://dsva.pagerduty.com/incidents) | SaaS account | Alerts, downtime management

### External Dependencies

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
 
 ### Key Slack channels
 Many issues can be detected / resolved by monitoring / reaching out to others in DSVA Slack. Some of the important channels are,
 * #va-mobile-app
 * #va-mobile-app-alerts
 * #oncall
 * #vfs-platform-support
 * #vsp-identity
 * #vsp-operations

### Personnel
If you need to escalate an issue beyond the immediate team, these are the relevant personnel (effective May 2021):
Role | Person | Contact Mechanism 
:-- | :-- | :--
Product Owner | Leanna Miller | DSVA Slack
Information System Owner (ISO) | Chris Johnston | DSVA Slack
Information System Security Officer (ISSO) | Griselda Gallegos | VA Email, phone
Privacy Officer | Rita Grewal | VA Email, phone

These contacts (other than mobile product owner) are documented officially here: [ATO Incident Response contact information](https://github.com/department-of-veterans-affairs/vets.gov-ato/blob/master/2020%20Docs/incident_response.md#40-contact-information)

