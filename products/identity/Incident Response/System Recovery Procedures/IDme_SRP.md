# System recovery plan - ID.me

Follow these steps if the OCTO Identity Team ID.me integration needs to be redeployed from scratch.

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

### Contact Information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

If [VA.gov](http://va.gov/) loses OCTO Identity services, our components monitored by Datadog should be alerting with No Data. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) and Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).
2. Incident commander from the Platform team. This should be the same person who restored the [VA.gov](http://va.gov/) resources.
3. Team PM / Technical Lead / Engineer should contact the relevant [dependent system POC](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#idme-sign-in) to open communication regarding system restoration.

## Technical Recovery Details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when VA.gov infrastructure is restored.
    
## Recovery Verification Steps

1. Confirm High Monitors have recovered:  
   1. [Production \[MHV Unified Sign-in\] VA.gov Auto Sign-in Test IDme SSOe](https://vagov.ddog-gov.com/monitors/89573)  
   2. [Prod Outbound external va.gov idme loa1 SiS](https://vagov.ddog-gov.com/monitors/91261)  
   3. [Prod Outbound va.gov idme loa1 SSOe](https://vagov.ddog-gov.com/monitors/89570)  
2. Ensure authentication attempts originating from VA.gov SSOe are successful  
   1. [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
      1. Select ‘ID.me’, authenticate with id.me production credentials, confirm successful authentication on VA.gov  
1. Ensure authentication attempts originating from VA.vog SiS are successful  
   1. [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
      1. Select ‘ID.me’, authenticate with id.me production credentials, confirm successful authentication on VA.gov
1.  State in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel that all ID.me services have been restored and confirmed to be working.
