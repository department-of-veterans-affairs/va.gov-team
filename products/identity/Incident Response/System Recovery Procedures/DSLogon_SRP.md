# System recovery plan - DS Logon

Follow these steps if the OCTO Identity Team DS Logon integration needs to be redeployed from scratch.

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

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

If [VA.gov](http://va.gov/) loses OCTO Identity services, our components monitored by Datadog should be alerting with No Data. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) and Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).
2. Incident commander from the Platform team. This should be the same person who restored the [VA.gov](http://va.gov/) resources.
3. Relevant [dependent system contacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

    
## Recovery verification steps

1. Confirm High Monitors have recovered:  
   - [Prod External: DSLogon authentication success rate is \< 20% in the past 15 minutes](https://vagov.ddog-gov.com/monitors/119917)  
   - [Production Outbound SSOe Percent Error Threshold crossed DSLOGON](https://vagov.ddog-gov.com/monitors/115836)
   - [Production SiS DSLogon Monitor](https://vagov.ddog-gov.com/monitors/104510)
2. State in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel that all VA.gov Identity services have been restored and confirmed to be working.
