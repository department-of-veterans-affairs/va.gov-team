# System recovery plan - Login.gov

Follow these steps if the OCTO Identity Login.gov integration needs to be redeployed from scratch.

## Presumption

The OCTO Platform team maintains the vets-api infrastructure. The following repositories contain modules, controllers, and components configured by Identity Platform team:

- `vets-api`
- `vets-website`
- `devops`
- `vsp-infra-application-manifests`

The system recovery plan assumes:

1. These repositories are fully functional.
2. The infrastructure running these services was restored to the last available good state.

The system recovery plan includes steps needed to restore critical OCTO Identity services.

This document also assumes all AWS services have been fully restored to an operational state.

Login.gov infrastructure is maintained by the Login.gov team. Completion of the recovery steps in this document assumes that the Login.gov outage has been resolved and the service is again available at the production level.

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all Login.gov authentication options are lost in VA.gov, all of our Login.gov components monitored by Datadog should be alerting with `No Data`. The on-call support individual will be contacted via PagerDuty. When the on-call person identifies that none of the Login.gov authentication options are functioning, the following methods of contact should be used:

1. On-call person should contact the team Product Manager (PM) / Technical Lead and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.  
3. Team PM / Technical Lead / Engineer should [contact the Login.gov POC to open a ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#logingov-sign-in) regarding system restoration.

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

## Recovery verification steps

1. Confirm Critical Monitors have recovered:  
   1. [Production Login.gov Auth Success Rate Threshold Crossed SSOe](https://vagov.ddog-gov.com/monitors/120105?view=spans)  
   2. [SiS Mobile CSP Success Rate Monitor \- Login.gov](https://vagov.ddog-gov.com/monitors/104510?view=spans)  
2. Confirm High Monitors have recovered:  
   1. Synthetic Test \- [Production Outbound USiP Login.gov IAL1 SSOe](https://vagov.ddog-gov.com/monitors/89572?view=spans)  
   2. Synthetic Test \- [Production Outbound Login.gov IAL1 SiS](https://vagov.ddog-gov.com/monitors/91259?view=spans)  
3. Manual Testing. To perform this step you will need production *Login.gov* credentials.  
   1. Ensure authentication attempts originating from VA.gov are successful   
      1. SSOe: [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
         1. Select ‘Login.gov', authenticate with Login.gov production credentials, confirm successful authentication on VA.gov.  
      2. Sign-in Service: [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
         1. Select ‘Login.gov', authenticate with Login.gov production credentials, confirm successful authentication on VA.gov.
4. State in the `#identity-support` channel that all Login.gov services have been restored and confirmed to be working.
