# System Recovery Plan - Unified Sign-in Page

In the event of a disaster in which the OCTO Identity Team Unified Sign-in Page service needs to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored. This document also assumes all AWS services have been fully restored to an operational state.

### Contact Information

Product Manager, Technical Lead, and dependent system contacts for incidents in the communications section below can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all OCTO IDentity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. The on-call individual should ensure the following individuals are made aware via slack of the current outage and the remediation status.

1. Team Product Manager (PM) and Technical Lead, contact [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).  
2. Incident commander from the Platform team, this should be the person who restored the VA.gov resources.  
3. Relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

## Recovery Verification Steps

1. Verify that each of the following Datadog monitors are functioning above the listed percentage:  
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
