# VA Mobile App Operations and Incident Response 

### Dashboards and Tools

Tool | Access | Purpose
--- | --- | ---
[Grafana](http://grafana.vfs.va.gov/d/cYh4m3UMz/mobile-api?orgId=1) | SOCKS | Operational and business metrics
[Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/) | SOCKS | Backend application exceptions and events
[Crashlytics](https://console.firebase.google.com/project/va-mobile/overview) | SaaS account | Frontend application exceptions and events, analytics
[AWS Logs](https://console.amazonaws-us-gov.com/cloudwatch/home?region=us-gov-west-1#logsV2:log-groups/log-group/dsva-vagov-staging$252Fsrv$252Fvets-api$252Fsrc$252Flog$252Fvets-api-server.log) | AWS | Logs
[PagerDuty](https://dsva.pagerduty.com/incidents) | SaaS account | Alerts, downtime management

### Procedures
* [VSP Incident Response Playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md)
* [Security Incident Procedure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/Emergency%20Operating%20Procedures.md#SecurityIncident)

### External Dependencies

[External Service Integrations](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations)

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
 
 _Note that some of these external service integration documents have not been vetted recently_
 
 ### Slack channels
 
 DSVA Slack: #oncall, #vfs-platform-support
