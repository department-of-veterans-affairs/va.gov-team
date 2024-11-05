# System recovery plan - Unified Sign-in Page (USiP)

Follow these steps if the OCTO Identity Unified Sign-in Page service needs to be redeployed from scratch.

## Presumption

The OCTO Platform team maintains the vets-api infrastructure. The following repositories contain modules, controllers, and components configured by Identity Platform team:

- `vets-api`
- `vets-website`
- `devops`
- `vsp-infra-application-manifests`

The system recovery plan assumes:

1. These repositories are fully functional.
2. The infrastructure running these services was restored to the last available good state.

The system recovery plan includes steps needed to restore critical OCTO Identity services. This document also assumes all AWS services have been fully restored to an operational state.

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

If [VA.gov](http://va.gov/) loses OCTO Identity services, our components monitored by Datadog should be alerting with `No Data`. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) and Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).
2. Incident commander from the Platform team. This should be the same person who restored the [VA.gov](http://va.gov/) resources.
3. Relevant [dependent system contacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

## Recovery verification steps

1. Verify that each of the following Datadog monitors are functioning above the percentage listed in the following monitor titles:  
   1. [Identity - Prod External: VA OCC Mobile USiP Monitor is below 30%](https://vagov.ddog-gov.com/monitors/169275)  
   2. [Identity - Prod External: VA Mobile USiP Monitor is below 45%](https://vagov.ddog-gov.com/monitors/169276)  
   3. [Identity - Prod External: MyVAHealth USiP Monitor is below 45%](https://vagov.ddog-gov.com/monitors/169277)  
   4. [Identity - Prod External: MHV USiP Monitor is below 45%](https://vagov.ddog-gov.com/monitors/169075)  
2. Ensure that sign-in is working in production by logging in with a production account:  
   1. Navigate to the [My HealtheVet](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/user-login?redirect=/mhv-portal-web/home) login.  
   2. Click “Option 1: New VA sign in”.  
      1. Select ‘login.gov’, authenticate with login.gov production credentials, and confirm that you are successfully authenticated and redirected to [myhealth.va.gov](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/user-login?redirect=/mhv-portal-web/home).  
      2. Select ‘ID.me’, authenticate with id.me production credentials, and confirm that you are successfully authenticated and redirected to [myhealth.va.gov](https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/user-login?redirect=/mhv-portal-web/home).
3. State in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel that all USiP services have been restored and confirmed to be working.
