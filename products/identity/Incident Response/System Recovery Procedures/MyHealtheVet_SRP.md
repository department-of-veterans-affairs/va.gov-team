# System recovery plan - My HealtheVet

Follow these steps if the OCTO Identity My HealtheVet integration needs to be redeployed from scratch.

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

If VA.gov loses OCTO Identity services, our components monitored by Datadog should be alerting with No Data. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. On-call person should contact the [Product Manager (PM) / Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership) and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with Platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the [relevant dependent system contacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

## Recovery verification steps

1. Confirm Critical Monitors have recovered:  
   1. [Prod External: MHV authentication success rate is < 20% in the past 15 minutes](https://vagov.ddog-gov.com/monitors/119915)  
2. Confirm High Monitors have recovered:  
   1. [Prod External: MHV USiP Monitor is below 45%](https://vagov.ddog-gov.com/monitors/169075)  
   2. [Prod Outbound mhv basic SiS](https://vagov.ddog-gov.com/monitors/91260)  
   3. [Production Outbound [MHV Unified Sign-in] logingov IAL1 SSOe](https://vagov.ddog-gov.com/monitors/89572)  
   4. [Production [MHV Unified Sign-in] VA.gov Auto Sign-in Test IDme SSOe](https://vagov.ddog-gov.com/monitors/89573)  
   5. [Production [MHV Unified Sign-in] VA.gov Auto Sign-in Test MHV SSOe](https://vagov.ddog-gov.com/monitors/89574)
3. Login with MHV LOA1 account using the account credentials with the name "sylvest2" linked [here[(https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Test%20Documentation/test_accounts.md)
4. State in the #identity-support channel that all MHV services have been confirmed to be working.
