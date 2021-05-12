# VA Mobile App Operations and Incident Response 

### Procedures
* [Mobile Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/operations/Mobile%20Incident%20Response%20Playbook.md)
* [VSP Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md)
* [Security Incident Procedure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/Emergency%20Operating%20Procedures.md#SecurityIncident)

### Dashboards and Tools

Tool | Access | Purpose
--- | --- | ---
[Grafana](http://grafana.vfs.va.gov/d/cYh4m3UMz/mobile-api?orgId=1) | SOCKS | Operational and business metrics
[Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/) | SOCKS | Backend application exceptions and events
[Crashlytics](https://console.firebase.google.com/project/va-mobile/overview) | SaaS account | Frontend application exceptions and events, analytics
[AWS Logs](https://console.amazonaws-us-gov.com/cloudwatch/home?region=us-gov-west-1#logsV2:log-groups/log-group/dsva-vagov-staging$252Fsrv$252Fvets-api$252Fsrc$252Flog$252Fvets-api-server.log) | AWS | Logs
[PagerDuty](https://dsva.pagerduty.com/incidents) | SaaS account | Alerts, downtime management

### External Dependencies

 Mobile App Feature | External Dependency 
 --- | --- 
 Authentication and Token Access | [IAM SSOe OAuth](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/SSOe%20OAuth%20Services.md)
 Authentication - individual credentials | [ID.me](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ID.me.md), [MHV](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/My%20Healthe%20Vet.md), [DSLogon](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/DS_logon.md)
 Profile | [VA Profile](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/va-profile.md)
 Letters | [EVSS](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/Enterprise%20Veteran%20Self%20Service%20Portal%20Platform.md)
 Claims | [EVSS](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/Enterprise%20Veteran%20Self%20Service%20Portal%20Platform.md)
 Appeals | [Caseflow](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/Appeals.md)
 Secure Messaging | [MHV](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/My%20Healthe%20Vet.md)
 Appointments | [VAOS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/incident_response/VAOS%20Incident%20Playbook.md#incident-escalation)
 
 [Other External Service Integrations](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations)<br/>
 _Note that some of these external service integration documents have not been vetted recently_
 
 ### Key Slack channels
 
 DSVA Slack: #va-mobile-app, #oncall, #vfs-platform-support

### Personnel
If you need to escalate an issue beyond the immediate team, these are the relevant personnel (effective May 2021):
Role | Person | Contact Mechanism 
--- | --- | ---
Product Owner | Leanna Miller | DSVA Slack
Information System Owner (ISO) | Chris Johnston | DSVA Slack
Information System Security Officer (ISSO) | Griselda Gallegos | VA Email, phone
Privacy Officer | Rita Grewal | VA Email, phone

These contacts (other than mobile product owner) are documented officially here: [ATO Incident Response contact information](https://github.com/department-of-veterans-affairs/vets.gov-ato/blob/master/2020%20Docs/incident_response.md#40-contact-information)

